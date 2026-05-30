import { Award, BriefcaseBusiness, Code2, Mail, Sparkles, UserRound } from 'lucide-react'
import type { NavItem, SectionItem } from '../types/navigation'

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const sectionItems: SectionItem[] = [
  {
    id: 'about',
    eyebrow: 'About',
    title: 'A concise profile section is coming next.',
    description:
      'This area will introduce Amir, his software engineering technician background, and the roles he is targeting.',
    icon: UserRound,
  },
  {
    id: 'projects',
    eyebrow: 'Projects',
    title: 'Selected project case studies will live here.',
    description:
      'The next phase can add focused projects with outcomes, stacks, links, and recruiter-friendly context.',
    icon: Code2,
  },
  {
    id: 'skills',
    eyebrow: 'Skills',
    title: 'A practical technical skill map belongs here.',
    description:
      'This placeholder will become a clean overview of frontend, backend, tooling, and AI-related capabilities.',
    icon: Sparkles,
  },
  {
    id: 'experience',
    eyebrow: 'Experience',
    title: 'Education and relevant experience will be structured here.',
    description:
      'This section will stay direct and scannable for junior software developer and full-stack applications.',
    icon: BriefcaseBusiness,
  },
  {
    id: 'awards',
    eyebrow: 'Awards',
    title: 'Awards and recognition can be added without clutter.',
    description:
      'This placeholder reserves space for academic awards, certifications, and notable achievements.',
    icon: Award,
  },
  {
    id: 'contact',
    eyebrow: 'Contact',
    title: 'A simple contact surface will complete the page.',
    description:
      'The final version can include email, LinkedIn, GitHub, resume, and a lightweight validated contact form.',
    icon: Mail,
  },
]
