import { motion, useReducedMotion } from 'framer-motion'
import { coreStack, skillCategories, type SkillCategory } from '../../data/skills'
import { fadeUp, motionEase, revealViewport, staggerContainer } from '../../lib/motion'
import { cn } from '../../lib/utils'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'

type SkillCardProps = {
  category: SkillCategory
  reduceMotion: boolean
}

function SkillCard({ category, reduceMotion }: SkillCardProps) {
  const Icon = category.icon

  return (
    <motion.article
      variants={fadeUp}
      whileHover={
        reduceMotion ? undefined : { y: -4, transition: { duration: 0.2, ease: motionEase } }
      }
      className={cn(
        'group relative flex min-h-[18rem] flex-col overflow-hidden rounded-2xl border border-white/10',
        'bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.032))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.20)] backdrop-blur-xl',
        'transition duration-300 hover:border-accent-400/35 hover:shadow-[0_26px_90px_rgba(56,189,248,0.12)] sm:p-6',
      )}
    >
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
    </motion.article>
  )
}

export function SkillsSection() {
  const shouldReduceMotion = useReducedMotion()
  const reduceMotion = Boolean(shouldReduceMotion)

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
            className="mt-8 inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-2 rounded-full border border-accent-400/20 bg-white/[0.055] px-4 py-3 text-sm font-medium text-slate-200 shadow-[0_18px_60px_rgba(56,189,248,0.10)] backdrop-blur-xl sm:px-5"
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
          variants={staggerContainer}
          className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              category={category}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
