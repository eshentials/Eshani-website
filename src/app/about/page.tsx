import { Heart, BookOpen, PawPrint, Cake, Code, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                ESHANI PARULEKAR
              </h1>
              <div className="space-y-4">
                <p className="text-xl md:text-2xl font-light">
                  DEVELOPER & CREATIVE PROBLEM SOLVER, BUILDING BEAUTIFUL DIGITAL EXPERIENCES WORLDWIDE.
                </p>
                <p className="text-lg text-red-100 leading-relaxed">
                  I'm a passionate developer who believes in creating not just functional applications, 
                  but digital experiences that inspire and delight. When I'm not coding, you'll find me 
                  dancing, reading, baking, or spending time with my furry companion.
                </p>
              </div>
              <button className="border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-red-900 transition-all duration-300">
                LEARN MORE
              </button>
            </div>
            
            {/* Right Column - Image Placeholder */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-red-200 to-red-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-red-800">
                  <div className="w-32 h-32 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">EP</span>
                  </div>
                  <p className="text-xl font-serif">THE DEVELOPER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Heart Behind Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-red-800 uppercase tracking-wider">
                WHY I DO WHAT I DO
              </h3>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                THE HEART BEHIND MY WORK
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                I believe that technology should not only solve problems but also bring joy and beauty 
                to people's lives. My diverse interests in dance, reading, and baking inform my approach 
                to development - creating solutions that are both elegant and functional, just like a 
                well-choreographed dance or a perfectly baked cake.
              </p>
            </div>
            
            {/* Right Column - Small Images */}
            <div className="space-y-6">
              <div className="w-64 h-64 bg-gradient-to-br from-red-200 to-red-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-red-800">
                  <Heart className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-serif">Fig. 01</p>
                  <p className="text-sm">Passion & Creativity</p>
                </div>
              </div>
              <div className="w-64 h-64 bg-gradient-to-br from-amber-200 to-amber-300 rounded-lg flex items-center justify-center ml-16">
                <div className="text-center text-amber-800">
                  <Code className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-serif">Fig. 02</p>
                  <p className="text-sm">Innovation & Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kathak Dancer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Large Image */}
            <div className="w-full h-96 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-red-800">
                <div className="w-32 h-32 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl">💃</span>
                </div>
                <p className="text-2xl font-serif">Kathak Dance</p>
              </div>
            </div>
            
            {/* Right Column - Text */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                KATHAK DANCER
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A classical Indian dance form that has been my passion since childhood. Kathak teaches 
                me discipline, rhythm, and the art of storytelling through movement. The grace and 
                precision required in dance translate beautifully into my coding - every line of code 
                is like a step in a choreographed routine, working together to create something 
                beautiful and meaningful.
              </p>
              <div className="flex items-center space-x-4 text-red-600 font-medium">
                <span>TRADITIONAL RHYTHMS</span>
                <ArrowRight className="w-5 h-5" />
                <span>MODERN CODE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enthusiastic Reader Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                ENTHUSIASTIC READER
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Books are my gateway to different worlds, perspectives, and ideas. From technical 
                manuals to fantasy novels, each book shapes my thinking and fuels my creativity. 
                Reading diverse genres helps me approach problems from multiple angles, making me 
                a more versatile developer who can think outside the box.
              </p>
              <div className="flex items-center space-x-4 text-amber-600 font-medium">
                <span>FANTASY WORLDS</span>
                <ArrowRight className="w-5 h-5" />
                <span>REAL SOLUTIONS</span>
              </div>
            </div>
            
            {/* Right Column - Large Image */}
            <div className="w-full h-96 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-amber-800">
                <BookOpen className="w-32 h-32 mx-auto mb-4" />
                <p className="text-2xl font-serif">Reading Journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dog Mom Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Large Image */}
            <div className="w-full h-96 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-amber-800">
                <PawPrint className="w-32 h-32 mx-auto mb-4" />
                <p className="text-2xl font-serif">Furry Friend</p>
              </div>
            </div>
            
            {/* Right Column - Text */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                DOG MOM
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Being a dog mom has taught me patience, unconditional love, and the importance of 
                being present. My furry companion reminds me daily that life isn't just about work 
                and code - it's about joy, play, and the simple pleasures. This balance keeps me 
                grounded and helps me bring warmth and humanity to my digital creations.
              </p>
              <div className="flex items-center space-x-4 text-amber-600 font-medium">
                <span>UNCONDITIONAL LOVE</span>
                <ArrowRight className="w-5 h-5" />
                <span>USER EXPERIENCE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Baker Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                BAKER
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Baking is my creative outlet and stress reliever. The precision of measurements, 
                the patience of waiting for things to rise, and the joy of creating something 
                beautiful and delicious - these are the same principles I apply to development. 
                Every project is like a recipe, requiring the right ingredients, timing, and 
                love to turn out perfectly.
              </p>
              <div className="flex items-center space-x-4 text-amber-600 font-medium">
                <span>PRECISE RECIPES</span>
                <ArrowRight className="w-5 h-5" />
                <span>PERFECT CODE</span>
              </div>
            </div>
            
            {/* Right Column - Large Image */}
            <div className="w-full h-96 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-amber-800">
                <Cake className="w-32 h-32 mx-auto mb-4" />
                <p className="text-2xl font-serif">Sweet Creations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Techie and Activities Section */}
      <section className="py-20 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Large Image */}
            <div className="w-full h-96 bg-gradient-to-br from-red-200 to-red-300 rounded-lg flex items-center justify-center">
              <div className="text-center text-red-800">
                <Code className="w-32 h-32 mx-auto mb-4" />
                <p className="text-2xl font-serif">Tech & Innovation</p>
              </div>
            </div>
            
            {/* Right Column - Text */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                TECHIE & ACTIVITIES
              </h2>
              <p className="text-lg text-red-100 leading-relaxed">
                At my core, I'm a passionate technologist who loves exploring new technologies, 
                solving complex problems, and building things that make a difference. When I'm not 
                coding, I'm attending tech meetups, contributing to open source, or exploring 
                the latest in AI and machine learning. Technology is my playground, and I'm 
                always excited to learn and grow.
              </p>
              <div className="flex items-center space-x-4 text-red-200 font-medium">
                <span>INNOVATION</span>
                <ArrowRight className="w-5 h-5" />
                <span>IMPACT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-amber-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            LET'S BUILD SOMETHING AMAZING TOGETHER
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Ready to turn your ideas into reality? I'd love to hear about your project and 
            discuss how we can create something beautiful and functional together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300">
              GET IN TOUCH
            </button>
            <button className="border-2 border-amber-400 text-amber-400 px-8 py-4 text-lg font-medium hover:bg-amber-400 hover:text-gray-900 transition-all duration-300">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
