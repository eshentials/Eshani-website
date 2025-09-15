"use client";

// Removed unused imports
import { Footer } from "@/components/ui/footer";

// Removed unused interface

export default function ProjectsPage() {
  return (
    <main style={{backgroundColor: '#f7f6f0'}}>
      {/* Newspaper Header */}
      <section className="py-8" style={{backgroundColor: '#f7f6f0'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm font-serif uppercase tracking-wider">ISSUE, DECEMBER</div>
            <div className="text-sm font-serif uppercase tracking-wider">PROJECTS</div>
          </div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-black text-center mb-4">
            PROJECTS
          </h1>
          <div className="border-t border-black"></div>
        </div>
      </section>

      {/* Projects Grid - 7 Projects with Grid Lines */}
      <section className="py-12" style={{backgroundColor: '#f7f6f0'}}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          {/* Complex Grid Layout with Different Sizes */}
          <div className="space-y-0">
            
            {/* Project 1: Phosphor Icons - Full Width Top */}
            <div className="border-b border-black">
              <div className="grid grid-cols-12 gap-0 min-h-[500px]">
                {/* Left Content */}
                <div className="col-span-8 relative" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                  <div className="px-8 space-y-6">
                    <h2 className="text-3xl font-serif font-bold text-black">
                      Phosphor Icons
                    </h2>
                    <div className="space-y-3 text-sm font-serif text-black">
                      <p>• 9,072 icons</p>
                      <p>• 6 weights (Thin, Light, Regular, Bold, Fill, Duotone)</p>
                      <p>• Designed for 16x16px readability</p>
                      <p>• Raw stroke information for fine-tuning</p>
                      <p>• Available in Figma, React, Vue, vanilla JS</p>
                    </div>
                    <a href="#" className="inline-flex items-center text-black text-sm font-serif hover:underline">
                      Phosphor Icons →
                    </a>
                  </div>
                  <div className="absolute right-0 top-4 bottom-4 bg-black" style={{ width: "0.5px" }}></div>
                  </div>
                {/* Right Image */}
                <div className="col-span-4 bg-gray-800 flex items-center justify-center" style={{paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: '2rem', paddingRight: '2rem'}}>
                  <div className="grid grid-cols-8 gap-3 w-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="w-8 h-8 border border-gray-600 flex items-center justify-center">
                        <div className="w-5 h-5 bg-gray-400"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Three Projects */}
            <div className="grid grid-cols-12 gap-0 border-b border-black min-h-[500px]">
             
              {/* Project 3: Waze - Middle Column */}
              <div className="col-span-6 relative" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                <div className="px-6 h-full">
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center mb-4">
                    <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-black mb-3">
                    Waze
                  </h3>
                  <p className="text-xs font-serif text-black leading-relaxed mb-4">
                    Collaborated with Waze to improve the core product experience and shepherd a rebrand outlined by Pentagram.
                  </p>
                  <a href="#" className="inline-flex items-center text-black text-xs font-serif hover:underline">
                    Read the case study →
                  </a>
                </div>
                <div className="absolute right-0 top-4 bottom-4 bg-black" style={{ width: "0.5px" }}></div>
              </div>
               {/* Project 2: Toyota Research Institute - Left Column */}
               <div className="col-span-3 relative" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                <div className="px-6 h-full">
                  <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-400 mx-auto mb-2 flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-600"></div>
                      </div>
                      <p className="text-xs font-serif text-gray-600">32 MPH</p>
                      <p className="text-xs font-serif text-gray-600">Slowing for turn</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-black mb-3">
                    Toyota Research Institute
                  </h3>
                  <p className="text-xs font-serif text-black leading-relaxed mb-4">
                    Partnered with Toyota&apos;s Bay Area research arm focused on autonomous driving. 
                    Worked with their UX team from 2017 to 2019.
                  </p>
                  <a href="#" className="inline-flex items-center text-black text-xs font-serif hover:underline">
                    CEO Gill Pratt on TRI&apos;s vision →
                  </a>
                </div>
                <div className="absolute right-0 top-4 bottom-4 bg-black" style={{ width: "0.5px" }}></div>
              </div>

              {/* Project 4: PayPal - Right Column */}
              <div className="col-span-3" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                <div className="px-6 h-full">
                  <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-4">
                    <div className="w-full h-full bg-white border border-gray-300 p-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                          <span className="text-xs font-serif font-bold">Name</span>
                          <span className="text-xs font-serif font-bold">Date</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-serif">Tate Chow</span>
                            <span className="text-xs font-serif">Jun 12, 2018</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-serif">Jess Hart</span>
                            <span className="text-xs font-serif">Jun 13, 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-black mb-3">
                    PayPal
                  </h3>
                  <p className="text-xs font-serif text-black leading-relaxed mb-4">
                    Helped the design system team refresh guidelines in 2019. Brought more clarity to their design language.
                  </p>
                  <a href="#" className="inline-flex items-center text-black text-xs font-serif hover:underline">
                    PayPal →
                  </a>
                </div>
              </div>
            </div>

            {/* Row 3: Three Projects */}
            <div className="grid grid-cols-12 gap-0 min-h-[500px]">
              {/* Project 5: SoulCycle - Left Column */}
              <div className="col-span-3 relative" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                <div className="px-6 h-full">
                  <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-400 mx-auto mb-2 flex items-center justify-center">
                        <span className="text-xs font-serif text-white">Reserved</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-black mb-3">
                    SoulCycle
                  </h3>
                  <p className="text-xs font-serif text-black leading-relaxed mb-4">
                    Design work for iOS and web experiences. Created engaging user interfaces for fitness enthusiasts.
                  </p>
                  <a href="#" className="inline-flex items-center text-black text-xs font-serif hover:underline">
                    SoulCycle →
                  </a>
                </div>
                <div className="absolute right-0 top-4 bottom-4 bg-black" style={{ width: "0.5px" }}></div>
              </div>

              {/* Project 6: Phosphor for Android - Middle Column */}
              <div className="col-span-6 relative" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                <div className="px-6 h-full">
                  <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-4">
                    <div className="grid grid-cols-4 gap-2">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="w-6 h-6 border border-gray-600 flex items-center justify-center">
                          <div className="w-3 h-3 bg-gray-400"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-black mb-3">
                    Phosphor for Android
                  </h3>
                  <p className="text-xs font-serif text-black leading-relaxed mb-4">
                    Created line-style icon packs for Android. Available in different colors and styles.
                  </p>
                  <div className="space-y-1">
                    <a href="#" className="block text-black text-xs font-serif hover:underline">Phosphor (white) →</a>
                    <a href="#" className="block text-black text-xs font-serif hover:underline">Phosphor Carbon (black) →</a>
                    <a href="#" className="block text-black text-xs font-serif hover:underline">Phosphor Cadmium (red) →</a>
                    <a href="#" className="block text-black text-xs font-serif hover:underline">Phosphor Krypton (green) →</a>
                  </div>
                </div>
                <div className="absolute right-0 top-4 bottom-4 bg-black" style={{ width: "0.5px" }}></div>
              </div>

              {/* Project 7: Prolific Interactive - Right Column */}
              <div className="col-span-3" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                <div className="px-6 h-full">
                  <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-400 mx-auto mb-2 flex items-center justify-center">
                        <span className="text-xs font-serif text-white">98</span>
                      </div>
                      <p className="text-xs font-serif text-gray-600">strong.</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-black mb-3">
                    Prolific Interactive
                  </h3>
                  <p className="text-xs font-serif text-black leading-relaxed mb-4">
                    Brand refresh initiative. Redesigned visual identity and user experience for the interactive agency.
                  </p>
                  <a href="#" className="inline-flex items-center text-black text-xs font-serif hover:underline">
                    Prolific Interactive →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
