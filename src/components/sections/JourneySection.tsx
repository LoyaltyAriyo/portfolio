import { useRef } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { journeyMilestones, journeySummary, type JourneyMilestone } from '../../data/journey'
import { fadeUp, motionEase, revealViewport, staggerContainer } from '../../lib/motion'
import { cn } from '../../lib/utils'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'

function JourneyCard({ milestone }: { milestone: JourneyMilestone }) {
  const Icon = milestone.icon
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      whileHover={
        reduceMotion ? undefined : { y: -3, transition: { duration: 0.2, ease: motionEase } }
      }
      viewport={revealViewport}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-900/80 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:border-accent-400/45 hover:shadow-glow sm:p-6',
        milestone.featured &&
          'border-accent-400/35 bg-[linear-gradient(180deg,rgba(56,189,248,0.13),rgba(255,255,255,0.045)),rgba(15,23,42,0.82)] shadow-[0_24px_90px_rgba(56,189,248,0.16)]',
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent',
          milestone.featured && 'via-accent-300/70',
        )}
      />
      <div className="flex flex-wrap items-center gap-3">
        <span
          className={cn(
            'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-accent-200',
            milestone.featured && 'border-accent-300/35 bg-accent-400/10 text-white',
          )}
        >
          <Icon size={14} strokeWidth={2} aria-hidden="true" />
          {milestone.type}
        </span>
        <span className="rounded-full border border-white/10 bg-ink-950/50 px-3 py-1 text-xs font-semibold text-white">
          {milestone.year}
        </span>
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-semibold tracking-normal text-white sm:text-2xl">
          {milestone.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-accent-200">{milestone.subtitle}</p>
        <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
          {milestone.description}
        </p>
      </div>

      {milestone.awards?.length ? (
        <div className="mt-5 flex flex-wrap gap-2" aria-label={`${milestone.title} awards`}>
          {milestone.awards.map((award) => (
            <span
              key={award}
              className="inline-flex items-center gap-2 rounded-lg border border-accent-300/20 bg-accent-400/10 px-3 py-1.5 text-xs font-medium text-accent-100"
            >
              <CheckCircle2 size={14} aria-hidden="true" />
              {award}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2" aria-label={`${milestone.title} technologies`}>
        {milestone.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg border border-white/10 bg-white/[0.045] px-2.5 py-1 text-xs font-medium text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {milestone.cta ? (
        <Link
          to={milestone.cta.href}
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white transition hover:border-accent-300/55 hover:bg-accent-400/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
        >
          {milestone.cta.label}
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      ) : null}
    </motion.article>
  )
}

function JourneyNode({
  milestone,
  index,
  progress,
  reduceMotion,
}: {
  milestone: JourneyMilestone
  index: number
  progress: MotionValue<number>
  reduceMotion: boolean
}) {
  const Icon = milestone.icon
  const milestoneProgress = journeyMilestones.length === 1 ? 1 : index / (journeyMilestones.length - 1)
  const opacity = useTransform(progress, [milestoneProgress - 0.08, milestoneProgress], [0.42, 1])
  const scale = useTransform(progress, [milestoneProgress - 0.08, milestoneProgress], [0.86, 1])

  return (
    <motion.div
      style={{ opacity: reduceMotion ? 1 : opacity, scale: reduceMotion ? 1 : scale }}
      className={cn(
        'relative z-10 grid size-10 place-items-center rounded-full border border-white/15 bg-ink-950 text-slate-300 shadow-[0_0_0_8px_rgba(5,7,13,0.88)] transition-colors duration-300 group-hover:border-accent-300/55 group-hover:text-accent-100 sm:size-11',
        milestone.featured &&
          'border-accent-300/55 text-accent-100 shadow-[0_0_0_8px_rgba(5,7,13,0.9),0_0_34px_rgba(56,189,248,0.35)]',
      )}
      aria-hidden="true"
    >
      <Icon size={17} strokeWidth={2} />
    </motion.div>
  )
}

export function JourneySection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 65%', 'end 50%'],
  })
  const pathScale = useTransform(scrollYProgress, [0, 1], [0, 1])
  const LocationIcon = journeySummary.locationIcon

  return (
    <section id="journey" ref={sectionRef} className="section-spacing scroll-mt-16">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={staggerContainer}
          className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              eyebrow={journeySummary.eyebrow}
              title={journeySummary.title}
              description={journeySummary.description}
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur"
          >
            <LocationIcon size={16} className="text-accent-300" aria-hidden="true" />
            Vancouver, BC / Canada
          </motion.div>
        </motion.div>

        <div className="relative mt-12">
          <div className="absolute bottom-8 left-5 top-8 w-px bg-white/10 lg:left-1/2 lg:-translate-x-1/2" />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-8 left-5 top-8 w-px origin-top bg-gradient-to-b from-accent-300 via-accent-400 to-accent-200 shadow-[0_0_28px_rgba(56,189,248,0.45)] lg:left-1/2 lg:-translate-x-1/2"
            style={{ scaleY: shouldReduceMotion ? 1 : pathScale }}
          />

          <div className="grid gap-7">
            {journeyMilestones.map((milestone, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={milestone.id}
                  className="group relative grid grid-cols-[2.5rem_1fr] gap-5 lg:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)] lg:gap-7"
                >
                  <div
                    className={cn(
                      'hidden items-center lg:flex',
                      isLeft ? 'justify-end text-right' : 'lg:col-start-3',
                    )}
                  >
                    <div className="max-w-48">
                      <p className="text-4xl font-semibold tracking-normal text-white/12 transition group-hover:text-accent-300/20">
                        {milestone.year}
                      </p>
                      <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                        {milestone.type}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center lg:col-start-2 lg:row-start-1">
                    <JourneyNode
                      milestone={milestone}
                      index={index}
                      progress={scrollYProgress}
                      reduceMotion={Boolean(shouldReduceMotion)}
                    />
                  </div>

                  <div
                    className={cn(
                      'min-w-0 lg:row-start-1',
                      isLeft ? 'lg:col-start-3' : 'lg:col-start-1',
                    )}
                  >
                    <JourneyCard milestone={milestone} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
