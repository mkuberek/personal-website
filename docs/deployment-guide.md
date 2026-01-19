# deployment guide

## overview

This site is deployed to Vercel with automatic deployments from GitHub. Any push to the main branch triggers a new deployment.

## initial setup (already done)

1. **GitHub Repository**
   - Repository connected to Vercel
   - Main branch configured for production deployments

2. **Vercel Project**
   - Framework: Next.js
   - Build command: `yarn build`
   - Output directory: `.next`
   - Install command: `yarn install`

## deployment workflow

### automatic deployments

```
Push to GitHub → Vercel builds → Deploy to production
```

1. Make changes locally
2. Test locally with `yarn dev`
3. Commit changes: `git add . && git commit -m "description"`
4. Push to GitHub: `git push origin main`
5. Vercel automatically builds and deploys
6. Site live at matteokuberek.com

### preview deployments

- Pull requests automatically get preview deployments
- Test changes before merging to main
- Preview URL provided in PR comments

## manual deployment

If needed, you can trigger manual deployments from the Vercel dashboard:

1. Go to vercel.com
2. Select the project
3. Click "Deployments"
4. Click "Redeploy"

## environment variables

Currently, no environment variables are required for this static site.

If you need to add environment variables in the future:
1. Go to Vercel dashboard
2. Select project → Settings → Environment Variables
3. Add variables for Production, Preview, and Development
4. Redeploy to apply changes

## build process

The build process runs:

```bash
yarn install  # Install dependencies
yarn build    # Build Next.js app
```

Build output is optimized and ready for production.

## monitoring

### vercel dashboard

Monitor deployments at:
- Build logs
- Deployment status
- Analytics (if enabled)
- Error tracking

### build failures

If a build fails:
1. Check the build logs in Vercel
2. Common issues:
   - TypeScript errors
   - Missing dependencies
   - Syntax errors
   - Build timeouts

Fix the issue locally, test, then push again.

## domain configuration

**Primary domain**: matteokuberek.com

Domain is configured in Vercel dashboard under:
Project Settings → Domains

## performance optimization

Vercel automatically provides:
- Global CDN
- Automatic image optimization
- Edge caching
- Gzip/Brotli compression
- HTTP/2 support

## rollback

To rollback to a previous deployment:
1. Go to Vercel dashboard
2. Click "Deployments"
3. Find the working deployment
4. Click "..." → "Promote to Production"

## analytics (optional)

To enable Vercel Analytics:
1. Go to project settings in Vercel
2. Enable Analytics
3. No code changes needed

## security

- HTTPS enforced automatically
- No backend = minimal security concerns
- No sensitive data in repository
- Regular dependency updates recommended

## maintenance

### regular tasks

1. **Update Dependencies**
   ```bash
   yarn upgrade-interactive --latest
   ```

2. **Security Audits**
   ```bash
   yarn audit
   ```

3. **Monitor Build Times**
   - Check Vercel dashboard
   - Optimize if builds get slow

### content updates

To update content:
1. Edit component files in `src/app/components/`
2. Test locally
3. Push to GitHub
4. Automatic deployment

No database or CMS required!

## troubleshooting

### site not updating

1. Check Vercel deployment status
2. Verify build succeeded
3. Clear browser cache
4. Check correct branch is deployed

### build errors

1. Run `yarn build` locally first
2. Fix any TypeScript errors
3. Ensure all dependencies are installed
4. Check Node.js version compatibility

### styling issues

1. Verify Tailwind CSS configuration
2. Check `globals.css` is imported
3. Ensure PostCSS is configured correctly
4. Clear `.next` cache: `rm -rf .next`

## support

For Vercel-specific issues:
- Vercel documentation: https://vercel.com/docs
- Vercel support: support@vercel.com

For Next.js issues:
- Next.js documentation: https://nextjs.org/docs
