"use client";

import { useState } from "react";

interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-COMMERCE PLATFORM",
    date: "December 15, 2024",
    description: "A full-stack e-commerce solution built with Next.js and Stripe integration. Features include user authentication, product catalog, shopping cart, and secure payment processing. Built with modern web technologies and responsive design principles.",
    image: "/api/placeholder/400/300",
    category: "Web Development",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/eshentials/ecommerce",
    featured: true
  },
  {
    id: "2", 
    title: "TASK MANAGEMENT APP",
    date: "November 28, 2024",
    description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
    image: "/api/placeholder/400/300",
    category: "Mobile Development",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/eshentials/taskapp"
  },
  {
    id: "3",
    title: "DATA VISUALIZATION DASHBOARD", 
    date: "November 20, 2024",
    description: "Interactive dashboard for data analysis and visualization with real-time charts, filtering options, and export capabilities.",
    image: "/api/placeholder/400/300",
    category: "Data Science",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/eshentials/dashboard"
  },
  {
    id: "4",
    title: "PORTFOLIO WEBSITE",
    date: "October 15, 2024", 
    description: "Personal portfolio website showcasing projects, skills, and professional experience with modern design and responsive layout.",
    image: "/api/placeholder/400/300",
    category: "Web Development",
    liveUrl: "https://eshani.dev",
    githubUrl: "https://github.com/eshentials/portfolio"
  }
];

