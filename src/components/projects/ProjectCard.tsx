import { Award, Calendar, ScanText, Sparkles, Database } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Project } from '../../types/project'
import { cn } from '../../lib/utils'
import { ProjectActions } from './ProjectActions'
import { ProjectVisual } from './ProjectVisual'
import { TechStackPills } from './TechStackPills'
import { accentStyles } from './projectStyles'

type ProjectCardProps = {
  project: Project
  variant?: 'featured' | 'compact' | 'listing'
}

export function ProjectCard({ project, variant = 'compact' }: ProjectCardProps) {
  const styles = accentStyles[project.accent.colorName]
  const isFeatured = variant === 'featured'
  const freshTraceHighlights = [
    { label: 'OCR Receipt Scanning', icon: ScanText },
    { label: 'AI Recipe Suggestions', icon: Sparkles },
    { label: 'Supabase + PostgreSQL', icon: Database },
  ]
  const architectureSteps = ['React', 'APIs', 'PostgreSQL', 'Supabase Storage', 'AI']

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={cn(
        'surface-card group h-full overflow-hidden p-5 transition duration-300 hover:border-white/20',
        isFeatured ? `relative lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:gap-9 lg:p-8 ${styles.glow} before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_78%_18%,rgba(56,189,248,0.16),transparent_38%)] before:opacity-80` : 'p-5',
      )}
    >
      <div className="relative flex h-full flex-col">
        <div className="flex flex-wrap items-center gap-2">
          {isFeatured ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-300/30 bg-accent-400/10 px-3 py-1 text-xs font-semibold text-accent-200">
              <Sparkles size={13} />
              Featured Project
            </span>
          ) : null}
          <span className={cn('rounded-full border px-3 py-1 text-xs font-semibold', styles.badge)}>
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
            <Calendar size={13} />
            {project.year}
          </span>
          {project.awards.length > 0 ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-300/25 bg-violet-300/10 px-3 py-1 text-xs font-semibold text-violet-200">
              <Award size={13} />
              Award Winner
            </span>
          ) : null}
        </div>

        <h3
          className={cn(
            'mt-5 font-semibold tracking-normal text-white',
            isFeatured ? 'text-3xl sm:text-4xl' : 'text-2xl',
          )}
        >
          {project.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-slate-300">{project.subtitle}</p>
        <p className={cn('mt-4 leading-7 text-slate-400', isFeatured ? 'text-base' : 'text-sm')}>
          {isFeatured ? project.longDescription : project.shortDescription}
        </p>

        {!isFeatured && variant === 'compact' ? (
          <div className="mt-5">
            <ProjectVisual project={project} />
          </div>
        ) : null}

        {isFeatured ? (
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {freshTraceHighlights.map(({ label, icon: Icon }) => (
              <div key={label} className="rounded-xl border border-accent-300/15 bg-accent-400/[0.06] p-3 transition duration-200 hover:border-accent-300/35 hover:bg-accent-400/10">
                <Icon size={17} className="text-accent-300" />
                <p className="mt-2 text-sm font-semibold leading-5 text-white">{label}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-6">
          <TechStackPills items={project.techStack} limit={isFeatured ? undefined : 5} />
        </div>

        {isFeatured ? (
          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.035] p-3">
            <div className="flex flex-wrap items-center gap-2">
              {architectureSteps.map((step, index) => (
                <span key={step} className="contents">
                  <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs font-semibold text-slate-300">
                    {step}
                  </span>
                  {index < architectureSteps.length - 1 ? (
                    <span className="text-xs text-accent-300">-&gt;</span>
                  ) : null}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {isFeatured ? (
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {project.features.slice(0, 4).map((feature) => (
              <span key={feature} className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-slate-300 transition duration-200 hover:border-accent-300/25 hover:bg-white/[0.055]">
                {feature}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-7">
          <ProjectActions project={project} compact={!isFeatured} />
        </div>
      </div>

      {isFeatured || variant === 'listing' ? (
        <div className={cn('relative', isFeatured ? 'mt-8 lg:mt-0' : 'mt-6')}>
          <ProjectVisual project={project} large={isFeatured} />
        </div>
      ) : null}
    </motion.article>
  )
}
