import { motion, useReducedMotion } from 'framer-motion'
import { coreStack, skillCategories, type SkillCategory } from '../../data/skills'
import { fadeUp, motionEase, revealViewport, staggerContainer } from '../../lib/motion'
import { safeCardReveal, useSafeCardReveal } from '../../lib/safeReveal'
import { cn } from '../../lib/utils'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'

type SkillCardProps = {
  category: SkillCategory
  reduceMotion: boolean
  safeReveal: boolean
}

function SkillCard({ category, reduceMotion, safeReveal }: SkillCardProps) {
  const Icon = category.icon
  const cardClassName = cn(
    'group relative flex h-full min-h-[18rem] flex-col overflow-hidden rounded-2xl border border-white/10',
    'bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.032))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.20)] backdrop-blur-xl',
    'transition duration-300 hover:border-accent-400/35 hover:shadow-[0_26px_90px_rgba(56,189,248,0.12)] sm:p-6',
  )

  const cardContent = (
    <>
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-accent-400/0 blur-3xl transition duration-300 group-hover:bg-accent-400/10" />

      <div className="relative flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-accent-300 shadow-glow">
        <Icon size={21} strokeWidth={1.8} />
      </div>

      <div className="relative mt-5">
        <h3 className="text-lg font-semibold tracking-normal text-white">{category.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{category.description}</p>
      </div>

      <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium text-slate-300 transition duration-200 group-hover:border-accent-400/25 group-hover:bg-accent-400/[0.07] group-hover:text-slate-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  )

  return safeReveal ? (
    <motion.div
      variants={safeCardReveal}
      whileHover={
        reduceMotion ? undefined : { y: -4, transition: { duration: 0.2, ease: motionEase } }
      }
      className="h-full"
    >
      <article className={cardClassName}>{cardContent}</article>
    </motion.div>
  ) : (
    <motion.article
      variants={fadeUp}
      whileHover={
        reduceMotion ? undefined : { y: -4, transition: { duration: 0.2, ease: motionEase } }
      }
      className={cardClassName}
    >
      {cardContent}
    </motion.article>
  )
}

export function SkillsSection() {
  const shouldReduceMotion = useReducedMotion()
  const reduceMotion = Boolean(shouldReduceMotion)
  const safeReveal = useSafeCardReveal()

  return (
    <section id="skills" className="section-spacing scroll-mt-16 overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              eyebrow="Skills"
              title="A focused stack for building useful software."
              description="A practical snapshot of the tools, systems, and workflows I use to ship polished full-stack products."
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex max-w-full flex-col items-start gap-2 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.032))] px-6 py-5 text-sm font-medium text-slate-200 shadow-[0_18px_60px_rgba(56,189,248,0.10)] backdrop-blur-xl lg:inline-flex lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-2 lg:gap-y-2 lg:rounded-full lg:border-accent-400/20 lg:bg-white/[0.055] lg:px-5 lg:py-3"
          >
            <span className="text-accent-300">Core Stack</span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span className="leading-6 text-slate-300">{coreStack.join(' · ')}</span>
          </motion.div>

        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={safeReveal ? undefined : staggerContainer}
          className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              category={category}
              reduceMotion={reduceMotion}
              safeReveal={safeReveal}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
