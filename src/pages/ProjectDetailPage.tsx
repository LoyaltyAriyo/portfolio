import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  Layers,
  Lightbulb,
  Target,
  Users,
  Wrench,
  X,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { getProjectBySlug } from '../data/projects'
import { fadeUp } from '../lib/motion'
import type { ProjectScreenshot } from '../types/project'
import { Container } from '../components/ui/Container'
import { ProjectActions } from '../components/projects/ProjectActions'
import { ProjectVisual } from '../components/projects/ProjectVisual'
import { TechStackPills } from '../components/projects/TechStackPills'
import { NotFoundPage } from './NotFoundPage'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const [selectedScreenshot, setSelectedScreenshot] = useState<ProjectScreenshot | null>(null)

  useEffect(() => {
    if (!selectedScreenshot) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedScreenshot(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedScreenshot])

  if (!project) {
    return <NotFoundPage />
  }

  return (
    <main className="pt-28">
      <Container>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="grid gap-8 pb-14 pt-8 lg:grid-cols-[1fr_27rem] lg:items-start"
        >
          <div>
            <div className="flex flex-wrap gap-2">
              {[project.category, project.year, project.status].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-normal text-white sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-3 text-xl font-medium text-slate-300">{project.subtitle}</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              {project.longDescription}
            </p>
            <div className="mt-8">
              <ProjectActions project={project} showDetails={false} />
            </div>
          </div>

          <ProjectVisual project={project} large />
        </motion.section>

        <section className="grid gap-5 pb-20 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="surface-card p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-normal text-white">Overview</h2>
            <p className="mt-4 leading-7 text-slate-400">{project.shortDescription}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <InfoBlock icon={Users} label="Role" value={project.role} />
              <InfoBlock icon={Layers} label="Team" value={project.team} />
            </div>
            <div className="mt-7">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                Tech Stack
              </p>
              <TechStackPills items={project.techStack} />
            </div>
            {project.awards.length > 0 ? (
              <div className="mt-7">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Awards
                </p>
                <ListItems items={project.awards} icon={BadgeCheck} />
              </div>
            ) : null}
          </div>

          <div className="grid gap-5">
            <NarrativeCard icon={Target} title="Problem" body={project.problem} />
            <NarrativeCard icon={Lightbulb} title="Solution" body={project.solution} />
            <DetailList title="Key features" icon={CheckCircle2} items={project.features} />
            <DetailList title="Technical challenges" icon={Wrench} items={project.challenges} />
            <DetailList title="Lessons learned" icon={BookOpen} items={project.lessons} />
          </div>
        </section>

        <section className="pb-24">
          <div className="mb-6 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-300">
              Screenshots
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white">
              Key screens from {project.title}
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {project.screenshots.map((screenshot) => (
              <figure
                key={screenshot.label}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition hover:border-accent-400/45"
              >
                <button
                  type="button"
                  onClick={() => setSelectedScreenshot(screenshot)}
                  className="group block w-full cursor-zoom-in overflow-hidden bg-ink-900 text-left"
                  aria-label={`Open full-size ${project.title} ${screenshot.label} screenshot`}
                >
                  <span className="block aspect-[16/9] overflow-hidden">
                    <img
                      src={screenshot.src}
                      alt={`${project.title} ${screenshot.label}`}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]"
                      loading="lazy"
                    />
                  </span>
                </button>
                <figcaption className="border-t border-white/10 px-4 py-3 text-sm font-semibold text-slate-200">
                  {screenshot.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </Container>

      {selectedScreenshot ? (
        <div
          className="fixed inset-0 z-[70] bg-ink-950/92 p-4 backdrop-blur-md sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} ${selectedScreenshot.label} full-size screenshot`}
          onClick={() => setSelectedScreenshot(null)}
        >
          <div className="flex h-full flex-col">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-300">
                  {project.title}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-normal text-white">
                  {selectedScreenshot.label}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedScreenshot(null)}
                className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.08] text-white transition hover:border-accent-400/50 hover:bg-accent-400/10"
                aria-label="Close full-size screenshot"
              >
                <X size={18} />
              </button>
            </div>
            <div className="mx-auto flex min-h-0 w-full max-w-7xl flex-1 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-3 sm:p-4">
              <div className="flex h-full w-full items-center justify-center" onClick={(event) => event.stopPropagation()}>
                <img
                  src={selectedScreenshot.src}
                  alt={`${project.title} ${selectedScreenshot.label}`}
                  className="max-h-full max-w-full rounded-xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  )
}

type IconComponent = React.ComponentType<{ size?: number; className?: string }>

function InfoBlock({
  icon: Icon,
  label,
  value,
}: {
  icon: IconComponent
  label: string
  value: string
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <Icon size={18} className="text-accent-300" />
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-medium text-slate-200">{value}</p>
    </div>
  )
}

function NarrativeCard({
  icon: Icon,
  title,
  body,
}: {
  icon: IconComponent
  title: string
  body: string
}) {
  return (
    <article className="surface-card p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.05] text-accent-300">
          <Icon size={18} />
        </span>
        <h2 className="text-2xl font-semibold tracking-normal text-white">{title}</h2>
      </div>
      <p className="mt-4 leading-7 text-slate-400">{body}</p>
    </article>
  )
}

function DetailList({
  title,
  icon,
  items,
}: {
  title: string
  icon: IconComponent
  items: string[]
}) {
  return (
    <article className="surface-card p-6 sm:p-8">
      <h2 className="text-2xl font-semibold tracking-normal text-white">{title}</h2>
      <div className="mt-5">
        <ListItems items={items} icon={icon} />
      </div>
    </article>
  )
}

function ListItems({ items, icon: Icon }: { items: string[]; icon: IconComponent }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
          <Icon size={17} className="mt-1 shrink-0 text-accent-300" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
