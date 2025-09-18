import { Hero } from "@/components/ui/hero";
import { SkillsSection } from "@/components/ui/skills-section";
import { ProjectsSection } from "@/components/ui/projects-section";
import { CollageSection } from "@/components/ui/collage-section";
import LeadershipSection from "@/components/ui/leadership-section";
import { ComicSection } from "@/components/ui/comic-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <CollageSection />
      <LeadershipSection />
      <SkillsSection />
      <ComicSection />
      <Footer />
    </main>
  );
}
