const fs = require('fs');
const path = require('path');
const https = require('https');
require('dotenv').config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const USERNAME = process.env.REACT_APP_GITHUB_USERNAME || 'Bhavish511';
const DATA_FILE = path.join(__dirname, '../src/github-data.json');

async function request(options) {
    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                if (res.statusCode === 200) {
                    try {
                        resolve(JSON.parse(body));
                    } catch (e) {
                        resolve(body);
                    }
                } else if (res.statusCode === 404) {
                    resolve(null);
                } else {
                    reject(new Error(`Request failed with status ${res.statusCode}: ${body}`));
                }
            });
        });
        req.on('error', reject);
        req.end();
    });
}

async function fetchRepos() {
    console.log(`Fetching repositories for user: ${USERNAME}...`);
    const options = {
        hostname: 'api.github.com',
        path: `/users/${USERNAME}/repos?per_page=100&sort=updated`,
        method: 'GET',
        headers: {
            'User-Agent': 'Node.js Script',
            'Accept': 'application/vnd.github.v3+json'
        }
    };
    if (GITHUB_TOKEN && GITHUB_TOKEN !== 'your_github_token_here') {
        options.headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }
    return request(options);
}

async function fetchReadme(repoName) {
    const options = {
        hostname: 'api.github.com',
        path: `/repos/${USERNAME}/${repoName}/readme`,
        method: 'GET',
        headers: {
            'User-Agent': 'Node.js Script',
            'Accept': 'application/vnd.github.v3+json'
        }
    };
    if (GITHUB_TOKEN && GITHUB_TOKEN !== 'your_github_token_here') {
        options.headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }
    const data = await request(options);
    if (data && data.content) {
        return Buffer.from(data.content, 'base64').toString('utf8');
    }
    return null;
}

function extractDescription(readme) {
    if (!readme) return null;
    // Look for content after the first H1 header, or just the first paragraph
    const lines = readme.split('\n').filter(line => line.trim() !== '');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        // Skip headers and badges
        if (line.startsWith('#') || line.startsWith('[!') || line.startsWith('<')) continue;
        // Return first non-header, non-badge paragraph (truncated if too long)
        return line.length > 200 ? line.substring(0, 197) + '...' : line;
    }
    return null;
}

function extractVercelLink(readme) {
    if (!readme) return null;
    const vercelRegex = /https:\/\/[a-zA-Z0-9-]+\.vercel\.app/g;
    const matches = readme.match(vercelRegex);
    if (!matches) return null;

    // Exclude known badge/stat/profile domains
    const excludedDomains = [
        'github-readme-stats',
        'vercel-badges',
        'github-profile-summary-cards',
        'github-readme-streak-stats',
        'github-profile-trophy',
        'github-readme-quotes',
        'capsule-render',
        'typing-svg'
    ];
    const validMatch = matches.find(url => !excludedDomains.some(domain => url.toLowerCase().includes(domain)));

    return validMatch || null;
}

function extractImage(readme, repo) {
    if (!readme) return null;

    // Priorities:
    // 1. Matches with "demo", "screenshot", "preview", "banner" in name
    // 2. First image found

    const imgRegex = /!\[.*?\]\((.*?)\)/g;
    const htmlImgRegex = /<img.*?src=["'](.*?)["']/g;

    const urls = [];
    let match;

    while ((match = imgRegex.exec(readme)) !== null) urls.push(match[1]);
    while ((match = htmlImgRegex.exec(readme)) !== null) urls.push(match[1]);

    if (urls.length === 0) return null;

    // Filter out badges/icons (rough heuristic: very short URLs or known badge providers)
    const filteredUrls = urls.filter(url => {
        const isBadge = url.includes('img.shields.io') || url.includes('badge.fury.io') || url.includes('github-readme-stats');
        return !isBadge;
    });

    if (filteredUrls.length === 0) return null;

    // Find best candidate
    const bestMatch = filteredUrls.find(url =>
        url.toLowerCase().includes('screenshot') ||
        url.toLowerCase().includes('demo') ||
        url.toLowerCase().includes('preview') ||
        url.toLowerCase().includes('banner')
    ) || filteredUrls[0];

    // Convert relative URLs to absolute GitHub raw URLs
    if (bestMatch.startsWith('http')) return bestMatch;

    // Handle paths like "./assets/img.png" or "img.png"
    const cleanPath = bestMatch.startsWith('./') ? bestMatch.substring(2) : bestMatch;
    return `https://raw.githubusercontent.com/${USERNAME}/${repo.name}/${repo.default_branch}/${cleanPath}`;
}

async function main() {
    try {
        const repos = await fetchRepos();
        const refinedRepos = [];

        for (const repo of repos) {
            if (repo.fork) continue;

            console.log(`Processing ${repo.name}...`);
            const readme = await fetchReadme(repo.name);

            const enhancedDescription = extractDescription(readme) || repo.description;
            const vercelLink = extractVercelLink(readme);
            const projectImage = extractImage(readme, repo);

            refinedRepos.push({
                id: repo.id,
                name: repo.name,
                description: enhancedDescription,
                stargazers_count: repo.stargazers_count,
                language: repo.language,
                html_url: repo.html_url,
                homepage: repo.homepage || vercelLink,
                image: projectImage
            });

            // Add a small delay to avoid hitting rate limits too fast
            await new Promise(r => setTimeout(r, 100));
        }

        refinedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
        fs.writeFileSync(DATA_FILE, JSON.stringify(refinedRepos, null, 2));
        console.log(`Successfully saved ${refinedRepos.length} enhanced repositories with images to ${DATA_FILE}`);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

main();
