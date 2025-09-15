import { Hero } from "@/components/ui/hero";
import { SkillsSection } from "@/components/ui/skills-section";
import { ProjectsSection } from "@/components/ui/projects-section";
import { ExperienceSection } from "@/components/ui/experience-section";
import { LeadershipSection } from "@/components/ui/leadership-section";
import { ComicSection } from "@/components/ui/comic-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Projects Title Section */}
      <section className="py-8" style={{backgroundColor: '#f7f6f0'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-serif">PROJECTS</h2>
            <div className="w-16 h-1 bg-black mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif">
              Featured work and portfolio projects
            </p>
          </div>
        </div>
      </section>
      
      <ProjectsSection />
      <ExperienceSection />
      <LeadershipSection />
      <SkillsSection />
      <ComicSection />
      <Footer />
    </main>
  );
}
