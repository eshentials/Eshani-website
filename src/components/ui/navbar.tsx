"use client";

import Link from "next/link";

export function Navbar() {

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-black" style={{backgroundColor: '#f7f6f0'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newspaper Category Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-2 gap-2 sm:gap-0">
          <div className="flex flex-wrap items-center justify-center sm:justify-start space-x-2 sm:space-x-4 text-xs sm:text-sm font-serif">
            <Link href="/" className="relative group overflow-hidden px-2 py-1">
              <span className="relative z-10">Home</span>
              <div className="absolute inset-y-1 left-0 right-0 bg-yellow-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/projects" className="relative group overflow-hidden px-2 py-1">
              <span className="relative z-10">Projects</span>
              <div className="absolute inset-y-1 left-0 right-0 bg-yellow-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/blog" className="relative group overflow-hidden px-2 py-1">
              <span className="relative z-10">Blog</span>
              <div className="absolute inset-y-1 left-0 right-0 bg-yellow-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/contact" className="relative group overflow-hidden px-2 py-1">
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-y-1 left-0 right-0 bg-yellow-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </Link>
          </div>
          <div className="text-xs sm:text-sm font-serif font-bold">FREE</div>
        </div>
      </div>
    </nav>
  );
}
