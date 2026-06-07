export interface Project {
  id: number
  title: string
  description: string
  content?: string
  technologies: string[]
  /** Optional static fallback when live preview is unavailable */
  image?: string
  githubUrl?: string
  projectUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'TechNews Scraper',
    description: 'A web scraper that collects and organizes tech news feeds automatically.',
    content:
      'Tech News App is a modern, responsive web application that aggregates the latest technology news using the Airtable API. Built with React, TypeScript, Vite, and styled with Tailwind CSS and shadcn/ui, it features category filtering, intelligent caching, and robust error handling. The app prioritizes accessibility, fully complying with WCAG 2.1 AA standards, and offers a clean, user-friendly experience across devices.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Axios', 'n8n', 'AirTable'],
    githubUrl: 'https://github.com/jacamposp/tech-news-app',
    projectUrl: 'https://tech-news-ai-app.vercel.app/',
  },
  {
    id: 2,
    title: 'Sportico',
    description: 'A sports field booking platform.',
    content:
      'Sportico is a sports field booking platform built with React, TypeScript, next.js, and styled with Tailwind CSS and shadcn/ui. It features category filtering, intelligent caching, and robust error handling. It also offers a clean, user-friendly experience across devices.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Next.js', 'Shadcn/ui', 'Prisma', 'Postgres'],
    githubUrl: 'https://github.com/jacamposp/sportico',
    projectUrl: 'https://sporticocr.vercel.app/',
  },
]

export default projects
