import { HeroSection } from '../components/sections/HeroSection'
import { ContactSection } from '../components/sections/ContactSection'
import { JourneySection } from '../components/sections/JourneySection'
import { PlaceholderSection } from '../components/sections/PlaceholderSection'
import { ProfessionalProfile } from '../components/sections/ProfessionalProfile'
import { ProjectShowcase } from '../components/sections/ProjectShowcase'
import { SkillsSection } from '../components/sections/SkillsSection'
import { sectionItems } from '../data/navigation'

export function HomePage() {
  const remainingSections = sectionItems.filter(
    (section) => !['about', 'skills', 'journey', 'contact'].includes(section.id),
  )

  return (
    <main>
      <HeroSection />
      <ProfessionalProfile />
      <ProjectShowcase />
      <SkillsSection />
      <JourneySection />
      {remainingSections.map((section) => (
        <PlaceholderSection key={section.id} section={section} />
      ))}
      <ContactSection />
    </main>
  )
}
