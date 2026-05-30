import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { navItems } from '../../data/navigation'
import { Container } from '../ui/Container'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/72 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="group flex items-center gap-3" aria-label="Amir Mohammadi home">
          <span className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-sm font-semibold text-white shadow-glow">
            AM
          </span>
          <span className="hidden text-sm font-medium text-slate-200 sm:inline">
            Amir Mohammadi
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-lg border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white transition hover:border-accent-400/50 hover:bg-accent-400/10 md:inline-flex"
        >
          Get in touch
        </a>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-slate-200 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {isOpen ? (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-t border-white/10 bg-ink-950/95 px-5 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.nav>
      ) : null}
    </header>
  )
}
