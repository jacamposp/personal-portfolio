export const siteConfig = {
  name: 'Joel Campos',
  title: 'Joel Campos | Full Stack Developer',
  description:
    'Joel Campos is a Full Stack Developer with 5+ years of experience building scalable web applications with React, TypeScript, Node.js, and modern tooling.',
  url: import.meta.env.VITE_SITE_URL ?? 'https://joecpdev.vercel.app',
  image: '/profilePicture.png',
  jobTitle: 'Full Stack Developer',
  locale: 'en_US',
  sameAs: [
    'https://github.com/jacamposp',
    'https://www.linkedin.com/in/joelcamposp/',
    'https://www.instagram.com/campos_j10',
  ],
  knowsAbout: [
    'React',
    'TypeScript',
    'Node.js',
    'Next.js',
    'Tailwind CSS',
    'PostgreSQL',
    'Express',
    'Prisma',
  ],
} as const
