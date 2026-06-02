import {
  Bot,
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  type LucideIcon,
} from 'lucide-react'

export type SkillCategory = {
  title: string
  description: string
  skills: string[]
  icon: LucideIcon
}

export const coreStack = [
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Supabase',
  'Tailwind CSS',
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Polished, responsive interfaces built with modern React patterns.',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'React Router'],
    icon: Code2,
  },
  {
    title: 'Backend Development',
    description: 'Application APIs, authentication flows, and service-side logic.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'bcrypt', 'Prisma'],
    icon: Braces,
  },
  {
    title: 'Databases & Cloud',
    description: 'Structured data, cloud platforms, and production-minded persistence.',
    skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Oracle SQL', 'PL/SQL', 'Vercel'],
    icon: Database,
  },
  {
    title: 'AI & Automation',
    description: 'Practical AI integrations that improve workflows and data handling.',
    skills: ['OpenAI APIs', 'OCR Integration', 'Prompt Engineering', 'AI Workflows', 'Data Annotation'],
    icon: Bot,
  },
  {
    title: 'Software Engineering',
    description: 'Collaborative engineering habits for reliable product delivery.',
    skills: ['Agile/Scrum', 'Git', 'GitHub', 'OOP', 'System Design', 'Requirements Analysis', 'Debugging'],
    icon: GitBranch,
  },
  {
    title: 'Tools & Workflow',
    description: 'Daily development tools for testing, linting, planning, and shipping.',
    skills: ['VS Code', 'Postman', 'Thunder Client', 'ESLint', 'npm', 'GitHub Projects'],
    icon: Cloud,
  },
]
