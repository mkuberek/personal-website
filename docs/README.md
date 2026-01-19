# documentation

Welcome to the matteokuberek.com documentation!

## quick links

- [Project Overview](./project-overview.md) - Learn about the project goals and philosophy
- [Setup Guide](./setup-guide.md) - Get started with development
- [Technical Documentation](./technical-documentation.md) - Architecture and technical details
- [Deployment Guide](./deployment-guide.md) - How deployment works on Vercel
- [Changelog](./changelog.md) - Version history and updates

## what is this site?

This is a minimalist single-page website serving as a digital business card for **Matteo Kuberek**, a self-taught day trader who shares his trading knowledge through social media.

## getting started

New to the project? Start here:

1. Read the [Project Overview](./project-overview.md) to understand the goals
2. Follow the [Setup Guide](./setup-guide.md) to get your development environment ready
3. Review the [Technical Documentation](./technical-documentation.md) to understand the architecture
4. Check the `.cursorrules` file in the project root for coding guidelines

## project structure

```
matteokuberek.com/
├── docs/                    # You are here!
├── src/
│   └── app/
│       ├── components/      # React components
│       ├── layout.tsx       # Root layout
│       ├── page.tsx         # Main page
│       └── globals.css      # Styles
├── public/                  # Static assets
├── archive/                 # Old site backup
└── Configuration files
```

## common tasks

### update content

Edit the component files in `src/app/components/`:
- `hero-section.tsx` - Name, title, tagline, CTA buttons
- `about-section.tsx` - Trading background and expertise
- `contact-section.tsx` - Contact info and social links
- `footer.tsx` - Copyright information

### update styling

- Use Tailwind CSS utility classes in components
- Edit `src/app/globals.css` for global styles
- Modify `tailwind.config.js` for theme customization

### add new sections

1. Create new component in `src/app/components/`
2. Follow the component template in `.cursorrules`
3. Import and use in `src/app/page.tsx`
4. Test locally with `yarn dev`

### deploy changes

```bash
git add .
git commit -m "description of changes"
git push origin main
```

Vercel automatically deploys when you push to main.

## documentation philosophy

- **Lowercase file names**: All docs use lowercase-with-hyphens
- **Markdown format**: Easy to read and edit
- **Comprehensive**: Cover all aspects of the project
- **Up-to-date**: Keep docs in sync with code changes
- **Clear**: Write for future developers (including yourself)

## tech stack summary

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first styling
- **Vercel** - Hosting and deployment
- **Yarn** - Package management

## key features

- ✅ Single-page application
- ✅ No backend required
- ✅ Fully responsive design
- ✅ SEO optimized
- ✅ Google Analytics integrated
- ✅ Fast loading times
- ✅ Component-based architecture
- ✅ TypeScript type safety
- ✅ Automated deployments

## development workflow

1. **Local Development**: `yarn dev`
2. **Make Changes**: Edit components and styles
3. **Test**: Check in browser at localhost:3000
4. **Build**: `yarn build` to verify production build
5. **Commit**: Git commit with clear message
6. **Push**: Git push triggers automatic deployment
7. **Verify**: Check live site on matteokuberek.com

## support

Need help? Check these resources:

- **Project Docs**: You're reading them!
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **TypeScript Docs**: https://www.typescriptlang.org/docs
- **Vercel Docs**: https://vercel.com/docs

## contributing

When making changes:

1. Follow the `.cursorrules` guidelines
2. Use lowercase file names
3. Write clean, typed code
4. Test locally before pushing
5. Update documentation if needed
6. Use meaningful commit messages

## version

Current version: **2.0.0** (Complete redesign - Jan 2026)

See [Changelog](./changelog.md) for version history.

---

**Last Updated**: January 19, 2026

For questions or updates, contact: contact@matteokuberek.com
