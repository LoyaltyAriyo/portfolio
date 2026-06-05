import {
  BadgeCheck,
  BriefcaseBusiness,
  Download,
  Eye,
  FileText,
  Globe2,
  GraduationCap,
  Layers3,
  MapPin,
  Sparkles,
  UserRound,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { quickFacts, resumePath } from '../../data/profile'
import { cn } from '../../lib/utils'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'

const profileImage = new URL('../../assets/professional-profile/Portrait.JPG', import.meta.url).href

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

const factIcons = [MapPin, GraduationCap, Layers3, BriefcaseBusiness, Sparkles, BadgeCheck]

const profileGlassCard = [
  'group relative overflow-hidden rounded-2xl border border-white/10',
  'bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.032))] shadow-[0_24px_70px_rgba(0,0,0,0.20)] backdrop-blur-xl',
  'transition duration-300 hover:border-white/15 hover:shadow-[0_28px_76px_rgba(0,0,0,0.24)]',
]

const cardEntrance = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.36, delay, ease: 'easeOut' as const },
  }),
}

function GlassCardEffects() {
  return <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
}

const factGrid = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
}

const factTile = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.38, ease: 'easeOut' as const },
  },
}

function ProfileCard() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      variants={cardEntrance}
      custom={0}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-70px' }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(
        profileGlassCard,
        'flex h-full min-h-[26rem] items-stretch justify-center p-1.5 lg:min-h-0',
      )}
    >
      <GlassCardEffects />
      <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-[0.7rem] border border-white/10 bg-ink-800">
        <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-[0.65rem] bg-ink-800">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Amir Mohammadi"
              className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            />
          ) : (
            <div className="grid size-full place-items-center bg-[linear-gradient(135deg,rgba(56,189,248,0.22),rgba(15,23,42,0.88)_45%,rgba(148,163,184,0.16))]">
              <span className="text-5xl font-semibold tracking-normal text-white">AM</span>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  )
}

function QuickFactsCard() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      variants={cardEntrance}
      custom={0.06}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-70px' }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(profileGlassCard, 'flex h-full flex-col p-5 sm:p-6')}
    >
      <GlassCardEffects />

      <div className="relative flex flex-col gap-2 pb-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-300/75">
            PROFILE OVERVIEW
          </p>
          <h3 className="mt-2.5 flex items-center gap-2.5 text-xl font-semibold tracking-normal text-white">
            <UserRound size={20} className="text-accent-300/90" />
            Quick Facts
          </h3>
        </div>
      </div>

      <motion.div
        variants={factGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="relative mt-5 grid flex-1 auto-rows-fr gap-3 md:grid-cols-2"
      >
        {quickFacts.map((fact, index) => {
          const Icon = factIcons[index] ?? BadgeCheck
          const isRecruiterPriority = fact.label === 'Looking For'

          return (
            <motion.div
              key={fact.label}
              variants={factTile}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={`group relative grid min-h-24 grid-cols-[2.25rem_1fr] gap-3 overflow-hidden rounded-xl border bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02))] p-3.5 shadow-[0_14px_34px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-lg transition-[border-color,background-color,box-shadow] duration-300 ${
                isRecruiterPriority
                  ? 'border-accent-400/15 hover:border-accent-300/30 hover:bg-white/[0.045]'
                  : 'border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.045]'
              }`}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
              />
              <motion.span
                className="relative grid size-9 place-items-center rounded-lg border border-white/[0.09] bg-white/[0.045] text-accent-300/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 group-hover:border-accent-300/25 group-hover:bg-accent-400/[0.065] group-hover:text-accent-200 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.12)]"
                whileHover={reduceMotion ? undefined : { scale: [1, 1.08, 1.03] }}
                transition={{ duration: 0.35 }}
              >
                <Icon size={17} />
              </motion.span>
              <span className="relative min-w-0">
                <span
                  className={`block text-xs font-medium uppercase tracking-[0.14em] ${
                    isRecruiterPriority ? 'text-accent-300/70' : 'text-slate-500/80'
                  }`}
                >
                  {fact.label}
                </span>
                <span className="mt-1.5 block text-sm font-medium leading-5 text-slate-100">
                  {fact.value}
                </span>
              </span>
            </motion.div>
          )
        })}
      </motion.div>

      <div className="relative mt-4 flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3.5 py-2.5 text-xs font-medium leading-5 text-slate-300 sm:text-sm">
        <Globe2 size={15} className="shrink-0 text-accent-300/80" />
        Helping businesses, creators, and startups build modern web experiences.
      </div>
    </motion.article>
  )
}

