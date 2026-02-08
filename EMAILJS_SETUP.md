# EmailJS Setup Guide

This guide will help you set up EmailJS so your contact form can send emails directly to your inbox.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

## Step 2: Create an Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. **Copy the Service ID** (you'll need this)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - The message content
   - `{{to_email}}` - Your email (khezir.rajput@gmail.com)

4. Example template:
   ```
   Subject: New Contact Form Message from {{from_name}}
   
   You have received a new message from your portfolio contact form.
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```

5. **Copy the Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called API Key)
3. **Copy the Public Key**

## Step 5: Configure in Your Project

1. Create a `.env` file in the root directory of your project
2. Add the following lines (replace with your actual values):

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. **Important**: Restart your development server after creating/updating the `.env` file:
   ```bash
   npm start
   ```

## Step 6: Deploy

When deploying to GitHub Pages, you'll need to add these environment variables:

1. Go to your GitHub repository
2. Go to **Settings** → **Secrets and variables** → **Actions**
3. Add the three environment variables as repository secrets
4. Or, for GitHub Pages, you can hardcode them in the Contact.js file (they'll be visible in the code, but that's okay for public keys)

**Alternative for GitHub Pages**: Since environment variables don't work the same way with static hosting, you can directly update the values in `src/components/Contact.js`:

```javascript
const SERVICE_ID = 'your_actual_service_id';
const TEMPLATE_ID = 'your_actual_template_id';
const PUBLIC_KEY = 'your_actual_public_key';
```

## Testing

1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your email inbox - you should receive the message!

## Troubleshooting

- **Emails not sending**: Check browser console for errors
- **"Invalid credentials"**: Double-check your Service ID, Template ID, and Public Key
- **Template variables not working**: Make sure variable names match exactly (case-sensitive)

For more help, visit [EmailJS Documentation](https://www.emailjs.com/docs/)
