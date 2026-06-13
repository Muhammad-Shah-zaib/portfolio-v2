export const projects = [
  {
    title: 'Bunai Corner - Product Listing Automation',
    description:
      'After my sister\'s handcrafted crochet page hit around 100 orders on Instagram, I built an end-to-end automation pipeline to make listing products on our e-commerce store fast and consistent.',
    highlights: [
      '5-step pipeline: select AI gateway, upload raw photo, configure camera angles, generate product copy and optimized images, then publish directly to the store.',
      'Cut listing time from 10-20 minutes to 1-3 minutes per product - over 86% faster with up to 10x throughput.',
      'Supports multiple AI gateways including Gemini, OpenRouter, and a custom proxy for flexible model selection.',
    ],
    tech: ['Vue.js', 'Node.js', 'Gemini', 'OpenRouter', 'Vertex AI', 'Claude', 'AWS EC2', 'DigitalOcean'],
    featured: true,
    links: [
      { label: 'GitHub', icon: 'mdi:github', url: 'https://lnkd.in/dzWMWSaD' },
      { label: 'Live App', icon: 'mdi:open-in-new', url: 'https://lnkd.in/drY3YKWT' },
      { label: 'Watch Walkthrough', icon: 'mdi:play-circle-outline', url: 'https://lnkd.in/d6aDsjQw' },
    ],
  },
  {
    title: 'Intelligent AI Drawing Tutor',
    description:
      'A comprehensive agentic AI application that functions as an interactive drawing tutor with real-time voice, text, and video interactions.',
    highlights: [
      'Multi-model architecture using Claude for reasoning and Gemini for memory management.',
      'Real-time voice synthesis powered by ElevenLabs for natural conversations.',
      'Sophisticated memory system with Supabase enabling cross-session learning continuity.',
    ],
    tech: ['Next.js', 'FastAPI', 'Supabase', 'ElevenLabs', 'Claude', 'Gemini'],
    featured: false,
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
    links: [],
  },
]
