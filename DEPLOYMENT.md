# Deployment Guide

## 🚀 GitHub Pages Deployment

### Automatic Deployment (Recommended)

The repository is configured with GitHub Actions for automatic deployment to GitHub Pages. Follow these steps:

1. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Build and deployment":
     - Source: GitHub Actions
   - Save the settings

2. **Push to Main Branch**:
```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

3. **Monitor Deployment**:
   - Go to the "Actions" tab in your repository
   - Watch the deployment progress
   - Once complete, your site will be live at: `https://mbron64.github.io/portfolio`

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build the static site
npm run build

# The static files are in the 'out' directory
# Upload these files to your hosting provider
```

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` directory:
```bash
echo "yourdomain.com" > public/CNAME
```

2. Update `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove or comment out the basePath for custom domains
  // basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  trailingSlash: true,
};
```

3. Configure DNS with your domain provider:
   - Add an A record pointing to GitHub Pages IP addresses
   - Or add a CNAME record pointing to `mbron64.github.io`

4. Update GitHub repository settings:
   - Go to Settings > Pages
   - Add your custom domain

## 📝 Pre-Deployment Checklist

- [ ] All content in `app/lib/data.ts` is up to date
- [ ] Personal information (email, social links) is correct
- [ ] Build completes without errors (`npm run build`)
- [ ] Test locally (`npm run dev`)
- [ ] All sections display correctly
- [ ] Dark mode toggle works
- [ ] Responsive design verified on mobile/tablet/desktop
- [ ] GitHub repository settings configured for Pages

## 🔧 Troubleshooting

### Build Fails
- Check for TypeScript errors: `npm run build`
- Verify all imports are correct
- Ensure all dependencies are installed: `npm install`

### Site Not Loading
- Verify GitHub Pages is enabled in repository settings
- Check GitHub Actions workflow completed successfully
- Ensure the `basePath` in `next.config.ts` matches your repository name

### Images Not Displaying
- Ensure images are in the `public` directory
- Use relative paths: `/image.png` not `./image.png`
- Remember images are unoptimized for static export

### 404 Errors
- Verify `trailingSlash: true` is set in `next.config.ts`
- Check that all internal links use the correct basePath

## 🎯 Performance Optimization

The site is already optimized with:
- Static site generation (SSG)
- Lazy loading with Framer Motion
- Optimized fonts
- Minimal JavaScript bundle
- Tailwind CSS for efficient styling

Expected Lighthouse scores:
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## 📦 Alternative Hosting Options

### Vercel (Recommended for Next.js)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Cloudflare Pages
Connect your GitHub repository in the Cloudflare Pages dashboard and it will auto-deploy.

## 🔄 Updating Content

1. Edit content in `app/lib/data.ts`
2. Test locally: `npm run dev`
3. Commit and push to main branch
4. GitHub Actions will automatically deploy

## 📧 Support

If you encounter any issues:
- Check the GitHub Actions logs for deployment errors
- Review the [Next.js documentation](https://nextjs.org/docs)
- Verify your Node.js version is 20+

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion

