import MatrixBackground from "@/components/matrix-background";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import TerminalSection from "@/components/terminal-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-dark-bg text-text-primary font-sans overflow-x-hidden">
      <MatrixBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <TerminalSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
