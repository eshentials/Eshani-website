"use client";

import { useState } from "react";

interface Word {
  text: string;
  category: string;
  positions: { row: number; col: number }[];
  direction: 'horizontal' | 'vertical' | 'diagonal';
}

// Word search puzzle data - traditional grid with words placed in various directions
const words: Word[] = [
  // Programming Languages
  { 
    text: "JAVASCRIPT", 
    category: "Programming Languages", 
    positions: [
      { row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }, { row: 0, col: 3 }, 
      { row: 0, col: 4 }, { row: 0, col: 5 }, { row: 0, col: 6 }, { row: 0, col: 7 }, 
      { row: 0, col: 8 }, { row: 0, col: 9 }
    ],
    direction: 'horizontal'
  },
  { 
    text: "PYTHON", 
    category: "Programming Languages", 
    positions: [
      { row: 4, col: 0 }, { row: 4, col: 1 }, { row: 4, col: 2 }, { row: 4, col: 3 }, 
      { row: 4, col: 4 }, { row: 4, col: 5 }
    ],
    direction: 'horizontal'
  },
  { 
    text: "GOLANG", 
    category: "Programming Languages", 
    positions: [
      { row: 6, col: 0 }, { row: 7, col: 0 }, { row: 8, col: 0 }, 
      { row: 9, col: 0 }, { row: 10, col: 0 }, { row: 11, col: 0 }, 
    ],
    direction: 'vertical'
  },
  
  // Frameworks & Libraries
  { 
    text: "NEXTJS", 
    category: "Frameworks & Libraries", 
    positions: [
      { row: 0, col: 10 }, { row: 1, col: 11 }, { row: 2, col: 12 }, { row: 3, col: 13 }, 
      { row: 4, col: 14 }, { row: 5, col: 15 }
    ],
    direction: 'diagonal'
  },
  { 
    text: "REACT", 
    category: "Frameworks & Libraries", 
    positions: [
      { row: 7, col: 10 }, { row: 7, col: 11 }, { row: 7, col: 12 }, { row: 7, col: 13 }, 
      { row: 7, col: 14 }
    ],
    direction: 'horizontal'
  },
  { 
    text: "TAILWIND", 
    category: "Frameworks & Libraries", 
    positions: [
      { row: 9, col: 10 }, { row: 10, col: 10 }, { row: 11, col: 10 }, { row: 12, col: 10 }, 
      { row: 13, col: 10 }, { row: 14, col: 10 }, { row: 15, col: 10 }
    ],
    direction: 'vertical'
  },
  { 
    text: "NODEJS", 
    category: "Frameworks & Libraries", 
    positions: [
      { row: 10, col: 1 }, { row: 11, col: 2 }, { row: 12, col: 3 }, { row: 13, col: 4}, { row: 14, col: 5 }, { row: 15, col: 6 },
    ],
    direction: 'diagonal'
  },
  
  // Certifications
  { 
    text: "CCNA", 
    category: "Certifications", 
    positions: [
      { row: 1, col: 16 }, { row: 1, col: 17 }, { row: 1, col: 18 }, { row: 1, col: 19 }
    ],
    direction: 'horizontal'
  },
  
  // Databases & Streaming
  { 
    text: "MONGODB", 
    category: "Databases & Streaming", 
    positions: [
      { row: 5, col: 5 }, { row: 5, col: 6 }, { row: 5, col: 7 }, { row: 5, col: 8 }, 
      { row: 5, col: 9 }, { row: 5, col: 10 }, { row: 5, col: 11 }
    ],
    direction: 'horizontal'
  },
  { 
    text: "KAFKA", 
    category: "Databases & Streaming", 
    positions: [
      { row: 8, col: 5 }, { row: 9, col: 5 }, { row: 10, col: 5 }, { row: 11, col: 5 }, 
      { row: 12, col: 5 }
    ],
    direction: 'vertical'
  },
  
  // DevOps & Monitoring
  { 
    text: "AWS", 
    category: "DevOps & Monitoring", 
    positions: [
      { row: 3, col: 16 }, { row: 3, col: 17 }, { row: 3, col: 18 }
    ],
    direction: 'horizontal'
  },
  
  { 
    text: "KALI", 
    category: "Cybersecurity & Networking", 
    positions: [
      { row: 11, col: 19 }, { row: 12, col: 19 }, { row: 13, col: 19 }, { row: 14, col: 19 }
    ],
    direction: 'vertical'
  }
  
];

