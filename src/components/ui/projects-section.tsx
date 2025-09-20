"use client";

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

export function ProjectsSection() {
  const allProjects: Project[] = projectsData.projects;
  
  // Select 4 main projects for the landing page
  const featuredProjects = [
    allProjects.find(p => p.title.includes("Multimodal IPO")),
    allProjects.find(p => p.title.includes("Golang Security")),
    allProjects.find(p => p.title.includes("Website Development")),
    allProjects.find(p => p.title.includes("Dark Pattern"))
  ].filter(Boolean) as Project[];
  return (
    <section className="py-8" style={{backgroundColor: '#f7f6f0'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Four Column Layout - All Projects in One Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {featuredProjects.map((project, index) => {
            const isImageOnTop = index % 2 === 0; // Alternate: even indices have image on top
            
            return (
              <div key={index} className="bg-[#f7f6f0] min-h-[360px] flex flex-col group">
                {isImageOnTop && (
                  /* Project Image - Top */
                  <div className="w-full h-52 bg-gray-200 mb-3 overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image.replace('public/', '/')} 
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-500 font-serif text-xl">
                          {project.typeOfProject === "AI/ML" ? "🤖" : 
                           project.typeOfProject === "Web-Development" ? "🌐" :
                           project.typeOfProject === "Security" ? "🔒" : "💻"}
                        </span>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-2 font-serif leading-tight relative group">
                  {project.title.toUpperCase().replace(/\s+/g, '\n').split('\n').map((line, lineIndex) => (
                    <div key={lineIndex} className="block">
                      {line.split(' ').map((word, wordIndex) => (
                        <span key={wordIndex} className="relative overflow-hidden inline-block mr-2">
                          <span className="relative z-10">
                            {word}
                          </span>
                          <div 
                            className="absolute inset-y-1 left-0 right-0 bg-yellow-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out"
                            style={{ transitionDelay: `${(lineIndex * 3 + wordIndex) * 50}ms` }}
                          ></div>
                        </span>
                      ))}
                    </div>
                  ))}
                </h3>
                <div className="w-full h-px bg-black mb-4"></div>
                <p className="text-xs text-gray-600 font-serif mb-2">{project.duration}</p>
                
                {/* Article Text */}
                <div className="space-y-2 text-xs leading-snug mb-3 flex-grow line-clamp-5">
                  <p className="font-serif">
                    {project.description}
                  </p>
                  <p className="font-serif text-gray-600">
                    {project.affliatedOrganisation}
                  </p>
                  <p className="font-serif text-gray-600">
                    Read more &gt;&gt;
                  </p>
                </div>
                
                {/* Continued on page link */}
                <div className="mb-4 mt-auto text-right">
                  <a 
                    href="/projects" 
                    className="text-sm font-serif italic text-gray-600 hover:underline"
                  >
                    continued on page 3 &gt;&gt;
                  </a>
                </div>
                
                {!isImageOnTop && (
                  /* Project Image - Bottom */
                  <div className="w-full h-40 bg-gray-200 mt-2 overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image.replace('public/', '/')} 
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-500 font-serif text-xl">
                          {project.typeOfProject === "AI/ML" ? "🤖" : 
                           project.typeOfProject === "Web-Development" ? "🌐" :
                           project.typeOfProject === "Security" ? "🔒" : "💻"}
                        </span>
                      </div>
                    )}
                  </div>
                )}
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
