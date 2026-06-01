import type { LucideIcon } from 'lucide-react'

export type NavItem = {
  label: string
  href: `#${string}` | `/${string}`
  kind: 'anchor' | 'route'
}

export type SectionItem = {
  id: string
  eyebrow: string
  title: string
  description: string
  icon: LucideIcon
}
