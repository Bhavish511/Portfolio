# Portfolio Website

A modern, fully responsive portfolio website built with React, featuring smooth animations, a light purple theme, and a professional design.

## Features

- ✨ Modern, responsive design with light purple theme
- 🎨 Smooth animations using Framer Motion
- 📱 Fully responsive across all devices
- 🎯 Glass-morphism design elements
- 🚀 Smooth scrolling navigation
- 💼 Professional sections: Hero, About, Skills, Projects, Experience, Services, Team, Contact
- 📧 Contact form with email integration
- 🔗 Social media links in footer

## Adding Your Profile Image

To add your professional photo:

1. Place your image file in `src/assets/profile.jpg`
2. Or update the `profileImage` constant in `src/components/Hero.js` with your image path/URL

The current setup uses a placeholder image that you can easily replace.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

## Deployment to GitHub Pages

This portfolio is configured for deployment to GitHub Pages. Follow these steps:

### Step 1: Update Homepage URL

1. Open `package.json`
2. Replace `YOUR_USERNAME` in the `homepage` field with your GitHub username
3. Replace `portfolio` with your repository name (if different)

Example:
```json
"homepage": "https://khurram.github.io/portfolio"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it (e.g., `portfolio` or `my-portfolio`)
3. **Do NOT** initialize it with a README, .gitignore, or license (we already have these)

### Step 3: Push Your Code to GitHub

Run these commands in your terminal:

```bash
# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

Once your code is on GitHub, run:

```bash
npm run deploy
```

This will:
1. Build your React app
2. Deploy it to the `gh-pages` branch
3. Make it live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### Step 5: Enable GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select the `gh-pages` branch
4. Your site will be live in a few minutes!

### Updating Your Site

Whenever you make changes:
1. Commit your changes: `git add . && git commit -m "Your message"`
2. Push to main: `git push origin main`
3. Deploy: `npm run deploy`

Your site will automatically update!

### Troubleshooting

- If the site shows a blank page, make sure the `homepage` field in `package.json` matches your GitHub Pages URL exactly
- Clear your browser cache if you don't see updates
- Check the `gh-pages` branch exists in your repository

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
