import { ArrowRight, Award, Code2, Download, FolderKanban } from 'lucide-react'
import { motion } from 'framer-motion'
import { resumePath } from '../../data/profile'
import { Container } from '../ui/Container'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export function HeroSection() {
  const heroStats = [
    { label: '3+ Deployed Projects', icon: FolderKanban },
    { label: '2 NASA Awards', icon: Award },
    { label: 'React + TypeScript Stack', icon: Code2 },
  ]

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-[31rem] bg-[radial-gradient(circle_at_50%_12%,rgba(56,189,248,0.22),transparent_54%)]" />
      <div className="absolute inset-x-0 top-16 -z-10 mx-auto h-72 max-w-5xl bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px] opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_68%)]" />
      <Container className="pb-10 pt-6 sm:pb-14">
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
            Software Engineering Technician Graduate
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl"
          >
            Amir Mohammadi
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            Full-stack developer building practical web applications with React, TypeScript,
            Node.js, and AI-powered features.
          </motion.p>

          <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Focused on clean interfaces, reliable APIs, and real product thinking.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-ink-950 transition duration-200 hover:bg-slate-200 sm:w-auto"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href={resumePath}
              download
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.07] px-5 text-sm font-semibold text-white transition duration-200 hover:border-accent-400/50 hover:bg-accent-400/10 sm:w-auto"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 w-full items-center justify-center rounded-lg px-5 text-sm font-semibold text-slate-300 transition duration-200 hover:bg-white/[0.05] hover:text-white sm:w-auto"
            >
              Contact
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-7 flex max-w-3xl flex-wrap justify-center gap-3"
          >
            {heroStats.map(({ label, icon: Icon }, index) => (
              <motion.span
                key={label}
                variants={fadeUp}
                transition={{ delay: 0.18 + index * 0.05 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3.5 py-2 text-sm font-medium text-slate-300 shadow-[0_10px_35px_rgba(0,0,0,0.18)] backdrop-blur transition duration-200 hover:border-accent-300/35 hover:bg-accent-400/10 hover:text-white"
              >
                <Icon size={15} className="text-accent-300" />
                {label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
