import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCode } from 'react-icons/fa';
import githubData from '../github-data.json';

const ProjectGallery = () => {
    const [repos, setRepos] = useState(githubData);
    const [loading, setLoading] = useState(githubData.length === 0);
    const [error, setError] = useState(null);

    const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
    const USERNAME = process.env.REACT_APP_GITHUB_USERNAME || 'Bhavish511';

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                // If we already have data, we don't necessarily need to show loading
                // But we still fetch in the background to get latest stars/updates
                const headers = {
                    'Accept': 'application/vnd.github.v3+json',
                };

                if (GITHUB_TOKEN && GITHUB_TOKEN !== 'your_github_token_here') {
                    headers['Authorization'] = `token ${GITHUB_TOKEN}`;
                }

                const response = await fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, {
                    headers: headers
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch projects from GitHub');
                }

                const data = await response.json();

                // Filter out forks and sort by stars (descending)
                const refinedRepos = data
                    .filter(repo => !repo.fork)
                    .sort((a, b) => b.stargazers_count - a.stargazers_count)
                    .map(repo => ({
                        id: repo.id,
                        name: repo.name,
                        description: repo.description,
                        stargazers_count: repo.stargazers_count,
                        language: repo.language,
                        html_url: repo.html_url,
                        homepage: repo.homepage
                    }));

                setRepos(refinedRepos);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching GitHub repos:', err);
                // If we have local data, we don't show the error to the user
                setRepos(prevRepos => {
                    if (prevRepos.length === 0) {
                        setError(err.message);
                    }
                    return prevRepos;
                });
                setLoading(false);
            }
        };

        fetchRepos();
    }, [USERNAME, GITHUB_TOKEN]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    if (loading) {
        return (
            <div className="gallery-status">
                <div className="loader"></div>
                <p>Loading projects from GitHub...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="gallery-status error">
                <p>Oops! {error}</p>
                <button onClick={() => window.location.reload()} className="btn btn-secondary">Try Again</button>
            </div>
        );
    }



    const getThematicImage = (repo) => {
        if (repo.image) return repo.image;

        // Curated high-quality tech images for various types of projects
        const thematicImages = {
            'javascript': 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070&auto=format&fit=crop',
            'react': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
            'python': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
            'java': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
            'html': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop',
            'default': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop'
        };

        const lang = (repo.language || 'default').toLowerCase();
        return thematicImages[lang] || thematicImages['default'];
    };

    return (
        <section id="github" className="github-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">GitHub Gallery</h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle">My latest open-source contributions and projects</p>
                </motion.div>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {repos.slice(0, 12).map((repo) => {
                        const projectImg = getThematicImage(repo);
                        return (
                            <motion.div
                                key={repo.id}
                                className="project-card github-card"
                                variants={cardVariants}
                                whileHover={{ y: -10 }}
                            >
                                <div className="project-image-container">
                                    <img
                                        src={projectImg}
                                        alt={repo.name}
                                        className="project-image"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `https://via.placeholder.com/800x450/1e293b/f8fafc?text=${encodeURIComponent(repo.name)}`;
                                        }}
                                    />
                                    <div className="project-overlay">
                                        <div className="overlay-buttons">
                                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" title="View Source">
                                                <FaGithub />
                                            </a>
                                            {repo.homepage && (
                                                <a href={repo.homepage} target="_blank" rel="noopener noreferrer" title="Live Demo">
                                                    <FaCode />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <div className="project-tags">
                                        {repo.language && <span className="tech-tag">{repo.language}</span>}
                                        <span className="tech-tag"><FaStar size={10} /> {repo.stargazers_count}</span>
                                    </div>
                                    <h3>{repo.name}</h3>
                                    <p>{repo.description || 'A passionate project exploring modern web technologies and clean architecture.'}</p>
                                    <div className="project-footer">
                                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn-link">
                                            Details <span className="arrow">→</span>
                                        </a>
                                        {repo.homepage && (
                                            <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="btn-demo">
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectGallery;
