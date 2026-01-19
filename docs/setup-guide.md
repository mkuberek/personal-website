# setup guide

## prerequisites

Before you begin, ensure you have:

- **Node.js** 18.x or later
- **Yarn** package manager
- **Git** for version control
- Code editor (VS Code recommended)

## initial installation

### 1. clone the repository

```bash
cd /path/to/your/projects
git clone [repository-url]
cd matteokuberek.com
```

### 2. install dependencies

```bash
yarn install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- And dev dependencies

### 3. run development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The page auto-updates as you edit files.

## project commands

### development

```bash
yarn dev          # Start development server (port 3000)
```

### building

```bash
yarn build        # Create production build
yarn start        # Start production server
```

### linting

```bash
yarn lint         # Run ESLint
```

## development workflow

### making changes

1. **Edit Components**
   - Components are in `src/app/components/`
   - All files use lowercase-with-hyphens naming
   - TypeScript for type safety

2. **Update Styles**
   - Use Tailwind CSS utility classes
   - Global styles in `src/app/globals.css`
   - Responsive design built-in

3. **Test Locally**
   - Run `yarn dev`
   - Check all breakpoints (mobile, tablet, desktop)
   - Verify links work
   - Test performance

### updating content

#### contact information

Edit `src/app/components/contact-section.tsx`:

```typescript
// Update email
contact@matteokuberek.com

// Update social links
https://www.instagram.com/matteokuberek/
https://www.tiktok.com/@matteokuberek
```

#### about section

Edit `src/app/components/about-section.tsx`:
- Update trading description
- Modify feature cards
- Change copy as needed

#### hero section

Edit `src/app/components/hero-section.tsx`:
- Change name/title
- Update tagline
- Modify call-to-action buttons

### adding new features

1. Create new component in `src/app/components/`
2. Use component template from `.cursorrules`
3. Import and use in `src/app/page.tsx`
4. Test thoroughly

## folder structure

```
matteokuberek.com/
├── src/
│   └── app/
│       ├── components/          # All React components
│       │   ├── hero-section.tsx
│       │   ├── about-section.tsx
│       │   ├── contact-section.tsx
│       │   └── footer.tsx
│       ├── layout.tsx           # Root layout + metadata
│       ├── page.tsx             # Main page
│       └── globals.css          # Global styles
├── public/                      # Static files (images, etc.)
│   └── images/
├── docs/                        # Documentation
├── archive/                     # Old site backup
├── .cursorrules                # Project guidelines
├── next.config.js              # Next.js config
├── tailwind.config.js          # Tailwind config
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies
```

## configuration files

### next.config.js

Basic Next.js configuration. Modify if you need:
- Custom headers
- Redirects
- Image domains
- Environment variables

### tailwind.config.js

Tailwind CSS configuration:
- Content paths for scanning
- Theme extensions
- Custom animations
- Plugins

### tsconfig.json

TypeScript configuration:
- Strict mode enabled
- Path aliases (`@/` → `src/`)
- Modern ES features

## environment setup

### vs code (recommended)

Install extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

### cursor ide

Project includes `.cursorrules` for Cursor-specific guidelines.

## common tasks

### update dependencies

```bash
# Interactive upgrade
yarn upgrade-interactive --latest

# Specific package
yarn upgrade next@latest

# All packages
yarn upgrade
```

### clear cache

```bash
# Remove build cache
rm -rf .next

# Remove node_modules
rm -rf node_modules
yarn install
```

### fix linting errors

```bash
yarn lint --fix
```

## troubleshooting

### port 3000 already in use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 yarn dev
```

### typescript errors

```bash
# Check TypeScript
yarn tsc --noEmit

# Common fixes:
# - Add proper type definitions
# - Check imports
# - Verify component props
```

### styling not working

```bash
# Ensure Tailwind is processing correctly
# Check tailwind.config.js content paths
# Verify globals.css imports Tailwind
# Clear .next cache and rebuild
```

### build fails

```bash
# Run build locally to debug
yarn build

# Check for:
# - TypeScript errors
# - Missing dependencies
# - Syntax errors
# - Import issues
```

## best practices

### component development

1. Use TypeScript interfaces for props
2. Add `'use client'` for client-side features
3. Keep components focused and reusable
4. Use semantic HTML
5. Ensure accessibility

### styling

1. Tailwind utilities first
2. Responsive design (mobile-first)
3. Consistent spacing/colors
4. Dark theme considerations
5. Performance optimization

### git workflow

```bash
# Check status
git status

# Stage changes
git add .

# Commit with clear message
git commit -m "feat: add new trading section"

# Push to GitHub (triggers deployment)
git push origin main
```

### commit messages

Use conventional commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting
- `refactor:` - Code restructuring
- `chore:` - Maintenance

## next steps

1. ✅ Initial setup complete
2. Run `yarn dev` and explore
3. Read documentation in `/docs`
4. Review `.cursorrules` for guidelines
5. Make your first change
6. Push to GitHub and see it deploy!

## getting help

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **Vercel Docs**: https://vercel.com/docs

## maintenance

### regular updates

- Check for dependency updates monthly
- Review security advisories
- Update Node.js when needed
- Monitor Vercel deployment logs
- Test after major framework updates

### content updates

Since this is a simple static site:
- Edit component files directly
- No database to maintain
- No backend to monitor
- Minimal ongoing maintenance

Happy coding! 🚀
