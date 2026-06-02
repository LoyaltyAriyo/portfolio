import { HeroSection } from '../components/sections/HeroSection'
import { ContactSection } from '../components/sections/ContactSection'
import { PlaceholderSection } from '../components/sections/PlaceholderSection'
import { ProfessionalProfile } from '../components/sections/ProfessionalProfile'
import { ProjectShowcase } from '../components/sections/ProjectShowcase'
import { sectionItems } from '../data/navigation'

export function HomePage() {
  const remainingSections = sectionItems.filter(
    (section) => section.id !== 'about' && section.id !== 'contact',
  )

  return (
    <main>
      <HeroSection />
      <ProfessionalProfile />
      <ProjectShowcase />
      {remainingSections.map((section) => (
        <PlaceholderSection key={section.id} section={section} />
      ))}
      <ContactSection />
    </main>
  )
}
