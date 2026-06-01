import { HeroSection } from '../components/sections/HeroSection'
import { PlaceholderSection } from '../components/sections/PlaceholderSection'
import { ProjectShowcase } from '../components/sections/ProjectShowcase'
import { sectionItems } from '../data/navigation'

export function HomePage() {
  const aboutSection = sectionItems.find((section) => section.id === 'about')
  const remainingSections = sectionItems.filter((section) => section.id !== 'about')

  return (
    <main>
      <HeroSection />
      {aboutSection ? <PlaceholderSection section={aboutSection} /> : null}
      <ProjectShowcase />
      {remainingSections.map((section) => (
        <PlaceholderSection key={section.id} section={section} />
      ))}
    </main>
  )
}
