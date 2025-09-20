"use client";

import Image from "next/image";
import { useState } from "react";
import porData from "@/data/por.json";

export function CollageSection() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [hoveredPosition, setHoveredPosition] = useState<string | null>(null);
  
  const handleMouseEnter = (group: string, position?: string) => {
    setActiveGroup(group);
    if (position) setHoveredPosition(position);
  };
  
  const handleMouseLeave = () => {
    setActiveGroup(null);
    setHoveredPosition(null);
  };

  const positions = porData.positions;

  return (
    <section className="relative w-full h-[80vh] bg-[#f7f6f0] overflow-hidden">
      {/* Background Image - Left Side - Dance Club */}
      <div 
        className="absolute left-0 top-0 w-1/2 h-full overflow-hidden group cursor-pointer"
        onMouseEnter={() => handleMouseEnter('dance', 'dance-head')}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={`/${positions[0].images.mainHeader}`}
          alt={positions[0].title}
          fill
          className={`object-cover transition-all duration-500 ${activeGroup === 'dance' ? 'grayscale-0' : 'grayscale'}`}
          style={{ objectPosition: 'left' }}
        />
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300 ${hoveredPosition === 'dance-head' ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-white text-center p-6">
            <h3 className="text-xl font-bold mb-2">{positions[0].title}</h3>
            <p className="text-sm mb-2">{positions[0].organization}</p>
            <p className="text-xs opacity-80">{positions[0].duration}</p>
          </div>
        </div>
      </div>
      
      {/* Top Right - Owlett */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2 overflow-hidden group cursor-pointer"
        onMouseEnter={() => handleMouseEnter('owlett', 'owlett-cofounder')}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={`/${positions[2].images.image2}`}
          alt={positions[2].title}
          fill
          className={`object-cover transition-all duration-500 ${activeGroup === 'owlett' ? 'grayscale-0' : 'grayscale'}`}
          style={{ objectPosition: 'center' }}
        />
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300 ${hoveredPosition === 'owlett-cofounder' ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-white text-center p-4">
            <h3 className="text-lg font-bold mb-1">{positions[2].title}</h3>
            <p className="text-sm mb-1">{positions[2].organization}</p>
            <p className="text-xs opacity-80">{positions[2].impact?.content}</p>
          </div>
        </div>
      </div>
      
      {/* Bottom Left - Owlett Main */}
      <div 
        className="absolute bottom-0 left-0 w-1/4 h-1/2 overflow-hidden group cursor-pointer"
        onMouseEnter={() => handleMouseEnter('owlett', 'owlett-main')}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={`/${positions[2].images.mainHeader}`}
          alt={`${positions[2].title} Main`}
          fill
          className={`object-cover transition-all duration-500 ${activeGroup === 'owlett' ? 'grayscale-0' : 'grayscale'}`}
          style={{ objectPosition: 'center' }}
        />
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300 ${hoveredPosition === 'owlett-main' ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-white text-center p-2">
            <h3 className="text-sm font-bold mb-1">{positions[2].organization}</h3>
            <p className="text-xs opacity-80">{positions[2].impact?.recognition}</p>
          </div>
        </div>
      </div>
      
      {/* Top Right of Bottom Right - Dance Club 3 */}
      <div 
        className="absolute top-1/2 right-1/2 w-1/4 h-1/2 overflow-hidden group cursor-pointer"
        onMouseEnter={() => handleMouseEnter('dance', 'dance-event')}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={`/${positions[0].images.image3}`}
          alt={`${positions[0].title} Event`}
          fill
          className={`object-cover transition-all duration-500 ${activeGroup === 'dance' ? 'grayscale-0' : 'grayscale'}`}
          style={{ objectPosition: 'center' }}
        />
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300 ${hoveredPosition === 'dance-event' ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-white text-center p-2">
            <h3 className="text-sm font-bold mb-1">Traditional Day</h3>
            <p className="text-xs opacity-80">200+ attendees</p>
          </div>
        </div>
      </div>
      
      {/* Bottom Right - LEAP AI Club */}
      <div 
        className="absolute bottom-0 right-0 w-1/4 h-1/2 overflow-hidden group cursor-pointer"
        onMouseEnter={() => handleMouseEnter('leap', 'leap-member')}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={`/${positions[1].images.mainHeader}`}
          alt={positions[1].title}
          fill
          className={`object-cover transition-all duration-500 ${activeGroup === 'leap' ? 'grayscale-0' : 'grayscale'}`}
          style={{ objectPosition: 'center' }}
        />
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300 ${hoveredPosition === 'leap-member' ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-white text-center p-2">
            <h3 className="text-sm font-bold mb-1">{positions[1].organization}</h3>
            <p className="text-xs opacity-80">Web Dev & AI Projects</p>
          </div>
        </div>
      </div>
      
      {/* Center - Dance Club Performance */}
      <div 
        className="absolute top-1/4 left-1/3 w-1/3 h-1/2 overflow-hidden group cursor-pointer"
        onMouseEnter={() => handleMouseEnter('dance', 'dance-performance')}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={`/${positions[0].images.image2}`}
          alt={`${positions[0].title} Performance`}
          fill
          className={`object-cover transition-all duration-500 ${activeGroup === 'dance' ? 'grayscale-0' : 'grayscale'}`}
          style={{ objectPosition: 'center' }}
        />
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300 ${hoveredPosition === 'dance-performance' ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-white text-center p-4">
            <h3 className="text-lg font-bold mb-2">Classical Dance</h3>
            <p className="text-sm mb-1">Event Management</p>
            <p className="text-xs opacity-80">Cultural Programming</p>
          </div>
        </div>
      </div>
    </section>
  );
}
