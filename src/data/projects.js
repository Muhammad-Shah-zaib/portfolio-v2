export const projects = [
  {
    title: 'Bunai Corner - Product Listing Automation',
    description:
      'Manually listing products used to take 10-20 minutes of bouncing between AI tools to enhance images and write copy. I built this end-to-end automation pipeline to take a basic, low-resolution photo and instantly generate professional, e-commerce-ready images (with proper lighting, background, and textures) alongside optimized titles, and descriptions.',
    highlights: [
      'Streamlined workflow: upload a raw photo, generate enhanced visuals and product copy, review in the gallery view, and publish directly to the store.',
      'Cut listing time from 10-20 minutes to 1-3 minutes per product, completely automating the back-and-forth prompting process.',
      'Configured with multiple AI gateways (Gemini, OpenRouter, and a custom proxy server), primarily utilizing Gemini models to transform unprofessional photos into high-quality, market-ready assets.'
    ],
    tech: ['Vue.js', 'Node.js', 'Gemini', 'OpenRouter', 'Vertex AI', 'Claude', 'AWS EC2', 'DigitalOcean'],
    featured: true,
    links: [
      { label: 'GitHub', icon: 'mdi:github', url: 'https://lnkd.in/dzWMWSaD' },
      { label: 'Live App', icon: 'mdi:open-in-new', url: 'https://autoshot.snsadminportal.dev' },
      { label: 'Watch Walkthrough', icon: 'mdi:play-circle-outline', url: 'https://www.loom.com/share/4e98e169b0734f3c8cf3312dfa315e8d' },
    ],
  },
  {
    title: 'Intelligent AI Drawing Tutor',
    description:
      'A comprehensive agentic AI application that functions as an interactive drawing tutor with real-time voice, text, and video interactions.',
    highlights: [
      'Multi-model architecture using Claude for reasoning and Gemini for memory management.',
      'Real-time voice synthesis powered by ElevenLabs for natural conversations.',
      'Sophisticated memory system that also manages user profiles for customizing the learning experience and enabling cross-session learning continuity.',
    ],
    tech: ['Next.js', 'FastAPI', 'Supabase', 'ElevenLabs', 'Claude', 'Gemini'],
    featured: false,
    badge: 'Freelance',
    links: [],
  },
  {
    title: 'Sales Portal & Campaign Manager',
    description:
      'A centralized CRM and ERP solution that digitized an entire sales pipeline, serving as a single source of truth for leads and field agent performance.',
    highlights: [
      'Keyword-driven scraper for automatic lead generation from potential client locations.',
      'Campaign management workflow for bundling locations and assigning to sales agents.',
      'Kanban-style dashboard for real-time progress tracking and field updates.',
    ],
    tech: ['Next.js', 'Supabase'],
    featured: false,
    badge: 'Freelance',
    links: [],
  },
  {
    title: 'Office Management System — HR Module',
    description:
      'As a freelance developer, I was solely responsible for engineering a high-value, end-to-end automated workforce tracking solution within an enterprise HR module. I designed and coded a smart leave management system, integrated real-time calendar sync, and overhauled the module\'s authentication flow to resolve legacy bugs and reinforce security.',
    highlights: [
      'Threshold-based leave logic: if a department drops below critical capacity, the system auto-flags the final request as a "no-cover leave" to alert HR before approval.',
      'Azure Calendar API integration to sync employee schedules and team availability across the organization in real-time.',
      'Overhauled the core authentication flow — fixed legacy session bugs, secured user sessions, and enforced role-based access control.',
    ],
    tech: ['Blazor', '.NET Core', 'jQuery', 'Azure Calendar API'],
    featured: false,
    badge: 'Freelance',
    fullWidth: true,
    links: [],
  },
]
