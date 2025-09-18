"use client";

import Image from "next/image";
import { useState } from "react";

export function CollageSection() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  
  const handleMouseEnter = (group: string) => {
    setActiveGroup(group);
  };
  
  const handleMouseLeave = () => {
    setActiveGroup(null);
  };

  return (
    <section className="relative w-full h-[80vh] bg-[#f7f6f0] overflow-hidden">
      {/* Background Image - Left Side - Kathak 1 */}
      <div 
        className="absolute left-0 top-0 w-1/2 h-full overflow-hidden"
        onMouseEnter={() => handleMouseEnter('kathak')}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src="/kathak1.png"
          alt="Kathak Performance 1"
          fill
          className={`object-cover transition-all duration-500 ${activeGroup === 'kathak' ? 'grayscale-0' : 'grayscale'}`}
          style={{ objectPosition: 'left' }}
        />
      </div>
      
      {/* Top Right - IFT2 */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2 overflow-hidden"
        onMouseEnter={() => handleMouseEnter('ift')}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src="/ift2.png"
          alt="IFT Event"
          fill
          className={`object-cover transition-all duration-500 ${activeGroup === 'ift' ? 'grayscale-0' : 'grayscale'}`}
          style={{ objectPosition: 'center' }}
        />
      </div>
      
      {/* Bottom Left - IFT */}
      <div 
        className="absolute bottom-0 left-0 w-1/4 h-1/2 overflow-hidden"
        onMouseEnter={() => handleMouseEnter('ift')}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src="/ift.png"
          alt="IFT Event 2"
          fill
          className={`object-cover transition-all duration-500 ${activeGroup === 'ift' ? 'grayscale-0' : 'grayscale'}`}
          style={{ objectPosition: 'center' }}
        />
      </div>
      
      {/* Top Right of Bottom Right - Kathak 3 */}
      <div 
        className="absolute top-1/2 right-1/2 w-1/4 h-1/2 overflow-hidden"
        onMouseEnter={() => handleMouseEnter('kathak')}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src="/kathak3.png"
          alt="Kathak Performance 3"
          fill
          className={`object-cover transition-all duration-500 ${activeGroup === 'kathak' ? 'grayscale-0' : 'grayscale'}`}
          style={{ objectPosition: 'center' }}
        />
      </div>
      
      {/* Bottom Right - Leapcake */}
      <div 
        className="absolute bottom-0 right-0 w-1/4 h-1/2 overflow-hidden"
        onMouseEnter={() => handleMouseEnter('leapcake')}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src="/leapcake.png"
          alt="Leapcake Project"
          fill
          className={`object-cover transition-all duration-500 ${activeGroup === 'leapcake' ? 'grayscale-0' : 'grayscale'}`}
          style={{ objectPosition: 'center' }}
        />
      </div>
      
      {/* Center - Kathak 2 */}
      <div 
        className="absolute top-1/4 left-1/3 w-1/3 h-1/2 overflow-hidden"
        onMouseEnter={() => handleMouseEnter('kathak')}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src="/kathak2.png"
          alt="Kathak Performance 2"
          fill
          className={`object-cover transition-all duration-500 ${activeGroup === 'kathak' ? 'grayscale-0' : 'grayscale'}`}
          style={{ objectPosition: 'center' }}
        />
      </div>
    </section>
  );
}
