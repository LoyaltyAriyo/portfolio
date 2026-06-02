import { Mail, Rocket, Sparkles, UserRound } from 'lucide-react'
import type { NavItem, SectionItem } from '../types/navigation'

export const navItems: NavItem[] = [
  { label: 'About', href: '#about', kind: 'anchor' },
  { label: 'Projects', href: '#projects', kind: 'anchor' },
  { label: 'Skills', href: '#skills', kind: 'anchor' },
  { label: 'Journey', href: '#journey', kind: 'anchor' },
  { label: 'Contact', href: '#contact', kind: 'anchor' },
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
    id: 'skills',
    eyebrow: 'Skills',
    title: 'A practical technical skill map belongs here.',
    description:
      'This placeholder will become a clean overview of frontend, backend, tooling, and AI-related capabilities.',
    icon: Sparkles,
  },
  {
    id: 'journey',
    eyebrow: 'Journey',
    title: 'A unified technical progress story belongs here.',
    description:
      'This placeholder is replaced on the home page by the scroll-activated journey timeline.',
    icon: Rocket,
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
