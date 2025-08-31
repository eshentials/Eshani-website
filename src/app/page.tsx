import { Hero } from "@/components/ui/hero";
import { CarouselSection } from "@/components/ui/carousel-section";
import { Testimonials } from "@/components/ui/cards";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <CarouselSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
