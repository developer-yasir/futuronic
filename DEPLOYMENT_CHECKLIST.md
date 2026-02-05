# Deployment Checklist for Futuronic Client

## Pre-deployment Steps

- [ ] Update version number in `package.json`
- [ ] Run tests (if any exist): `npm test`
- [ ] Build the project: `npm run build`
- [ ] Verify the build works locally: `npm run preview`
- [ ] Check that all environment variables are set correctly

## Platform-Specific Deployment Instructions

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Set the build command to: `npm run build`
3. Set the publish directory to: `dist`
4. Add environment variables if needed
5. Deploy!

### Namecheap Stellar Plus Hosting

1. Build your project locally: `npm run build`
2. Upload the contents of the `dist/` folder to your web hosting directory via FTP or cPanel
3. Point your domain to the uploaded files
4. Ensure your server handles client-side routing (SPA) correctly

### General Web Hosting

1. Run `npm run build` to create optimized production files
2. Upload the contents of the `dist/` folder to your web server
3. Configure your web server to serve the `index.html` file for all routes (SPA configuration)

## Server Configuration Requirements

For Single Page Applications (SPAs), configure your server to serve the `index.html` file for all routes that don't match static assets. This allows client-side routing to work correctly.

### Apache (.htaccess)
```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

### Nginx
```
location / {
  try_files $uri $uri/ /index.html;
}
```

## Post-Deployment Verification

- [ ] Visit the deployed site
- [ ] Test navigation between pages
- [ ] Verify all assets load correctly
- [ ] Check console for errors
- [ ] Test responsive design on different devices
- [ ] Verify SEO meta tags are present
- [ ] Test contact forms or other interactive elements

## Troubleshooting Common Issues

### Routing Issues
- Ensure your server is configured to handle client-side routing
- All non-asset routes should return `index.html`

### Asset Loading Issues
- Check that the `dist` folder was uploaded completely
- Verify file permissions on the server

### Environment Variables
- Ensure all required environment variables are set on the deployment platform
- Remember that Vite uses `VITE_` prefix for environment variables accessible in client code

## Rollback Plan

If issues occur after deployment:
1. Keep the previous version accessible
2. Document the exact commit hash of the working version
3. Have a quick rollback procedure ready
4. Monitor site performance and errors after deployment