import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { navItems } from '../../data/navigation'
import { cn } from '../../lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { hash, pathname } = useLocation()

  const getAnchorHref = (href: string) => (pathname === '/' ? href : `/${href}`)
  const isActive = (href: string, kind: 'route' | 'anchor') =>
    kind === 'route' ? pathname === href : pathname === '/' && hash === href

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-[90vw] max-w-[1400px]">
        <div
          className={cn(
            'overflow-hidden rounded-[32px] border backdrop-blur-3xl transition-[background-color,border-color,box-shadow] duration-300 lg:rounded-full',
            isScrolled
              ? 'border-white/[0.15] bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_18px_70px_rgba(0,0,0,0.38)]'
              : 'border-white/10 bg-white/[0.035] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_18px_70px_rgba(0,0,0,0.35)]',
          )}
        >
          <div className="flex h-[3.75rem] items-center justify-between gap-2 px-2.5 sm:px-4 lg:px-5">
            <Link
              to="/#home"
              className="group flex items-center gap-2.5 rounded-full px-1 outline-none focus-visible:ring-2 focus-visible:ring-accent-300/40"
              aria-label="Amir Mohammadi home"
            >
              <span className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.055] text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-200 group-hover:border-white/[0.15] group-hover:bg-white/[0.09] group-hover:text-cyan-100">
                AM
              </span>
              <span className="hidden text-sm font-medium text-slate-200 transition duration-200 group-hover:text-white sm:inline">
                Amir Mohammadi
              </span>
            </Link>

            <nav
              className="hidden flex-1 items-center justify-center gap-0.5 lg:flex"
              aria-label="Primary navigation"
            >
              {navItems.map((item) => {
                const active = isActive(item.href, item.kind)
                const linkClassName = cn(
                  'rounded-full px-3 py-2 text-sm transition duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent-300/35',
                  active
                    ? 'bg-white/[0.1] text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]'
                    : 'text-slate-300/80 hover:bg-white/[0.08] hover:text-white',
                )

                return item.kind === 'route' ? (
                  <Link key={item.href} to={item.href} className={linkClassName}>
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={getAnchorHref(item.href)}
                    className={linkClassName}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>

            <a
              href={getAnchorHref('#contact')}
              className="hidden items-center rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-200 hover:border-white/[0.15] hover:bg-white/[0.12] hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300/40 lg:inline-flex"
            >
              Get in touch
            </a>

            <button
              type="button"
              className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.07] text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-200 hover:bg-white/[0.12] hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300/40 lg:hidden"
              onClick={() => setIsOpen((current) => !current)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {isOpen ? (
            <motion.nav
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="border-t border-white/[0.07] px-2.5 pb-2.5 pt-2 lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const active = isActive(item.href, item.kind)
                  const linkClassName = cn(
                    'rounded-2xl px-3 py-2.5 text-sm font-medium transition duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent-300/35',
                    active
                      ? 'bg-white/[0.09] text-cyan-100'
                      : 'text-slate-300 hover:bg-white/[0.07] hover:text-white',
                  )

                  return item.kind === 'route' ? (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={linkClassName}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.href}
                      href={getAnchorHref(item.href)}
                      onClick={() => setIsOpen(false)}
                      className={linkClassName}
                    >
                      {item.label}
                    </a>
                  )
                })}
              </div>
            </motion.nav>
          ) : null}
        </div>
      </div>
    </header>
  )
}