function ResumePreview() {
  return (
    <div className="relative hidden min-h-[25rem] -translate-y-1 overflow-hidden rounded-2xl border border-white/15 bg-white shadow-[0_24px_54px_rgba(0,0,0,0.28),0_5px_16px_rgba(0,0,0,0.18)] md:block">
      <span className="absolute left-4 top-4 z-10 rounded-full border border-ink-950/10 bg-white/90 px-3 py-1 text-xs font-semibold text-ink-950 shadow-sm">
        Latest Resume
      </span>
      <object
        data={`${resumePath}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=78`}
        type="application/pdf"
        aria-label="Resume preview"
        className="relative h-full min-h-[25rem] w-full"
      >
        <div className="grid h-full min-h-[25rem] place-items-center bg-ink-900 p-6 text-center">
          <a
            href={resumePath}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-ink-950 transition hover:bg-slate-200"
          >
            <Eye size={16} />
            View Resume
          </a>
        </div>
      </object>
    </div>
  )
}

function MobileResumeMockup() {
  return (
    <div className="relative -translate-y-1 overflow-hidden rounded-2xl border border-white/15 bg-white p-5 shadow-[0_20px_46px_rgba(0,0,0,0.26),0_4px_14px_rgba(0,0,0,0.16)] md:hidden">
      <span className="rounded-full border border-ink-950/10 bg-slate-100 px-3 py-1 text-xs font-semibold text-ink-950">
        Latest Resume
      </span>
      <div className="mt-5 space-y-3">
        <div className="h-3 w-36 rounded-full bg-slate-900" />
        <div className="h-2 w-48 rounded-full bg-slate-300" />
        <div className="h-2 w-40 rounded-full bg-slate-200" />
      </div>
      <div className="mt-6 grid gap-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className="rounded-xl border border-slate-200 p-3">
            <div className="h-2 w-24 rounded-full bg-slate-300" />
            <div className="mt-3 h-2 w-full rounded-full bg-slate-200" />
            <div className="mt-2 h-2 w-4/5 rounded-full bg-slate-100" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ResumeCard() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      variants={cardEntrance}
      custom={0.12}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-70px' }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(
        profileGlassCard,
        'grid gap-6 p-5 sm:p-6 lg:col-span-2 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.95fr)] lg:items-center',
      )}
    >
      <GlassCardEffects />

      <div className="relative">
        <div className="grid size-12 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-accent-300/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
          <FileText size={22} />
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-normal text-white">Resume</h3>
        <p className="mt-3 max-w-md text-base leading-7 text-slate-400/90">
          View or download my latest software developer resume.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={resumePath}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-ink-950 transition duration-200 hover:bg-slate-200"
          >
            <Eye size={16} />
            View Resume
          </a>
          <a
            href={resumePath}
            download
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/[0.09] bg-white/[0.045] px-5 text-sm font-semibold text-white transition duration-200 hover:border-accent-400/35 hover:bg-accent-400/[0.08]"
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>
      </div>

      <MobileResumeMockup />
      <ResumePreview />
    </motion.article>
  )
}

export function ProfessionalProfile() {
  return (
    <section id="about" className="section-spacing scroll-mt-24 overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              eyebrow="About"
              title="Professional Profile"
              description="A quick overview of my background, technical strengths, and the work I'm building today."
            />
          </motion.div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1.2fr)] lg:items-stretch">
            <ProfileCard />
            <QuickFactsCard />
            <ResumeCard />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
