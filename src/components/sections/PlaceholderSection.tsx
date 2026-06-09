import { motion } from 'framer-motion'
import { fadeUp, revealViewport } from '../../lib/motion'
import type { SectionItem } from '../../types/navigation'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'

type PlaceholderSectionProps = {
  section: SectionItem
}

export function PlaceholderSection({ section }: PlaceholderSectionProps) {
  const Icon = section.icon

  return (
    <section id={section.id} className="section-spacing scroll-mt-16">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeUp}
          className="surface-card grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_16rem] lg:items-center lg:p-10"
        >
          <SectionHeader
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />
          <div className="flex lg:justify-end">
            <div className="grid size-20 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-accent-200 shadow-glow">
              <Icon size={30} strokeWidth={1.8} />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
