import type { ProjectAccent } from '../../types/project'

export const accentStyles: Record<
  ProjectAccent['colorName'],
  {
    badge: string
    glow: string
    icon: string
    line: string
    visual: string
  }
> = {
  cyan: {
    badge: 'border-accent-400/30 bg-accent-400/10 text-accent-200',
    glow: 'shadow-[0_0_70px_rgba(56,189,248,0.2)]',
    icon: 'text-accent-200',
    line: 'from-accent-400/70',
    visual: 'from-accent-400/30 via-sky-400/10 to-transparent',
  },
  emerald: {
    badge: 'border-emerald-300/30 bg-emerald-300/10 text-emerald-200',
    glow: 'shadow-[0_0_56px_rgba(110,231,183,0.14)]',
    icon: 'text-emerald-200',
    line: 'from-emerald-300/70',
    visual: 'from-emerald-300/25 via-teal-300/10 to-transparent',
  },
  violet: {
    badge: 'border-violet-300/30 bg-violet-300/10 text-violet-200',
    glow: 'shadow-[0_0_56px_rgba(196,181,253,0.14)]',
    icon: 'text-violet-200',
    line: 'from-violet-300/70',
    visual: 'from-violet-300/25 via-fuchsia-300/10 to-transparent',
  },
}
