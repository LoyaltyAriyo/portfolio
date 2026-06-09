import { useState, type MouseEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Award, Code2, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { sortedProjects } from '../../data/projects'
import { fadeUp, motionEase, revealViewport, staggerContainer } from '../../lib/motion'
import type { Project, ProjectScreenshot } from '../../types/project'
import { Container } from '../ui/Container'

const caseStudyCopy: Record<
  string,
  {
    caseNumber: string
    headline: string
    description: string
  }
> = {
  freshtrace: {
    caseNumber: '01',
    headline: 'Reducing household food waste.',
    description:
      'FreshTrace transforms grocery receipts into an intelligent inventory system powered by OCR and AI.',
  },
  cafe195: {
    caseNumber: '02',
    headline: 'Modernizing coffee shop ordering.',
    description:
      'A full-stack ordering platform with authentication, product management, orders, and role-based dashboards.',
  },
  'asteroid-zero': {
    caseNumber: '03',
    headline: 'Visualizing near-Earth asteroid data.',
    description:
      'An award-winning NASA Space Apps project that turned asteroid data into an interactive threat visualization experience.',
  },
}

const freshTraceTabs = [
  { label: 'Dashboard', screenshotLabel: 'Home Dashboard' },
  { label: 'Inventory', screenshotLabel: 'Account Overview' },
  { label: 'Admin', screenshotLabel: 'Admin Dashboard' },
  { label: 'Reports', screenshotLabel: 'Weekly Report' },
]

export function ProjectShowcase() {
  const freshTrace = sortedProjects.find((project) => project.slug === 'freshtrace')
  const supportingProjects = sortedProjects.filter((project) =>
    ['cafe195', 'asteroid-zero'].includes(project.slug),
  )

  if (!freshTrace) {
    return null
  }

  return (
    <section id="projects" className="section-spacing scroll-mt-16 overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent-300">
            Selected Case Studies
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
            Building products around real problems.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            A focused look at software products, full-stack systems, and data-driven experiences
            I built through team projects and hackathons.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={staggerContainer}
          className="mt-14 grid gap-5"
        >
          <motion.div variants={fadeUp}>
            <FeaturedCaseStudy project={freshTrace} />
          </motion.div>
          <div className="grid gap-5 lg:grid-cols-2">
            {supportingProjects.map((project) => (
              <motion.div key={project.id} variants={fadeUp}>
                <SupportingCaseStudyCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

function FeaturedCaseStudy({ project }: { project: Project }) {
  const copy = caseStudyCopy[project.slug]

  return (
    <article className="surface-card relative overflow-hidden p-5 sm:p-8 lg:grid lg:grid-cols-[0.74fr_1.26fr] lg:gap-10 lg:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_20%,rgba(56,189,248,0.12),transparent_36%)]" />

      <div className="relative z-10 flex min-w-0 flex-col justify-center py-2 lg:py-10">
        <h3 className="max-w-lg text-4xl font-semibold tracking-normal text-white sm:text-5xl">
          Reducing household
          <br />
          food waste.
        </h3>
        <p className="mt-5 max-w-md text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          {copy.description}
        </p>

        <div className="mt-8">
          <FeaturedActions project={project} />
        </div>

        <p className="mt-8 text-sm font-medium text-slate-400">
          React <span className="text-slate-600">·</span> TypeScript{' '}
          <span className="text-slate-600">·</span> PostgreSQL{' '}
          <span className="text-slate-600">·</span> Supabase
        </p>
      </div>

      <div className="relative z-10 mt-10 lg:mt-0">
        <FreshTraceProductShowcase project={project} />
      </div>
    </article>
  )
}

function FreshTraceProductShowcase({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState(freshTraceTabs[0].label)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const reduceMotion = useReducedMotion()
  const activeConfig = freshTraceTabs.find((tab) => tab.label === activeTab) ?? freshTraceTabs[0]
  const activeScreenshot =
    project.screenshots.find((screenshot) => screenshot.label === activeConfig.screenshotLabel) ??
    project.screenshots[0]

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (window.matchMedia('(max-width: 767px)').matches || reduceMotion) {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    setTilt({
      rotateX: Number((-y * 4).toFixed(2)),
      rotateY: Number((x * 4).toFixed(2)),
    })
  }

  function handleMouseLeave() {
    setTilt({ rotateX: 0, rotateY: 0 })
  }

  return (
    <div className="relative">
      <div
        className="mb-3 grid w-full grid-cols-4 gap-0.5 rounded-full border border-white/10 bg-ink-950/58 p-1 backdrop-blur"
        role="tablist"
        aria-label="FreshTrace product screens"
      >
        {freshTraceTabs.map((tab) => {
          const isActive = tab.label === activeTab

          return (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActiveTab(tab.label)}
              className={`relative h-8 min-w-0 rounded-full px-1 text-[11px] font-medium transition sm:text-xs ${
                isActive
                  ? 'text-ink-950'
                  : 'text-slate-400 hover:bg-white/[0.04] hover:text-white'
              }`}
              role="tab"
              aria-selected={isActive}
              aria-controls="freshtrace-showcase-panel"
            >
              {isActive ? (
                <motion.span
                  layoutId="freshtrace-active-tab"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                />
              ) : null}
              <span className="relative z-10">{tab.label}</span>
            </button>
          )
        })}
      </div>

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={
          reduceMotion
            ? { rotateX: tilt.rotateX, rotateY: tilt.rotateY }
            : { y: [0, -4, 0], rotateX: tilt.rotateX, rotateY: tilt.rotateY }
        }
        transition={
          reduceMotion
            ? { duration: 0.2 }
            : {
                y: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
                rotateX: { duration: 0.2, ease: 'easeOut' },
                rotateY: { duration: 0.2, ease: 'easeOut' },
              }
        }
        className="relative overflow-hidden rounded-[1.75rem] border border-white/14 bg-white/[0.075] p-2 shadow-[0_34px_120px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl [transform-style:preserve-3d]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(186,230,253,0.18),transparent_36%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-white/45 to-transparent"
        />

        <div
          id="freshtrace-showcase-panel"
          className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-white/10 bg-ink-900 lg:aspect-[4/3]"
          role="tabpanel"
          aria-label={`${project.title} ${activeTab} screenshot`}
        >
          <AnimatePresence>
            <motion.img
              key={activeScreenshot.label}
              src={activeScreenshot.src}
              alt={`${project.title} ${activeScreenshot.label}`}
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute inset-0 size-full object-cover object-top"
            />
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink-950/22 via-transparent to-white/[0.03]" />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 -bottom-8 h-16 rounded-[100%] bg-white/10 blur-2xl"
        />
      </motion.div>
    </div>
  )
}

function SupportingCaseStudyCard({ project }: { project: Project }) {
  const copy = caseStudyCopy[project.slug]
  const preview = project.screenshots[0]
  const isAwardWinner = project.awards.length > 0
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      whileHover={
        reduceMotion ? undefined : { y: -5, transition: { duration: 0.2, ease: motionEase } }
      }
      className="surface-card group flex h-full flex-col overflow-hidden p-5 transition duration-300 hover:border-accent-300/30 sm:p-6"
    >
      <ProjectPreviewImage project={project} preview={preview} isAwardWinner={isAwardWinner} />

      <div className="flex flex-1 flex-col pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-300">
          Case Study {copy.caseNumber}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-normal text-white">{copy.headline}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-400">{copy.description}</p>

        <p className="mt-5 text-xs font-medium text-slate-500">
          {project.techStack.slice(0, 3).join(' · ')}
        </p>

        <div className="mt-auto pt-7">
          <CaseStudyActions project={project} compact primaryLabel="View Case Study" />
        </div>
      </div>
    </motion.article>
  )
}

function ProjectPreviewImage({
  project,
  preview,
  isAwardWinner,
}: {
  project: Project
  preview: ProjectScreenshot
  isAwardWinner: boolean
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900">
      <img
        src={preview.src}
        alt={`${project.title} ${preview.label}`}
        loading="lazy"
        className="aspect-[16/9] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink-950/80 via-ink-950/12 to-transparent" />
      {isAwardWinner ? (
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-accent-300/25 bg-ink-950/72 px-3 py-1 text-xs font-semibold text-accent-200 backdrop-blur">
          <Award size={13} />
          Award Winner
        </span>
      ) : null}
    </div>
  )
}

function FeaturedActions({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Link
        to={`/projects/${project.slug}`}
        className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-ink-950 transition hover:bg-slate-200"
        aria-label={`View ${project.title} case study`}
      >
        View Case Study
        <ArrowRight size={15} />
      </Link>
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-4 text-sm font-semibold text-white transition hover:border-accent-400/50 hover:bg-accent-400/10"
          aria-label={`Open ${project.title} live demo`}
        >
          Live Demo
          <ExternalLink size={15} />
        </a>
      ) : null}
      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-accent-400/50 hover:bg-accent-400/10 hover:text-white"
          aria-label={`Open ${project.title} GitHub repository`}
        >
          <Code2 size={16} />
        </a>
      ) : null}
    </div>
  )
}

function CaseStudyActions({
  project,
  compact = false,
  primaryLabel,
}: {
  project: Project
  compact?: boolean
  primaryLabel: string
}) {
  const buttonClass = compact
    ? 'inline-flex h-9 items-center justify-center gap-2 rounded-lg px-3 text-xs font-semibold transition'
    : 'inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition'

  return (
    <div className="flex flex-wrap gap-2">
      <Link
        to={`/projects/${project.slug}`}
        className={`${buttonClass} bg-white text-ink-950 hover:bg-slate-200`}
        aria-label={`View ${project.title} case study`}
      >
        {primaryLabel}
        <ArrowRight size={compact ? 14 : 15} />
      </Link>
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className={`${buttonClass} border border-white/10 bg-white/[0.06] text-white hover:border-accent-400/50 hover:bg-accent-400/10`}
          aria-label={`Open ${project.title} live demo`}
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
          aria-label={`Open ${project.title} GitHub repository`}
        >
          GitHub
          <Code2 size={compact ? 14 : 15} />
        </a>
      ) : null}
    </div>
  )
}
