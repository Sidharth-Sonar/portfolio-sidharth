import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ApproachSection } from "@/components/sections/approach-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
