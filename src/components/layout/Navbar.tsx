import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { navItems } from '../../data/navigation'
import { resumePath } from '../../data/profile'
import { Container } from '../ui/Container'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  const getAnchorHref = (href: string) => (pathname === '/' ? href : `/${href}`)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/68 shadow-[0_16px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/#home" className="group flex items-center gap-3" aria-label="Amir Mohammadi home">
          <span className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-sm font-semibold text-white shadow-glow">
            AM
          </span>
          <span className="hidden text-sm font-medium text-slate-200 sm:inline">
            Amir Mohammadi
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) =>
            item.kind === 'route' ? (
              <Link
                key={item.href}
                to={item.href}
                className="group relative rounded-lg px-3 py-2 text-sm text-slate-400 transition duration-200 hover:bg-white/[0.045] hover:text-white"
              >
                {item.label}
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-accent-300/70 transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            ) : (
              <a
                key={item.href}
                href={getAnchorHref(item.href)}
                className="group relative rounded-lg px-3 py-2 text-sm text-slate-400 transition duration-200 hover:bg-white/[0.045] hover:text-white"
              >
                {item.label}
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-accent-300/70 transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ),
          )}
        </nav>

        <a
          href={resumePath}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-lg border border-accent-300/25 bg-accent-400/10 px-4 py-2 text-sm font-medium text-accent-200 transition duration-200 hover:border-accent-300/45 hover:bg-accent-400/15 md:inline-flex"
        >
          Resume
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
            {navItems.map((item) =>
              item.kind === 'route' ? (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={getAnchorHref(item.href)}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {item.label}
                </a>
              ),
            )}
            <a
              href={resumePath}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-lg border border-accent-300/25 bg-accent-400/10 px-3 py-3 text-sm font-medium text-accent-200 transition hover:border-accent-300/45 hover:bg-accent-400/15"
            >
              Resume
            </a>
          </div>
        </motion.nav>
      ) : null}
    </header>
  )
}
