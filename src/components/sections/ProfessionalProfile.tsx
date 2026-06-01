import {
  BadgeCheck,
  BriefcaseBusiness,
  Download,
  Eye,
  FileText,
  GraduationCap,
  Layers3,
  MapPin,
  Sparkles,
  UserRound,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { quickFacts, resumePath } from '../../data/profile'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'

const profileImage = new URL('../../assets/professional-profile/Portrait.JPG', import.meta.url).href

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
}

const slideRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
}

const factIcons = [MapPin, GraduationCap, Layers3, BriefcaseBusiness, Sparkles, BadgeCheck]

function ProfileCard() {
  return (
    <motion.article
      variants={slideLeft}
      className="surface-card flex h-full flex-col justify-center overflow-hidden p-6 sm:p-7"
    >
      <div className="relative mx-auto grid size-40 place-items-center rounded-[2rem] border border-accent-300/25 bg-accent-400/10 p-2 shadow-glow sm:size-44">
        <div className="absolute inset-3 rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_18%,rgba(125,211,252,0.28),transparent_62%)]" />
        <div className="relative grid size-full place-items-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-ink-800">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Amir Mohammadi"
              className="size-full object-cover"
            />
          ) : (
            <div className="grid size-full place-items-center bg-[linear-gradient(135deg,rgba(56,189,248,0.22),rgba(15,23,42,0.88)_45%,rgba(148,163,184,0.16))]">
              <span className="text-5xl font-semibold tracking-normal text-white">AM</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 text-center">
        <h3 className="text-2xl font-semibold tracking-normal text-white">Amir Mohammadi</h3>
        <p className="mt-2 text-base font-medium text-accent-200">Software Developer</p>
        <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-400">
          <MapPin size={15} />
          Vancouver, BC
        </p>
      </div>

      <div className="mt-6 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent-300/20 bg-accent-400/10 px-3 py-1.5 text-sm font-medium text-accent-200">
          <span className="size-2 rounded-full bg-accent-300" />
          Open to Junior Developer Roles
        </span>
      </div>
    </motion.article>
  )
}

function QuickFactsCard() {
  return (
    <motion.article variants={slideRight} className="surface-card h-full p-6 sm:p-7">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-300">
            Recruiter Snapshot
          </p>
          <h3 className="mt-2 flex items-center gap-2 text-xl font-semibold tracking-normal text-white">
            <UserRound size={20} className="text-accent-300" />
            Quick Facts
          </h3>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        transition={{ staggerChildren: 0.05 }}
        className="mt-5 grid gap-3 sm:grid-cols-2"
      >
        {quickFacts.map((fact, index) => {
          const Icon = factIcons[index] ?? BadgeCheck

          return (
            <motion.div
              key={fact.label}
              variants={fadeUp}
              className="grid grid-cols-[2.25rem_1fr] gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-3.5"
            >
              <span className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/[0.045] text-accent-300">
                <Icon size={17} />
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                  {fact.label}
                </span>
                <span className="mt-1 block text-sm leading-6 text-slate-200">{fact.value}</span>
              </span>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.article>
  )
}

function ResumePreview() {
  return (
    <div className="relative hidden min-h-[25rem] overflow-hidden rounded-2xl border border-white/10 bg-white shadow-glow md:block">
      <span className="absolute left-4 top-4 z-10 rounded-full border border-ink-950/10 bg-white/90 px-3 py-1 text-xs font-semibold text-ink-950 shadow-sm">
        Latest Resume
      </span>
      <div className="absolute inset-x-10 top-4 h-16 rounded-full bg-accent-400/10 blur-2xl" />
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
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white p-5 shadow-glow md:hidden">
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
  return (
    <motion.article
      variants={slideRight}
      className="surface-card grid gap-6 overflow-hidden p-6 sm:p-8 lg:col-span-2 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.95fr)] lg:items-center"
    >
      <div>
        <div className="grid size-12 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-accent-300">
          <FileText size={22} />
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-normal text-white">Resume</h3>
        <p className="mt-3 max-w-md text-base leading-7 text-slate-400">
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
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-5 text-sm font-semibold text-white transition duration-200 hover:border-accent-400/50 hover:bg-accent-400/10"
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
              description="A recruiter-friendly snapshot of Amir's background, focus areas, and current software development goals."
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
