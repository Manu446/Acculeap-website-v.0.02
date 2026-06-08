# Acculeap Analytics Website

A modern, fully animated Next.js website for Acculeap Analytics — an IFRS advisory, risk management, and business intelligence firm serving East Africa's financial institutions.

## Features

- **Dark/Light Theme** — Full theme switching with system preference detection
- **Cinematic Preloader** — Animated loading screen with progress indicator
- **Scroll Animations** — Framer Motion powered reveal animations throughout
- **Interactive Components** — Floating cards, particle effects, carousels
- **Responsive Design** — Mobile-first approach with breakpoints for all devices
- **5 Complete Pages** — Home, Solutions, About, Insights, Contact
- **Performance Optimized** — Static export, optimized images, reduced motion support

## Tech Stack

- **Next.js 14** — React framework with App Router
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animation library
- **Lucide React** — Icon library

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
app/                 # Next.js App Router pages
  layout.tsx         # Root layout with theme provider
  page.tsx           # Home page
  about/page.tsx     # About page
  solutions/page.tsx # Solutions page
  insights/page.tsx  # Insights page
  contact/page.tsx   # Contact page
  globals.css        # Global styles
components/
  animations/        # Animation components
  sections/          # Page section components
  ui/                # Reusable UI components
hooks/               # Custom React hooks
lib/                 # Utility functions
public/              # Static assets
```

## Color Scheme

- **Primary**: Maroon (#800000)
- **Accent**: Maroon Light (#A52A2A)
- **Background**: Light (#fafafa) / Dark (#0a0a0a)
- **Text**: Dark (#212121) / Light (#f5f5f5)

## License

© 2026 Acculeap Analytics. All rights reserved.
