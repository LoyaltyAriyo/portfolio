import { ArrowRight, Code2, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../../types/project'

type ProjectActionsProps = {
  project: Project
  compact?: boolean
  showDetails?: boolean
}

export function ProjectActions({ project, compact = false, showDetails = true }: ProjectActionsProps) {
  const buttonClass = compact
    ? 'inline-flex h-9 items-center justify-center gap-2 rounded-lg px-3 text-xs font-semibold transition'
    : 'inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition'

  return (
    <div className="flex flex-wrap gap-2">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className={`${buttonClass} bg-white text-ink-950 hover:bg-slate-200`}
        >
          Live Demo
          <ExternalLink size={compact ? 14 : 15} />
        </a>
      ) : null}
      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className={`${buttonClass} border border-white/10 bg-white/[0.06] text-white hover:border-accent-400/50 hover:bg-accent-400/10`}
        >
          GitHub
          <Code2 size={compact ? 14 : 15} />
        </a>
      ) : null}
      {showDetails ? (
        <Link
          to={`/projects/${project.slug}`}
          className={`${buttonClass} border border-white/10 bg-white/[0.06] text-white hover:border-accent-400/50 hover:bg-accent-400/10`}
        >
          View Details
          <ArrowRight size={compact ? 14 : 15} />
        </Link>
      ) : null}
    </div>
  )
}
