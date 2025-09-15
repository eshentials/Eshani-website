"use client";

import { useState, useEffect } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  year?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Sneaker Design",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center",
    description: "Modern sneaker design with orange accents",
    year: "2024"
  },
  {
    id: 2,
    title: "Mobile App UI",
    category: "Mobile Design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center",
    description: "iPhone mockup showcasing mobile interface design"
  },
  {
    id: 3,
    title: "Fashion Photography",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop&crop=center",
    description: "Fashion shoot with vibrant yellow dress"
  },
  {
    id: 4,
    title: "iPhone 14 Pro Mockups",
    category: "Mobile Design",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop&crop=center",
    description: "Professional iPhone mockup presentation"
  },
  {
    id: 5,
    title: "Backpack Design",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center",
    description: "Minimalist backpack design concept",
    year: "2002"
  },
  {
    id: 6,
    title: "Data Visualization",
    category: "Data Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    description: "Interactive data graphs and analytics"
  },
  {
    id: 7,
    title: "Website Design",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
    description: "Clean blog layout with modern typography"
  }
];

export function PortfolioShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= portfolioItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Portfolio Grid */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              width: `${(portfolioItems.length / 3) * 100}%`
            }}
          >
            {portfolioItems.map((item, index) => (
              <div 
                key={item.id}
                className="flex-shrink-0 w-1/3 px-4"
                style={{ width: '33.333%' }}
              >
                <div className="group cursor-pointer">
                  {/* Pill-shaped container */}
                  <div className="relative overflow-hidden rounded-t-3xl rounded-b-none bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-[4/3] relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                            View Project
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content below image */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                        {item.year && (
                          <span className="text-sm text-gray-500">{item.year}</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(portfolioItems.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => setCurrentIndex(prev => prev > 0 ? prev - 1 : Math.ceil(portfolioItems.length / 3) - 1)}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black mb-2">Featured Work</h2>
            <p className="text-gray-600">A collection of my recent projects and creative work</p>
          </div>
          
          <button
            onClick={() => setCurrentIndex(prev => prev < Math.ceil(portfolioItems.length / 3) - 1 ? prev + 1 : 0)}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
