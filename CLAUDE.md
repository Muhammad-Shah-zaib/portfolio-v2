# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
```

## Architecture

### Project Overview
Personal portfolio website built with **Vue 3** (Composition API), **Vite**, **Tailwind CSS v4**, **GSAP** animations, **Lenis** smooth scroll, and **Iconify** icons.

The site is a single-page application organized into full-width sections. Content is data-driven (separate from components) to enable easy updates without touching component logic.

### Directory Structure
```
src/
├── assets/          # Static images (currently empty, ready for expansion)
├── components/      # Reusable UI pieces used across sections
│   ├── AppNavbar.vue
│   ├── BackgroundDecor.vue
│   ├── ExperienceCard.vue
│   ├── ProjectCard.vue
│   ├── SectionHeading.vue
│   ├── SkillCard.vue
├── composables/     # Vue composables for shared logic
│   ├── useScrollAnimations.js  (Lenis + GSAP ScrollTrigger setup)
│   └── useTheme.js
├── data/            # Plain JS objects — all portfolio content
│   ├── experience.js
│   ├── freelance.js
│   ├── personal.js
│   ├── projects.js
│   └── skills.js
├── sections/        # Full-width page sections (one per viewport area)
│   ├── AboutSection.vue
│   ├── BunaiCornerSection.vue
│   ├── ContactSection.vue
│   ├── EducationSection.vue
│   ├── ExperienceSection.vue
│   ├── FooterSection.vue
│   ├── FreelanceSection.vue
│   ├── HeroSection.vue
│   ├── MissionSection.vue
│   ├── ProjectsSection.vue
│   └── SkillsSection.vue
├── styles/
│   └── main.css     # Global styles + Tailwind @theme color tokens
├── App.vue          # Root component (imports all sections)
└── main.js          # Vite entry point
```

### Key Patterns

#### Animations & Scroll
- **Lenis** provides smooth scroll physics with easing (initialized in `useScrollAnimations.js`)
- **GSAP ScrollTrigger** applies reveal animations as elements enter viewport
- `useScrollAnimations()` composable is called in App.vue root — sets up Lenis RAF loop and cleanup on unmount
- `animateOnScroll(selector, options)` and `parallaxEffect(selector, speed)` utilities are exported from `useScrollAnimations.js` and can be called from sections
- Default scroll animation: fade-in from 60px below with 0.8s duration and 0.1s stagger

#### Theming
All colors are defined via CSS custom properties in the `@theme` block in `src/styles/main.css`:
- **Primary**: Google Blue scale (brand color)
- **Accent**: Warm amber (used sparingly for highlights)
- **Surfaces**: Warm sand tones (backgrounds, cards)
- **Text**: Google dark scale (primary, secondary, muted)
- **Border**: Neutral grays

Colors cascade through Tailwind utilities: `bg-primary-500`, `text-text-primary`, `border-border`, etc.

Dark mode is architecturally supported (color values can be overridden under `[data-theme="dark"]` in CSS). The `useTheme` composable already has toggle logic — just needs a UI button in the navbar.

#### Sections
Each section in `src/sections/` is standalone and self-contained:
- Pulls data from `src/data/`
- Uses reusable components from `src/components/` (ProjectCard, ExperienceCard, etc.)
- Calls animation utilities via `useScrollAnimations()` composable

Sections are composed top-to-bottom in App.vue; order determines page flow.

#### Data Layers
Content lives in `src/data/` as plain JS exports (arrays or objects). Each file has a single responsibility:
- `projects.js` — projects array; set `featured: true` for main project (larger card, accent border)
- `experience.js` — work experiences
- `skills.js` — skill categories and items
- `freelance.js` — freelance services or offerings
- `education.js` — education entries
- `personal.js` — personal metadata (name, email, photo path, etc.)

To update portfolio content, edit the relevant data file; components automatically consume it.

### Vite Configuration
- `@` alias points to `src/` for clean imports (`import Foo from '@/components/Foo.vue'`)
- Plugins: `@vitejs/plugin-vue` (Vue SFC support), `@tailwindcss/vite` (Tailwind CSS v4 integration)

## Deployment

Static site — after `npm run build`, the `dist/` folder is production-ready. Can be deployed to:
- Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static host

## Common Tasks

### Adding a Project
1. Edit `src/data/projects.js` — add entry to `projects` array
2. Set `featured: true` if it should be the main featured project (gets a larger card with accent border)
3. ProjectCard component will render it automatically

### Adding Experience / Education
1. Add entry to `src/data/experience.js` or `src/data/education.js`
2. Relevant section component pulls and renders it

### Updating Colors
Edit the `@theme` block in `src/styles/main.css`. All utilities automatically use the new values.

### Adding a New Section
1. Create `NewSection.vue` in `src/sections/`
2. Import and add to App.vue's template (controls page flow)
3. Use reusable components and data files; call `animateOnScroll()` for scroll reveals

### Updating Photo
Place your photo at `public/photo.jpg`. Hero section references it via the `personal` data object.
