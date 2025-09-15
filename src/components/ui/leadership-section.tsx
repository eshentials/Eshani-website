"use client";

export function LeadershipSection() {
  return (
    <section className="py-20" style={{backgroundColor: '#f7f6f0'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-serif">LEADERSHIP & INITIATIVES</h2>
          <div className="w-16 h-1 bg-black mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif">
            Positions of responsibility and entrepreneurial ventures
          </p>
        </div>

        {/* Leadership Articles */}
        <div className="space-y-8">
          
          {/* Dance Club Leadership */}
          <article className="p-6" style={{backgroundColor: '#f7f6f0'}}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-black font-serif">HEAD OF CLASSICAL DEPARTMENT</h3>
                <p className="text-sm text-gray-600 font-serif">One-o-One Dance Club, Plaksha University</p>
              </div>
              <div className="text-right text-sm font-serif">
                <p className="font-bold">AUG 2024 – PRESENT</p>
                <p className="text-gray-600">ONGOING</p>
              </div>
            </div>
            
            <div className="w-full h-px bg-black mb-4"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4 text-sm font-serif">
                <div className="p-4" style={{backgroundColor: '#f7f6f0'}}>
                  <h4 className="font-bold text-black mb-2">EVENT MANAGEMENT</h4>
                  <p className="text-gray-700">
                    Organized the flagship Traditional Day cultural event by coordinating performances and logistics using structured scheduling, resulting in a smooth event experience for 200+ attendees.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 text-sm font-serif">
                <div className="p-4" style={{backgroundColor: '#f7f6f0'}}>
                  <h4 className="font-bold text-black mb-2">LEADERSHIP IMPACT</h4>
                  <p className="text-gray-700">
                    Successfully managed cultural programming and team coordination, demonstrating strong organizational and leadership skills in a university setting.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* LEAP AI Club */}
          <article className="p-6" style={{backgroundColor: '#f7f6f0'}}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-black font-serif">MEMBER</h3>
                <p className="text-sm text-gray-600 font-serif">LEAP AI Club, Plaksha University</p>
              </div>
              <div className="text-right text-sm font-serif">
                <p className="font-bold">ONGOING</p>
                <p className="text-gray-600">ACTIVE MEMBER</p>
              </div>
            </div>
            
            <div className="w-full h-px bg-black mb-4"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4 text-sm font-serif">
                <div className="p-4" style={{backgroundColor: '#f7f6f0'}}>
                  <h4 className="font-bold text-black mb-2">WEB DEVELOPMENT</h4>
                  <p className="text-gray-700">
                    Built the club's official website using Next.js and TailwindCSS, establishing an online presence and streamlining event communication.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 text-sm font-serif">
                <div className="p-4" style={{backgroundColor: '#f7f6f0'}}>
                  <h4 className="font-bold text-black mb-2">AI PROJECT</h4>
                  <p className="text-gray-700">
                    Developed LEAPDraw, a sketch-recognition ML system using CNNs and QuickDraw! dataset, enabling interactive AI-based doodle classification.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Owlett Co-Founder */}
          <article className="p-6" style={{backgroundColor: '#f7f6f0'}}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-black font-serif">CO-FOUNDER</h3>
                <p className="text-sm text-gray-600 font-serif">Owlett</p>
              </div>
              <div className="text-right text-sm font-serif">
                <p className="font-bold">JAN 2019 – FEB 2020</p>
                <p className="font-bold">JAN 2024 – MAY 2025</p>
                <p className="text-gray-600">TWO PHASES</p>
              </div>
            </div>
            
            <div className="w-full h-px bg-black mb-4"></div>
            
            <div className="space-y-6 text-sm font-serif">
              <div className="p-4" style={{backgroundColor: '#f7f6f0'}}>
                <h4 className="font-bold text-black mb-2">PLATFORM DEVELOPMENT</h4>
                <p className="text-gray-700">
                  Created a youth-focused platform by simplifying complex articles in politics, economics, business, and social issues using accessible language and design, resulting in 350+ articles and 20k+ views.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4" style={{backgroundColor: '#f7f6f0'}}>
                  <h4 className="font-bold text-black mb-2">COMPETITION SUCCESS</h4>
                  <p className="text-gray-700">
                    Pitched Owlett as a student-led initiative in ENpower's India Future Tycoons Season 1, achieving second runner-up among 100+ teams.
                  </p>
                </div>
                
                <div className="p-4" style={{backgroundColor: '#f7f6f0'}}>
                  <h4 className="font-bold text-black mb-2">GLOBAL RECOGNITION</h4>
                  <p className="text-gray-700">
                    Presented at the UNSDG Global Compact Network Summit in Mumbai and was felicitated for the same.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-xs text-gray-500 font-serif">
              <p><span className="font-bold">Impact:</span> 350+ articles, 20k+ views, 2nd runner-up in competition</p>
              <p><span className="font-bold">Recognition:</span> UNSDG Global Compact Network Summit</p>
            </div>
          </article>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-black pt-6">
          <div className="text-center">
            <h4 className="text-sm font-bold text-black mb-2 font-serif uppercase">LEADERSHIP ROLES</h4>
            <p className="text-sm text-black font-serif">3+ Positions</p>
          </div>
          <div className="text-center">
            <h4 className="text-sm font-bold text-black mb-2 font-serif uppercase">EVENTS MANAGED</h4>
            <p className="text-sm text-black font-serif">200+ Attendees</p>
          </div>
          <div className="text-center">
            <h4 className="text-sm font-bold text-black mb-2 font-serif uppercase">CONTENT CREATED</h4>
            <p className="text-sm text-black font-serif">350+ Articles</p>
          </div>
          <div className="text-center">
            <h4 className="text-sm font-bold text-black mb-2 font-serif uppercase">COMPETITIONS</h4>
            <p className="text-sm text-black font-serif">2nd Runner-up</p>
          </div>
        </div>
      </div>
    </section>
  );
}