export function ProjectsSection() {
  return (
    <section className="py-24" style={{backgroundColor: '#f7f6f0'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Four Column Layout - All Projects in One Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Project 1 */}
          <div className="bg-white min-h-[800px]">
            {/* Project Image */}
            <div className="w-full h-80 bg-gray-200 mb-8">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500 font-serif text-xl">IMAGE</span>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-black mb-4 font-serif leading-tight">
              E-COMMERCE<br/>PLATFORM
            </h3>
            <div className="w-full h-px bg-black mb-4"></div>
            <p className="text-sm text-gray-600 font-serif mb-8">{projects[0].date}</p>
            
            {/* Article Text */}
            <div className="space-y-6 text-sm leading-relaxed mb-8">
              <p className="font-serif">
                A comprehensive full-stack e-commerce solution built with Next.js and Stripe integration. This platform features complete user authentication, advanced product catalog management, dynamic shopping cart functionality, and secure payment processing.
              </p>
              <p className="font-serif text-gray-600">
                Built with modern web technologies including React, TypeScript, and Tailwind CSS. Implements responsive design principles for optimal user experience across all devices and screen sizes.
              </p>
              <p className="font-serif text-gray-600">
                Features include real-time inventory management, order tracking, customer reviews, and admin dashboard for comprehensive store management.
              </p>
              <p className="font-serif text-gray-600">
                Read more &gt;&gt;
              </p>
            </div>
            
            {/* Call to Action Button */}
            <button className="bg-gray-800 text-white px-8 py-5 text-sm font-medium hover:bg-gray-900 transition-colors w-full mb-4">
              View Project &gt;&gt;
            </button>
            
            {/* Additional Info */}
            <div className="text-xs text-gray-500 font-serif">
              <p>Technologies: Next.js, React, Stripe, PostgreSQL</p>
              <p>Duration: 3 months</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white min-h-[800px]">
            {/* Title */}
            <h3 className="text-2xl font-bold text-black mb-4 font-serif leading-tight">
              TASK MANAGEMENT<br/>APPLICATION
            </h3>
            <div className="w-full h-px bg-black mb-4"></div>
            <p className="text-sm text-gray-600 font-serif mb-8">{projects[1].date}</p>
            
            {/* Article Text */}
            <div className="space-y-6 text-sm leading-relaxed mb-8">
              <p className="font-serif">
                A comprehensive collaborative task management application with real-time updates and advanced team collaboration features. Built for modern teams who need efficient project coordination.
              </p>
              <p className="font-serif text-gray-600">
                Includes sophisticated project tracking capabilities, intelligent deadline management, and seamless team communication tools with instant notifications and updates.
              </p>
              <p className="font-serif text-gray-600">
                Features include drag-and-drop task organization, time tracking, progress analytics, and integration with popular productivity tools.
              </p>
              <p className="font-serif text-gray-600">
                Read more &gt;&gt;
              </p>
            </div>
            
            {/* Call to Action Button */}
            <button className="bg-gray-800 text-white px-8 py-5 text-sm font-medium mb-6 hover:bg-gray-900 transition-colors w-full">
              View App &gt;&gt;
            </button>
            
            {/* Project Image */}
            <div className="w-full h-64 bg-gray-200 mb-4">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500 font-serif text-xl">IMAGE</span>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="text-xs text-gray-500 font-serif">
              <p>Technologies: React Native, Node.js, MongoDB</p>
              <p>Duration: 4 months</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white min-h-[800px]">
            {/* Project Image */}
            <div className="w-full h-80 bg-gray-200 mb-8">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500 font-serif text-xl">IMAGE</span>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-black mb-4 font-serif leading-tight">
              DATA VISUALIZATION<br/>DASHBOARD
            </h3>
            <div className="w-full h-px bg-black mb-4"></div>
            <p className="text-sm text-gray-600 font-serif mb-8">{projects[2].date}</p>
            
            {/* Article Text */}
            <div className="space-y-6 text-sm leading-relaxed mb-8">
              <p className="font-serif">
                An advanced interactive dashboard for comprehensive data analysis and visualization with real-time charts, dynamic filtering options, and customizable widgets.
              </p>
              <p className="font-serif text-gray-600">
                Features extensive export capabilities, multiple custom chart types, and fully responsive design for optimal data presentation across all devices.
              </p>
              <p className="font-serif text-gray-600">
                Includes machine learning integration for predictive analytics, automated report generation, and real-time data streaming from multiple sources.
              </p>
              <p className="font-serif text-gray-600">
                Read more &gt;&gt;
              </p>
            </div>
            
            {/* Call to Action Button */}
            <button className="bg-gray-800 text-white px-8 py-5 text-sm font-medium hover:bg-gray-900 transition-colors w-full mb-4">
              View Dashboard &gt;&gt;
            </button>
            
            {/* Additional Info */}
            <div className="text-xs text-gray-500 font-serif">
              <p>Technologies: D3.js, Python, Flask, PostgreSQL</p>
              <p>Duration: 5 months</p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white min-h-[800px]">
            {/* Title */}
            <h3 className="text-2xl font-bold text-black mb-4 font-serif leading-tight">
              PORTFOLIO<br/>WEBSITE
            </h3>
            <div className="w-full h-px bg-black mb-4"></div>
            <p className="text-sm text-gray-600 font-serif mb-8">{projects[3].date}</p>
            
            {/* Article Text */}
            <div className="space-y-6 text-sm leading-relaxed mb-8">
              <p className="font-serif">
                A sophisticated personal portfolio website showcasing projects, skills, and professional experience with cutting-edge modern design and innovative user interactions.
              </p>
              <p className="font-serif text-gray-600">
                Features fully responsive layout, advanced interactive elements, smooth animations, and seamless user experience across all devices and screen sizes.
              </p>
              <p className="font-serif text-gray-600">
                Includes dynamic content management, SEO optimization, performance monitoring, and integration with various APIs for enhanced functionality.
              </p>
              <p className="font-serif text-gray-600">
                Read more &gt;&gt;
              </p>
            </div>
            
            {/* Call to Action Button */}
            <button className="bg-gray-800 text-white px-8 py-5 text-sm font-medium mb-6 hover:bg-gray-900 transition-colors w-full">
              View GitHub &gt;&gt;
            </button>
            
            {/* Project Image */}
            <div className="w-full h-64 bg-gray-200 mb-4">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500 font-serif text-xl">IMAGE</span>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="text-xs text-gray-500 font-serif">
              <p>Technologies: Next.js, TypeScript, Tailwind CSS</p>
              <p>Duration: 2 months</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
