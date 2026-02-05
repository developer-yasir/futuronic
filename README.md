# Futuronic Client

A modern React application built with Vite, React, Redux Toolkit, and Tailwind CSS.

## Deployment Configuration

This project is configured for easy deployment to platforms like Netlify, Vercel, or Namecheap Stellar Plus.

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized, minified files ready for deployment.

### Deployment Instructions

#### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set the build command to: `npm run build`
3. Set the publish directory to: `dist`
4. Add environment variables if needed

#### Deploy to Namecheap Stellar Plus

1. Build your project locally: `npm run build`
2. Upload the contents of the `dist/` folder to your web hosting directory via FTP or cPanel
3. Point your domain to the uploaded files

#### Manual Deployment

1. Run `npm run build` to create optimized production files
2. Upload the contents of the `dist/` folder to your web server
3. Configure your web server to serve the `index.html` file for all routes (SPA configuration)

### Server Configuration Notes

For Single Page Applications (SPAs), configure your server to serve the `index.html` file for all routes that don't match static assets. This allows client-side routing to work correctly.

Example for Apache (.htaccess):
```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

Example for Nginx:
```
location / {
  try_files $uri $uri/ /index.html;
}
```

### Environment Variables

If you need environment variables for different environments, create `.env.production` file with your production values.

## Development

To run the application in development mode:

```bash
npm run dev
```

Then visit `http://localhost:5173` in your browser.

## Project Structure

- `src/` - Source code for the React application
- `public/` - Static assets that are copied directly to the build
- `dist/` - Generated production build (created by `npm run build`)# futuronic
