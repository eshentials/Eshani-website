"use client";

import Link from "next/link";

export function Navbar() {

  return (
    <nav className="bg-white sticky top-0 z-50 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newspaper Category Bar */}
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center space-x-4 text-sm font-serif">
            <Link href="/" className="relative group overflow-hidden">
              <span className="relative z-10">Home</span>
              <div className="absolute inset-y-4 left-0 right-0 bg-yellow-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            </Link>
            <span>•</span>
            <Link href="/projects" className="relative group overflow-hidden">
              <span className="relative z-10">Projects</span>
              <div className="absolute inset-y-4 left-0 right-0 bg-yellow-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            </Link>
            <span>•</span>
            <Link href="/blog" className="relative group overflow-hidden">
              <span className="relative z-10">Blog</span>
              <div className="absolute inset-y-4 left-0 right-0 bg-yellow-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            </Link>
            <span>•</span>
            <Link href="/contact" className="relative group overflow-hidden">
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-y-4 left-0 right-0 bg-yellow-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            </Link>
          </div>
          <div className="text-sm font-serif font-bold">FREE</div>
        </div>
      </div>
    </nav>
  );
}
