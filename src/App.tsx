import { Navigate, Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import backgroundMp4 from './assets/background-video/abstract1.mp4'
import backgroundWebm from './assets/background-video/abstract1.webm'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative isolate min-h-screen overflow-x-hidden bg-ink-950 text-slate-200">
        <div className="fixed inset-0 -z-20 overflow-hidden bg-ink-950">
          <video
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="size-full object-cover opacity-80"
          >
            <source src={backgroundWebm} type="video/webm" />
            <source src={backgroundMp4} type="video/mp4" />
          </video>
        </div>
        <div className="fixed inset-0 -z-10 bg-ink-950/58 backdrop-blur-[1px]" />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.12),transparent_34%),linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[length:auto,72px_72px,72px_72px]" />

        <div className="relative z-0">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Navigate to="/#projects" replace />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  )
}

export default App
