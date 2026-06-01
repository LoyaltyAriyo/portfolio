import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Container } from '../components/ui/Container'

export function NotFoundPage() {
  return (
    <main className="grid min-h-[calc(100vh-4rem)] place-items-center pt-20">
      <Container>
        <div className="surface-card mx-auto max-w-2xl p-8 text-center sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent-300">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-white">
            This page is not available.
          </h1>
          <p className="mt-4 text-slate-400">
            The route may be unfinished, or the project slug does not match an existing case study.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-ink-950 transition hover:bg-slate-200"
          >
            <ArrowLeft size={16} />
            Back home
          </Link>
        </div>
      </Container>
    </main>
  )
}
