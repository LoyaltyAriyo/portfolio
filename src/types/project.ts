export type ProjectStatus = 'Completed' | 'Award Winner'

export type ProjectAccent = {
  label: string
  colorName: 'cyan' | 'emerald' | 'violet'
}

export type ProjectStat = {
  label: string
  value: string
}

export type ProjectScreenshot = {
  label: string
  src: string
}

export type Project = {
  id: string
  slug: string
  title: string
  subtitle: string
  category: string
  year: string
  status: ProjectStatus
  featured: boolean
  priority: number
  shortDescription: string
  longDescription: string
  problem: string
  solution: string
  role: string
  team: string
  techStack: string[]
  features: string[]
  challenges: string[]
  lessons: string[]
  awards: string[]
  liveUrl: string | null
  githubUrl: string | null
  image: string
  screenshots: ProjectScreenshot[]
  accent: ProjectAccent
  stats: ProjectStat[]
}
