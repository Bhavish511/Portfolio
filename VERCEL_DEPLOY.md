# 🚀 Hosting on Vercel

Follow these steps to deploy your portfolio to Vercel:

## 1. Push to GitHub
Make sure your latest changes are pushed to your GitHub repository:
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click **"Add New"** > **"Project"**.
3. Import your `Portfolio` repository.

## 3. Configure Environment Variables
Before clicking Deploy, open the **Environment Variables** section and add these keys from your `.env` file:

| Key | Value |
|-----|-------|
| `REACT_APP_GITHUB_TOKEN` | `[Your Token]` |
| `REACT_APP_GITHUB_USERNAME` | `Bhavish511` |
| `REACT_APP_EMAILJS_SERVICE_ID` | `service_3szpdew` |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | `template_1kbbtd8` |
| `REACT_APP_EMAILJS_PUBLIC_KEY` | `69hm7rGKQGQ6JyhjW` |

## 4. Deploy!
Click **Deploy**. Vercel will automatically build and host your site.

> [!TIP]
> Your `vercel.json` file is already included to handle page routing correctly!
