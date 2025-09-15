export function Hero() {
  return (
    <section className="relative min-h-screen" style={{backgroundColor: '#f7f6f0'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Main Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-4 font-serif uppercase tracking-wider">
            THE DEVELOPER
          </h1>
          <div className="w-full h-px bg-black mb-4"></div>
          <h2 className="text-lg md:text-xl font-serif text-black uppercase tracking-wide">
            FULL-STACK DEVELOPER AVAILABLE FOR IMMEDIATE HIRE
          </h2>
        </div>

        {/* Main Content Grid - Vintage Flyer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Large Featured Image */}
          <div className="lg:col-span-2">
            <div className="w-full h-96 bg-white border-2 border-black flex items-center justify-center relative overflow-hidden">
              <img 
                src="/ch2.jpg" 
                alt="Professional work showcase" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image Caption */}
            <div className="mt-4">
              <h3 className="text-xl font-bold text-black font-serif mb-2">
                The story headline and picture
              </h3>
              <div className="flex items-center space-x-4 text-sm font-serif text-black mb-4">
                <span className="font-bold">ESHANI PARULEKAR</span>
                <div className="w-px h-4 bg-black"></div>
                <span>FULL-STACK DEVELOPER</span>
              </div>
            </div>
          </div>

          {/* Right Column - Smaller Image and Text */}
          <div className="space-y-6">
            
            {/* Smaller Image */}
            <div className="w-full">
              <div className="w-full h-48 bg-white border-2 border-black flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/kk.jpg" 
                  alt="Developer portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image Caption */}
              <div className="mt-2 text-xs text-black font-serif">
                <span className="font-bold">PICTURE CAPTION</span>
              </div>
            </div>

            {/* Text Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-black font-serif">
                Related title
              </h4>
              
              <div className="flex items-center space-x-4 text-sm font-serif text-black mb-4">
                <span className="font-bold">ESHANI PARULEKAR</span>
                <div className="w-px h-4 bg-black"></div>
                <span>FULL-STACK DEVELOPER</span>
              </div>
              
              <div className="text-sm text-black leading-relaxed font-serif space-y-3">
                <p>
                  Experienced full-stack developer specializing in modern web technologies, 
                  creating innovative solutions that bridge design and functionality. With expertise 
                  in React, Next.js, and cloud technologies, I build scalable applications that 
                  deliver exceptional user experiences.
                </p>
                <p>
                  From concept to deployment, I handle every aspect of web development including 
                  frontend design, backend architecture, database optimization, and cloud infrastructure. 
                  My approach combines technical excellence with creative problem-solving to deliver 
                  solutions that exceed expectations.
                </p>
                <p>
                  Available for freelance projects, consulting, and full-time opportunities. 
                  Let's discuss how we can work together to bring your ideas to life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-black pt-6">
          <div className="text-center">
            <h4 className="text-sm font-bold text-black mb-2 font-serif uppercase">EXPERIENCE</h4>
            <p className="text-sm text-black font-serif">5+ Years Development</p>
          </div>
          <div className="text-center">
            <h4 className="text-sm font-bold text-black mb-2 font-serif uppercase">LOCATION</h4>
            <p className="text-sm text-black font-serif">Available Worldwide</p>
          </div>
          <div className="text-center">
            <h4 className="text-sm font-bold text-black mb-2 font-serif uppercase">STATUS</h4>
            <p className="text-sm text-black font-serif">Available for Hire</p>
          </div>
        </div>
      </div>
    </section>
  );
}
