export const skillCategories = [
  {
    title: 'Primary Language',
    icon: 'mdi:star-circle-outline',
    primary: true,
    items: [
      { name: 'JavaScript', note: 'primary' },
    ],
    extras: ['TypeScript', 'Python', 'C', 'C#', 'SQL'],
  },
  {
    title: 'Web Technologies',
    icon: 'mdi:layers-outline',
    items: [
      { name: 'React', note: 'expert' },
      { name: 'Vue', note: 'expert' },
      { name: 'Node.js', note: 'core' },
      { name: 'Next.js' },
      { name: 'FastAPI' },
      { name: 'Django' },
      { name: '.NET / C#' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'AI & Automation',
    icon: 'mdi:robot-outline',
    items: [
      { name: 'Agentic AI' },
      { name: 'Claude API' },
      { name: 'Gemini' },
      { name: 'ElevenLabs' },
      { name: 'n8n' },
      { name: 'LangChain' },
    ],
  },
  {
    title: 'Databases',
    icon: 'mdi:database-outline',
    items: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'MS SQL Server' },
      { name: 'MongoDB' },
      { name: 'Redis' },
      { name: 'Supabase' },
    ],
  },
  {
    title: 'Cloud & Tools',
    icon: 'mdi:cloud-outline',
    items: [
      { name: 'AWS' },
      { name: 'Git' },
      { name: 'Linux' },
      { name: 'Docker' },
      { name: 'System Design' },
    ],
  },
]