const categories = [
  "Programming Languages",
  "Frameworks & Libraries", 
  "Certifications",
  "Databases & Streaming",
  "DevOps & Monitoring",
  "Cybersecurity & Networking"
];

// Create a 16x20 grid filled with random letters - using fixed seed for consistency
const createGrid = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const grid: string[][] = [];
  
  // Initialize empty grid
  for (let row = 0; row < 16; row++) {
    grid[row] = [];
    for (let col = 0; col < 20; col++) {
      grid[row][col] = '';
    }
  }
  
  // Place the words in the grid first - ensure they don't get overwritten
  words.forEach(word => {
    word.positions.forEach((pos, index) => {
      if (pos.row < 16 && pos.col < 20 && index < word.text.length) {
        grid[pos.row][pos.col] = word.text[index];
      }
    });
  });
  
  // Fill remaining empty spaces with deterministic letters based on position
  for (let row = 0; row < 16; row++) {
    for (let col = 0; col < 20; col++) {
      if (grid[row][col] === '') {
        // Use position-based seed for consistent random letters
        const seed = (row * 20 + col) % letters.length;
        grid[row][col] = letters[seed];
      }
    }
  }
  
  return grid;
};

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [grid] = useState(() => createGrid());

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleCategoryHover = (category: string | null) => {
    setHoveredCategory(category);
  };

  const isPositionHighlighted = (row: number, col: number) => {
    const activeCategory = selectedCategory || hoveredCategory;
    if (!activeCategory) return false;
    
    // Check if this position is part of any word in the active category
    for (const word of words) {
      if (word.category === activeCategory) {
        for (const pos of word.positions) {
          if (pos.row === row && pos.col === col) {
            return true;
          }
        }
      }
    }
    return false;
  };


  return (
    <section className="py-20" style={{backgroundColor: '#f7f6f0'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-serif">SKILLS</h2>
          <div className="w-16 h-1 bg-black mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif">
            Click on the clues below to <span className="bg-yellow-300 px-1">highlight</span> related skills in the puzzle
          </p>
        </div>

        {/* Category Clues */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-black mb-6 text-center font-serif">CLUES</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                onMouseEnter={() => handleCategoryHover(category)}
                onMouseLeave={() => handleCategoryHover(null)}
                className="group relative p-4 text-left transition-all duration-300 font-serif overflow-hidden"
              >
                <div className="text-sm font-bold mb-1 relative z-10">{index + 1}.</div>
                <div className="text-sm relative z-10">{category}</div>
                <div className="absolute inset-y-4 left-0 right-0 bg-yellow-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                {selectedCategory === category && (
                  <div className="absolute inset-y-4 left-0 right-0 bg-yellow-200 transform translate-x-0 transition-transform duration-500 ease-out"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Word Search Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border-2 border-black p-6">
            <div className="grid gap-0" style={{ gridTemplateColumns: 'repeat(20, 1fr)' }}>
              {grid.map((row, rowIndex) =>
                row.map((letter, colIndex) => {
                  const isHighlighted = isPositionHighlighted(rowIndex, colIndex);
                  return (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className={`w-6 h-6 flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                        isHighlighted
                          ? "bg-yellow-200 text-black"
                          : "bg-white text-black"
                      }`}
                    >
                      {letter}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 text-center">
          <div className="bg-gray-100 p-6 border border-black max-w-2xl mx-auto">
            <h4 className="text-lg font-bold text-black mb-2 font-serif">HOW TO PLAY</h4>
            <p className="text-sm text-gray-700 font-serif">
              Click on any clue above to <span className="bg-yellow-300 px-1">highlight</span> all related skills in the word search puzzle. 
              Words can be found horizontally, vertically, or diagonally.
            </p>
            {selectedCategory && (
              <p className="text-sm text-black font-bold mt-2 font-serif">
                Currently highlighting: {selectedCategory}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
