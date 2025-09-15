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
    <section className="py-16" style={{backgroundColor: '#f7f6f0'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Four Column Layout - All Projects in One Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {featuredProjects.map((project, index) => {
            const isImageOnTop = index % 2 === 0; // Alternate: even indices have image on top
            
            return (
              <div key={index} className="bg-[#f7f6f0] min-h-[350px] flex flex-col group">
                {isImageOnTop && (
                  /* Project Image - Top */
                  <div className="w-full h-64 bg-gray-200 mb-6 overflow-hidden">
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
                <h3 className="text-2xl font-bold text-black mb-4 font-serif leading-tight relative group">
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
                <p className="text-sm text-gray-600 font-serif mb-4">{project.duration}</p>
                
                {/* Article Text */}
                <div className="space-y-4 text-sm leading-relaxed mb-6 flex-grow">
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
                
                {/* Call to Action Button */}
                <div className="space-y-2 mb-4 mt-auto">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block bg-gray-800 text-white px-6 py-2 text-sm font-medium hover:bg-gray-900 transition-colors w-full text-center"
                    >
                      View GitHub &gt;&gt;
                    </a>
                  )}
                  {project.url && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block bg-gray-600 text-white px-6 py-2 text-sm font-medium hover:bg-gray-700 transition-colors w-full text-center"
                    >
                      Live Demo &gt;&gt;
                    </a>
                  )}
                </div>
                
                {!isImageOnTop && (
                  /* Project Image - Bottom */
                  <div className="w-full h-48 bg-gray-200 mb-4 overflow-hidden">
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
