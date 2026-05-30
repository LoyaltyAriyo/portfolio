import { Container } from '../ui/Container'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Amir Mohammadi</p>
        <p>Built with React, TypeScript, Tailwind CSS, and Framer Motion.</p>
      </Container>
    </footer>
  )
}
