"use client";

import { Footer } from "@/components/ui/footer";
import projectsData from "@/data/projects.json";

interface Project {
  title: string;
  duration: string;
  githubLink: string;
  url: string;
  description: string;
  image: string;
  techStack: string[];
  linkedinUrl: string;
  affliatedOrganisation: string;
  typeOfProject: string;
}

export default function ProjectsPage() {
  const projects: Project[] = projectsData.projects;
  
  // Main projects for the grid
  const mainProjects = [
    projects.find(p => p.title.includes("Golang Security Analysis")), // Gosec (wide)
    projects.find(p => p.title.includes("LEAP")), // LEAP Website
    projects.find(p => p.title.includes("Energy Monitoring")), // Energy Monitoring
    projects.find(p => p.title.includes("Owlett")), // Owlett
    projects.find(p => p.title.includes("Multimodal IPO")), // Multimodal IPO (hero)
    projects.find(p => p.title.includes("Dark Pattern")) // Dark Pattern Detection
  ].filter(Boolean) as Project[];

  // Additional projects for the subsection
  const additionalProjects = projects.filter(p => !mainProjects.includes(p));
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

      {/* Projects Grid - Main Projects */}
      <section className="py-12" style={{backgroundColor: '#f7f6f0'}}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="space-y-0">
            
            {/* Hero Project: Multimodal IPO Binary Classification - Full Width Top */}
            <div className="border-b border-black">
              <div className="grid grid-cols-12 gap-0 min-h-[500px]">
                {/* Left Content */}
                <div className="col-span-8 relative" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                  <div className="px-8 space-y-6">
                    <h2 className="text-3xl font-serif font-bold text-black relative group cursor-pointer">
                      <span className="relative z-10">
                        {mainProjects[4]?.title || "Multimodal IPO Binary Classification"}
                      </span>
                      <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                    </h2>
                    <div className="space-y-3 text-sm font-serif text-black">
                      <p>• {mainProjects[4]?.duration || "Jan 2025 – May 2025"}</p>
                      <p>• {mainProjects[4]?.affliatedOrganisation || "Machine Learning and Pattern Recognition Course"}</p>
                      <p>• {mainProjects[4]?.techStack?.join(", ") || "Neural Networks, RAG, NLP"}</p>
                    </div>
                    <p className="text-sm font-serif text-black leading-relaxed">
                      {mainProjects[4]?.description || "Built a neural network integrating RHP text, financial data, and market sentiment to predict IPO success. Created a RAG pipeline extracting targeted RHP sections via 25 domain-specific queries. Achieved 90% accuracy and 96% F1-score."}
                    </p>
                    <div className="flex space-x-4">
                      {mainProjects[4]?.githubLink && (
                        <a href={mainProjects[4].githubLink} className="inline-flex items-center text-black text-sm font-serif hover:underline">
                          GitHub →
                        </a>
                      )}
                      {mainProjects[4]?.linkedinUrl && (
                        <a href={mainProjects[4].linkedinUrl} className="inline-flex items-center text-black text-sm font-serif hover:underline">
                          LinkedIn →
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="absolute right-0 top-4 bottom-4 bg-black" style={{ width: "0.5px" }}></div>
                </div>
                {/* Right Image */}
                <div className="col-span-4 bg-gray-100 flex items-center justify-center group" style={{paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: '2rem', paddingRight: '2rem'}}>
                  {mainProjects[4]?.image ? (
                    <img 
                      src={mainProjects[4].image.replace('public/', '/')} 
                      alt={mainProjects[4].title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-xs font-serif text-gray-600">ML Model</span>
                      </div>
                      <p className="text-xs font-serif text-gray-600">90% Accuracy</p>
                      <p className="text-xs font-serif text-gray-600">96% F1-Score</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Row 2: Three Projects */}
            <div className="grid grid-cols-12 gap-0 border-b border-black min-h-[500px]">
             
              {/* Project 1: Gosec - Middle Column (Wide) */}
              <div className="col-span-6 relative" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                <div className="px-6 h-full">
                  <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-4 overflow-hidden group">
                    {mainProjects[0]?.image ? (
                      <img 
                        src={mainProjects[0].image.replace('public/', '/')} 
                        alt={mainProjects[0].title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-400 mx-auto mb-2 flex items-center justify-center">
                          <span className="text-xs font-serif text-white">Go</span>
                        </div>
                        <p className="text-xs font-serif text-gray-600">Security Analysis</p>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-black mb-3 relative group cursor-pointer">
                    <span className="relative z-10">
                      {mainProjects[0]?.title || "Golang Security Analysis Enhancements"}
                    </span>
                    <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                  </h3>
                  <p className="text-xs font-serif text-black leading-relaxed mb-4">
                    {mainProjects[0]?.description || "Contributed to Gosec, Golang's static analysis tool, by strengthening detection rules with refined file path taint checks (G304) and expanded SQL injection checks (G202). Fixed nil-context crashes and added coverage for edge cases."}
                  </p>
                  <div className="space-y-1">
                    {mainProjects[0]?.githubLink && (
                      <a href={mainProjects[0].githubLink} className="block text-black text-xs font-serif hover:underline">GitHub PR #1384 →</a>
                    )}
                    {mainProjects[0]?.url && (
                      <a href={mainProjects[0].url} className="block text-black text-xs font-serif hover:underline">Gosec Repository →</a>
                    )}
                  </div>
                </div>
                <div className="absolute right-0 top-4 bottom-4 bg-black" style={{ width: "0.5px" }}></div>
              </div>

              {/* Project 2: LEAP Website - Left Column */}
              <div className="col-span-3 relative" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                <div className="px-6 h-full">
                  <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-4 overflow-hidden group">
                    {mainProjects[1]?.image ? (
                      <img 
                        src={mainProjects[1].image.replace('public/', '/')} 
                        alt={mainProjects[1].title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-400 mx-auto mb-2 flex items-center justify-center">
                          <span className="text-xs font-serif text-white">LEAP</span>
                        </div>
                        <p className="text-xs font-serif text-gray-600">AI Club</p>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-black mb-3 relative group cursor-pointer">
                    <span className="relative z-10">
                      {mainProjects[1]?.title || "Website Development - LEAP AI Club"}
                    </span>
                    <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                  </h3>
                  <p className="text-xs font-serif text-black leading-relaxed mb-4">
                    {mainProjects[1]?.description || "Designed and coded the website for the LEAP Artificial Intelligence club."}
                  </p>
                  <div className="space-y-1">
                    {mainProjects[1]?.url && (
                      <a href={mainProjects[1].url} className="block text-black text-xs font-serif hover:underline">Live Website →</a>
                    )}
                    {mainProjects[1]?.linkedinUrl && (
                      <a href={mainProjects[1].linkedinUrl} className="block text-black text-xs font-serif hover:underline">LinkedIn Post →</a>
                    )}
                  </div>
                </div>
                <div className="absolute right-0 top-4 bottom-4 bg-black" style={{ width: "0.5px" }}></div>
              </div>

              {/* Project 3: Energy Monitoring - Right Column */}
              <div className="col-span-3" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                <div className="px-6 h-full">
                  <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-4 overflow-hidden group">
                    {mainProjects[2]?.image ? (
                      <img 
                        src={mainProjects[2].image.replace('public/', '/')} 
                        alt={mainProjects[2].title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-400 mx-auto mb-2 flex items-center justify-center">
                          <span className="text-xs font-serif text-white">⚡</span>
                        </div>
                        <p className="text-xs font-serif text-gray-600">IoT System</p>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-black mb-3 relative group cursor-pointer">
                    <span className="relative z-10">
                      {mainProjects[2]?.title || "Energy Monitoring System"}
                    </span>
                    <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                  </h3>
                  <p className="text-xs font-serif text-black leading-relaxed mb-4">
                    {mainProjects[2]?.description || "Built a home energy monitoring system using time-series data from smart sockets and thermal regulators. Developed WhatsApp-based nudges and cost-prediction models to track and influence energy consumption behavior."}
                  </p>
                  <a href="#" className="inline-flex items-center text-black text-xs font-serif hover:underline">
                    Read More →
                  </a>
                </div>
              </div>
            </div>

            {/* Row 3: Three Projects */}
            <div className="grid grid-cols-12 gap-0 min-h-[500px]">
              {/* Project 4: Owlett - Left Column */}
              <div className="col-span-3 relative" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                <div className="px-6 h-full">
                  <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-4 overflow-hidden group">
                    {mainProjects[3]?.image ? (
                      <img 
                        src={mainProjects[3].image.replace('public/', '/')} 
                        alt={mainProjects[3].title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-400 mx-auto mb-2 flex items-center justify-center">
                          <span className="text-xs font-serif text-white">O</span>
                        </div>
                        <p className="text-xs font-serif text-gray-600">Co-Founded</p>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-black mb-3 relative group cursor-pointer">
                    <span className="relative z-10">
                      {mainProjects[3]?.title || "Owlett"}
                    </span>
                    <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                  </h3>
                  <p className="text-xs font-serif text-black leading-relaxed mb-4">
                    {mainProjects[3]?.description || "Co-founded a website that simplified media articles in politics, economics, business, and social issues for youth audiences. Second runner-up in ENpower's India Future Tycoons Season 1. Student-led initiative with 20k+ views, 350+ articles, and 9 student writers."}
                  </p>
                  <div className="space-y-1">
                    {mainProjects[3]?.githubLink && (
                      <a href={mainProjects[3].githubLink} className="block text-black text-xs font-serif hover:underline">WordPress Site →</a>
                    )}
                  </div>
                </div>
                <div className="absolute right-0 top-4 bottom-4 bg-black" style={{ width: "0.5px" }}></div>
              </div>

              {/* Project 5: Dark Pattern Detection - Middle Column (Wide) */}
              <div className="col-span-6 relative" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                <div className="px-6 h-full">
                  <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-4 overflow-hidden group">
                    {mainProjects[5]?.image ? (
                      <img 
                        src={mainProjects[5].image.replace('public/', '/')} 
                        alt={mainProjects[5].title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-400 mx-auto mb-2 flex items-center justify-center">
                          <span className="text-xs font-serif text-white">🔍</span>
                        </div>
                        <p className="text-xs font-serif text-gray-600">Detection Tool</p>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-black mb-3 relative group cursor-pointer">
                    <span className="relative z-10">
                      {mainProjects[5]?.title || "Dark Pattern Detection Tool"}
                    </span>
                    <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                  </h3>
                  <p className="text-xs font-serif text-black leading-relaxed mb-4">
                    {mainProjects[5]?.description || "Designed a dark pattern detection tool to identify false urgency on websites. Used a Gemini API + Selenium scraper to extract DOM contents and features, continuing as a research project on temporal analysis of dark patterns."}
                  </p>
                  <div className="space-y-1">
                    {mainProjects[5]?.githubLink && (
                      <a href={mainProjects[5].githubLink} className="block text-black text-xs font-serif hover:underline">GitHub Repository →</a>
                    )}
                  </div>
                </div>
                <div className="absolute right-0 top-4 bottom-4 bg-black" style={{ width: "0.5px" }}></div>
              </div>

              {/* Project 6: RegExtract */}
              <div className="col-span-3" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                <div className="px-6 h-full">
                  <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-400 mx-auto mb-2 flex items-center justify-center">
                        <span className="text-xs font-serif text-white">📄</span>
                      </div>
                      <p className="text-xs font-serif text-gray-600">Regulatory Tool</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-black mb-3 relative group cursor-pointer">
                    <span className="relative z-10">
                      RegExtract
                    </span>
                    <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                  </h3>
                  <p className="text-xs font-serif text-black leading-relaxed mb-4">
                    Automated solution to check targeted regulatory websites for changes in policy. Used DFS to scrape websites for PDFs, download and parse them, then compared with a baseline template using Gemini API for summarization.
                  </p>
                  <div className="space-y-1">
                    <a href="https://github.com/eshentials/Regulatory_scraper" className="block text-black text-xs font-serif hover:underline">GitHub Repository →</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Additional Projects Section */}
      <section className="py-12" style={{backgroundColor: '#f7f6f0'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-black mb-8 text-center">
            ADDITIONAL PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <div key={index} className="bg-white border border-black p-6 hover:shadow-lg transition-shadow">
                {project.image && (
                  <div className="w-full h-48 bg-gray-100 mb-4 overflow-hidden group">
                    <img 
                      src={project.image.replace('public/', '/')} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                    />
                  </div>
                )}
                <h3 className="text-lg font-serif font-bold text-black mb-3 relative group cursor-pointer">
                  <span className="relative z-10">
                    {project.title}
                  </span>
                  <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </h3>
                <p className="text-sm font-serif text-gray-600 mb-2">
                  {project.duration} • {project.affliatedOrganisation}
                </p>
                <p className="text-sm font-serif text-black leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs font-serif bg-gray-100 px-2 py-1 border border-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.githubLink && (
                    <a href={project.githubLink} className="text-black text-sm font-serif hover:underline">
                      GitHub →
                    </a>
                  )}
                  {project.url && (
                    <a href={project.url} className="text-black text-sm font-serif hover:underline">
                      Live Demo →
                    </a>
                  )}
                  {project.linkedinUrl && (
                    <a href={project.linkedinUrl} className="text-black text-sm font-serif hover:underline">
                      LinkedIn →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

