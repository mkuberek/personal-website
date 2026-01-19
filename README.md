# matteokuberek.com

Personal website for Matteo Kuberek - Day Trader

## About

This is a minimalist single-page website serving as a digital business card for Matteo Kuberek, a self-taught day trader who shares his trading knowledge and insights through social media.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (automated via GitHub)
- **Package Manager**: Yarn

## Getting Started

Install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
matteokuberek.com/
├── docs/                       # Project documentation
├── src/
│   └── app/
│       ├── components/         # React components
│       │   ├── hero-section.tsx
│       │   ├── about-section.tsx
│       │   ├── contact-section.tsx
│       │   └── footer.tsx
│       ├── layout.tsx          # Root layout with metadata
│       ├── page.tsx            # Main page
│       └── globals.css         # Global styles
├── public/                     # Static assets
├── .cursorrules               # Development guidelines
└── next.config.js             # Next.js configuration
```

## Development Guidelines

- All file names must be lowercase with hyphens (except README, LICENSE, etc.)
- Components are located in `src/app/components/`
- Use TypeScript with proper type definitions
- Follow Tailwind CSS utility-first approach
- See `.cursorrules` for detailed guidelines

## Deployment

This site is automatically deployed to Vercel when changes are pushed to the main branch.

**Build command**: `yarn build`  
**Output directory**: `.next`

## Documentation

Project documentation is available in the `/docs` folder:

- `project-overview.md` - High-level project information
- `technical-documentation.md` - Technical details and architecture

## Contact

For questions or updates, contact: contact@matteokuberek.com

## License

© 2026 Matteo Kuberek. All rights reserved.
