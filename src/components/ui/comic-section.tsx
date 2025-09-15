"use client";

export function ComicSection() {
  return (
    <section className="py-4" style={{backgroundColor: '#f7f6f0'}}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Comic Section Header */}
        <div className="text-center mb-3">
          <div className="w-full h-px bg-black mb-1"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-1 font-serif uppercase tracking-wider">
            THE FUNNIES
          </h2>
          <div className="w-full h-px bg-black mb-1"></div>
        </div>

        {/* Comic Grid - 2 Image Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          
          {/* Left Side - KK Image */}
          <div className="flex">
            <div className="w-full bg-white border-2 border-black flex items-center justify-center relative">
              <img 
                src="/kk.jpg" 
                alt="Developer comic strip panel 1" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side - XC Image */}
          <div className="flex">
            <div className="w-full bg-white border-2 border-black flex items-center justify-center relative">
              <img 
                src="/xc.jpg" 
                alt="Developer comic strip panel 2" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
