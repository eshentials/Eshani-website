export function Hero() {
  return (
    <section
      className="relative py-16 w-full group"
      style={{ backgroundColor: "#f7f6f0" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Title Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {/* Left side */}
            <div className="text-sm font-serif uppercase tracking-wider">
              ISSUE, DECEMBER
            </div>

            {/* Right side (optional, can leave empty or add date, volume, etc.) */}
            <div></div>
          </div>

          {/* Centered Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-4 font-serif uppercase tracking-wider text-center">
            Eshani Parulekar
          </h1>

          {/* Divider */}
          <div className="w-full h-px bg-black mb-4"></div>
          <div className="border-t border-black"></div>

          {/* Subtitle */}
          <h2 className="text-lg md:text-xl font-serif text-black uppercase tracking-wide text-center">
            Student, Developer, and Creative Problem Solver
          </h2>
        </div>

        {/* Main Content Grid - Vintage Flyer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column - Author Photo (Smaller) */}
          <div className="lg:col-span-2">
            <div className="w-80 h-80 mx-auto bg-white border-2 border-black flex items-center justify-center relative overflow-hidden">
              <img
                src="/pfp.png"
                alt="Eshani Parulekar"
                className="w-full h-full object-cover scale-125 -translate-x-2 grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Text Section */}
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-black font-serif">
                ABOUT ME
              </h4>

              <div className="text-sm text-black leading-relaxed font-serif space-y-3">
                <p>
                  Hi, I&apos;m Eshani Parulekar, a Computer Science and
                  Artificial Intelligence Major at Plaksha University.
                </p>
                <p>
                  With a passion for security, systems, and open source
                  development, I love working on new and interesting problems. I hold a CCNA certification and have contributed
                  upstream to projects like gosec, pyfpdf, and Open Source
                  Connect India. I am currently exploring the intersection of
                  infrastructure, security, and developer tooling inspired by my
                  work with OSS projects. At Plaksha, I also collaborate with
                  the Human Technology Interaction Lab, where I research how
                  people engage with emerging technologies. Outside academics, I
                  am a Certified Visharad Purna in Kathak (BA equivalent), a
                  state level swimmer and equestrian. I am an avid reader of
                  history, business, and economic development, and I bring that
                  same curiosity into my projects, always eager to learn, build,
                  and contribute.
                </p>
                <p>
                  Beyond technology, I have always loved building and
                  experimenting. I launched Owlett, a platform that simplified
                  business and economic news for teenagers, and started Ministry
                  of Sugar, a home bakery that funded my first phone. I have
                  also had the privilege of speaking at the United Nations
                  Global Compact Network (SDGs, 2019, Mumbai), and my writing
                  has been recognized with a Bronze award in the Commonwealth
                  Essay Competition and as a Scholastic Talent Search Top 25
                  finalist.
                </p>
                <p>
                  Outside academics, I am a Certified Visharad Purna in Kathak
                  (BA equivalent), a state level swimmer and equestrian. I am an
                  avid reader of history, business, and economic development,
                  and I bring that same curiosity into my projects, always eager
                  to learn, build, and contribute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
