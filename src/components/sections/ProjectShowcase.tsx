import { motion } from 'framer-motion'
import { sortedProjects } from '../../data/projects'
import { Container } from '../ui/Container'
import { ProjectCard } from '../projects/ProjectCard'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export function ProjectShowcase() {
  const featuredProject = sortedProjects.find((project) => project.featured) ?? sortedProjects[0]
  const supportingProjects = sortedProjects.filter((project) => project.id !== featuredProject.id)

  return (
    <section id="projects" className="section-spacing scroll-mt-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          transition={{ staggerChildren: 0.08 }}
        >
          <div className="max-w-2xl">
            <motion.div variants={fadeUp} className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent-300">
                Featured Work
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
                Selected projects with real product thinking.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
                A focused look at full-stack applications, AI-powered features, and
                award-winning data projects.
              </p>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-5">
            <motion.div variants={fadeUp}>
              <ProjectCard project={featuredProject} variant="featured" />
            </motion.div>
            <div className="grid gap-5 lg:grid-cols-2">
              {supportingProjects.map((project) => (
                <motion.div key={project.id} variants={fadeUp}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
