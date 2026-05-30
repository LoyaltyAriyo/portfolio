import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { HeroSection } from './components/sections/HeroSection'
import { PlaceholderSection } from './components/sections/PlaceholderSection'
import { sectionItems } from './data/navigation'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-ink-950 text-slate-200">
            <Navbar />
            <main>
              <HeroSection />
              {sectionItems.map((section) => (
                <PlaceholderSection key={section.id} section={section} />
              ))}
            </main>
            <Footer />
          </div>
        }
      />
    </Routes>
  )
}

export default App
