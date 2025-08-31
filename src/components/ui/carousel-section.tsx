import { Carousel } from "./carousel";
import { Sidebar } from "./sidebar";

export function CarouselSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of my recent projects and see how I can help bring your ideas to life.
          </p>
        </div>

        {/* Carousel and Sidebar Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Carousel - Takes up most of the space */}
          <div className="flex-1">
            <Carousel />
          </div>
          
          {/* Sidebar - Fixed width on larger screens */}
          <div className="w-full lg:w-80">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
