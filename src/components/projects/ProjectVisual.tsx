import type { Project } from '../../types/project'
import { cn } from '../../lib/utils'
import { accentStyles } from './projectStyles'

type ProjectVisualProps = {
  project: Project
  large?: boolean
}

export function ProjectVisual({ project, large = false }: ProjectVisualProps) {
  const styles = accentStyles[project.accent.colorName]
  const preview = project.screenshots[0]

  return (
    <figure
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80',
        large ? 'min-h-72' : 'min-h-48',
      )}
    >
      <img
        src={preview.src}
        alt={`${project.title} ${preview.label}`}
        className={cn(
          'h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]',
          large ? 'min-h-72' : 'min-h-48',
        )}
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink-950/88 via-ink-950/16 to-transparent" />
      <div className={cn('absolute inset-0 bg-radial opacity-45', styles.visual)} />
      <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-4">
        <figcaption>
          <span className={cn('rounded-full border px-3 py-1 text-xs font-semibold', styles.badge)}>
            {project.accent.label}
          </span>
          <p className="mt-3 text-sm font-semibold text-white">{preview.label}</p>
          <p className="mt-1 text-xs text-slate-400">{project.screenshots.length} screenshots</p>
        </figcaption>
      </div>
    </figure>
  )
}
