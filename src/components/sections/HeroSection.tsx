import { ArrowRight, Code2, FileText, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '../ui/Container'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.18),transparent_58%)]" />
      <Container className="pb-20 pt-8 sm:pb-28">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm text-slate-300"
          >
            <span className="size-2 rounded-full bg-accent-300" />
            Recent Software Engineering Technician graduate
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-7 text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl"
          >
            Amir Mohammadi
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl"
          >
            Building toward junior software developer, full-stack, React, and AI-related
            entry-level roles with a clean, practical portfolio.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-ink-950 transition hover:bg-slate-200"
            >
              View sections
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] px-5 text-sm font-semibold text-white transition hover:border-accent-400/50 hover:bg-accent-400/10"
            >
              Contact
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex justify-center gap-3 text-slate-500">
            {[Code2, FileText, Mail].map((Icon, index) => (
              <span
                key={index}
                className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04]"
              >
                <Icon size={17} />
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
