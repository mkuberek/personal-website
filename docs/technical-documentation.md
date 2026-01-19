# technical documentation

## project structure

```
matteokuberek.com/
├── docs/                    # Project documentation
├── public/                  # Static assets
│   └── images/             # Image files
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── components/     # React components
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Main page
│   │   └── globals.css     # Global styles
│   └── types/              # TypeScript type definitions
├── .cursorrules            # Cursor IDE rules
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## component architecture

### component organization

All components live in `src/app/components/` with the following naming convention:
- File names: lowercase with hyphens (e.g., `hero-section.tsx`)
- Component names: PascalCase (e.g., `HeroSection`)
- One component per file
- Co-locate styles when using CSS modules

### component structure example

```typescript
'use client';

import React from 'react';

interface ComponentNameProps {
  // Props interface
}

export const ComponentName: React.FC<ComponentNameProps> = ({ props }) => {
  return (
    // JSX
  );
};
```

## styling approach

### tailwind css

- Primary styling method
- Utility-first approach
- Responsive design utilities
- Custom theme configuration in `tailwind.config.js`

### custom css

- Global styles in `globals.css`
- Component-specific styles when needed
- CSS modules for scoped styles (optional)

### design tokens

```css
Primary Colors:
- Background: Clean, modern neutrals
- Accent: Professional blues/greens
- Text: High contrast for readability

Typography:
- Headings: Bold, clear hierarchy
- Body: Readable, appropriate line height
- Monospace: For technical content (if needed)
```

## typescript configuration

### strict mode enabled

- Type safety enforced
- No implicit any
- Proper interface definitions for all components

### path aliases

- `@/` points to `src/`
- Example: `import { Component } from '@/app/components/component'`

## development workflow

### local development

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Lint code
yarn lint
```

### file naming conventions

- **Components**: lowercase-with-hyphens.tsx
- **Documentation**: lowercase-with-hyphens.md
- **Types**: lowercase-with-hyphens.ts
- **Exceptions**: README.md, LICENSE, etc.

## deployment

### vercel deployment

- Automatic deployment on push to main branch
- Preview deployments for pull requests
- Environment variables managed in Vercel dashboard
- Build command: `yarn build`
- Output directory: `.next`

### environment variables

Currently none required (static site).

## performance considerations

- Optimize images (use Next.js Image component)
- Minimize bundle size
- Remove unused dependencies
- Lazy load components if needed
- Enable Vercel Analytics (optional)

## seo optimization

- Meta tags in `layout.tsx`
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Open Graph tags for social sharing
- Structured data (optional)

## accessibility

- WCAG 2.1 AA compliance
- Semantic HTML
- ARIA labels where appropriate
- Keyboard navigation support
- Sufficient color contrast
- Responsive text sizing

## browser support

- Modern evergreen browsers
- Mobile responsive
- No IE11 support needed

## code quality

### linting

- ESLint with Next.js configuration
- TypeScript strict mode
- Prettier for code formatting (if configured)

### best practices

- Functional components with hooks
- TypeScript interfaces for all props
- Proper error handling
- Clean, readable code
- Comments for complex logic only
- No console.logs in production

## maintenance

### regular updates

- Keep dependencies up to date
- Monitor for security vulnerabilities
- Test after updates
- Review Vercel deployment logs

### content updates

- Edit content directly in components
- Rebuild and deploy via Git push
- No CMS needed for this simple site
