export function Hero() {
  return (
    <section className="relative min-h-screen w-full group" style={{backgroundColor: '#f7f6f0'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Main Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-4 font-serif uppercase tracking-wider">
            Eshani Parulekar
          </h1>
          <div className="w-full h-px bg-black mb-4"></div>
          <h2 className="text-lg md:text-xl font-serif text-black uppercase tracking-wide">
            Student, Developer, and Creative Problem Solver
          </h2>
        </div>

        {/* Main Content Grid - Vintage Flyer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Left Column - Large Featured Image */}
          <div className="lg:col-span-2">
            <div className="w-full aspect-square bg-white border-2 border-black flex items-center justify-center relative overflow-hidden">
              <img 
                src="/ch2.jpg" 
                alt="Professional work showcase" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image Caption */}
            <div className="mt-4">
              <h3 className="text-xl font-bold text-black font-serif mb-2">
                Welcome to my website
              </h3>
              <div className="flex items-center space-x-4 text-sm font-serif text-black mb-4">
                <span className="font-bold">ESHANI PARULEKAR</span>
                <div className="w-px h-4 bg-black"></div>
                <span>Computer Science and Artificial Intelligence Major</span>
              </div>
            </div>
          </div>

          {/* Right Column - Author Photo and Text */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Text Section with Author Photo */}
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-2xl font-bold text-black font-serif">
                  ABOUT ME
                </h4>
                
                {/* Author Photo */}
                <div className="w-56 h-56 bg-white border-2 border-black rounded-full flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/pfp.png" 
                    alt="Eshani Parulekar" 
                    className="w-full h-full object-cover rounded-full scale-125 -translate-x-2 grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm font-serif text-black mb-4">
                <span className="font-bold">ESHANI PARULEKAR</span>
                <div className="w-px h-4 bg-black"></div>
                <span>Computer Science and Artificial Intelligence Major</span>
              </div>
              
              <div className="text-sm text-black leading-relaxed font-serif space-y-3">
                <p>
                  Hi, I&apos;m Eshani Parulekar, a Computer Science and Artificial Intelligence Major at Plaksha University.
                </p>
                <p>
                  From concept to deployment, I handle every aspect of web development including 
                  frontend design, backend architecture, database optimization, and network infrastructure. 
                  My approach combines technical excellence with creative problem-solving to deliver 
                  solutions that exceed expectations.
                </p>
                <p>
                  Available for freelance projects, consulting, and full-time opportunities. 
                  Let&apos;s discuss how we can work together to bring your ideas to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
