import {
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Rocket,
  Sparkles,
  Trophy,
  type LucideIcon,
} from 'lucide-react'
import { getProjectBySlug } from './projects'

export type JourneyMilestone = {
  id: string
  type: string
  year: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  awards?: string[]
  cta?: {
    label: string
    href: string
  }
  icon: LucideIcon
  featured?: boolean
}

const freshTraceProject = getProjectBySlug('freshtrace')
const asteroidZeroProject = getProjectBySlug('asteroid-zero')

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: 'software-engineering-start',
    type: 'Education',
    year: '2023',
    title: 'Software Engineering Technician Diploma',
    subtitle: 'Centennial College',
    description:
      'Began formal training in software development, programming fundamentals, databases, web development, software engineering practices, and full-stack application design.',
    tags: ['C#', 'Java', 'SQL', 'Web Development'],
    icon: GraduationCap,
  },
  {
    id: 'asteroid-zero',
    type: 'Award / Hackathon',
    year: '2025',
    title: 'Asteroid Zero',
    subtitle: 'NASA Space Apps Hackathon',
    description:
      'Built an interactive asteroid visualization project using NASA data APIs, map-based rendering, and game-style threat assessment in a team hackathon environment.',
    awards: ['Most Creative Project', 'Best Use of Data Sources'],
    tags: ['React', 'NASA APIs', 'Leaflet', 'Data Visualization'],
    cta: asteroidZeroProject
      ? {
          label: 'View Project',
          href: `/projects/${asteroidZeroProject.slug}`,
        }
      : undefined,
    icon: Trophy,
  },
  {
    id: 'freshtrace',
    type: 'Flagship Project',
    year: '2026',
    title: 'FreshTrace',
    subtitle: 'AI-Powered Grocery Management Platform',
    description:
      'Developed a full-stack grocery management platform with OCR receipt scanning, food freshness tracking, PostgreSQL/Supabase integration, receipt image storage, admin views, and AI recipe suggestions.',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'Supabase', 'OCR', 'AI'],
    cta: freshTraceProject
      ? {
          label: 'View Project',
          href: `/projects/${freshTraceProject.slug}`,
        }
      : undefined,
    icon: Rocket,
    featured: true,
  },
  {
    id: 'alignerr',
    type: 'AI Experience',
    year: '2026',
    title: 'Alignerr',
    subtitle: 'AI Data Trainer / AI Contributor',
    description:
      'Contributed to AI evaluation and data-quality tasks, including structured annotation, transcription review, and human feedback workflows used to improve AI model performance.',
    tags: ['AI Evaluation', 'Annotation', 'Transcription', 'Data Quality'],
    icon: BrainCircuit,
  },
  {
    id: 'graduation',
    type: 'Education',
    year: '2026',
    title: 'Graduated',
    subtitle: 'Software Engineering Technician Diploma',
    description:
      'Completed a software engineering diploma with hands-on experience across full-stack development, databases, software design, web applications, and team-based engineering projects.',
    tags: ['Full-Stack Development', 'Software Engineering', 'Databases'],
    icon: Sparkles,
  },
  {
    id: 'open-to-opportunities',
    type: 'Current',
    year: 'Today',
    title: 'Open to Junior Developer Roles',
    subtitle: 'Vancouver, BC / Canada',
    description:
      'Focused on junior software developer, React developer, full-stack developer, and AI-related entry-level opportunities.',
    tags: ['React', 'TypeScript', 'Full-Stack', 'AI'],
    icon: BriefcaseBusiness,
  },
]

export const journeySummary = {
  eyebrow: 'Journey',
  title: 'A focused path from software training to production-minded projects.',
  description:
    'Education, hackathon recognition, full-stack capstone work, and AI contributor experience organized as one technical progress story.',
  locationIcon: MapPin,
}
