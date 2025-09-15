"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t-2 border-black py-8" style={{backgroundColor: '#f7f6f0'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newspaper Footer Header */}
        <div className="text-center mb-6">
          <div className="w-full h-px bg-black mb-2"></div>
          <h3 className="text-2xl font-bold text-black font-serif uppercase tracking-wider relative group overflow-hidden inline-block">
            <span className="relative z-10">CONNECT & NAVIGATE</span>
            <div className="absolute inset-y-2 left-0 right-0 bg-yellow-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
          </h3>
          <div className="w-full h-px bg-black mb-4"></div>
        </div>

        {/* Quick Links and Social Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-black font-serif uppercase border-b border-black pb-2 relative group overflow-hidden inline-block">
              <span className="relative z-10">QUICK LINKS</span>
              <div className="absolute inset-y-1 left-0 right-0 bg-yellow-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </h4>
            <div className="space-y-3 text-sm font-serif">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black mr-3"></div>
                <Link href="/" className="relative group overflow-hidden text-black">
                  <span className="relative z-10">
                    <span className="font-bold">HOME</span> - Portfolio Overview
                  </span>
                  <div className="absolute inset-y-4 left-0 right-0 bg-yellow-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                </Link>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black mr-3"></div>
                <Link href="/projects" className="relative group overflow-hidden text-black">
                  <span className="relative z-10">
                    <span className="font-bold">PROJECTS</span> - Featured Work
                  </span>
                  <div className="absolute inset-y-4 left-0 right-0 bg-yellow-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                </Link>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black mr-3"></div>
                <Link href="/blog" className="relative group overflow-hidden text-black">
                  <span className="relative z-10">
                    <span className="font-bold">BLOG</span> - Latest Articles
                  </span>
                  <div className="absolute inset-y-4 left-0 right-0 bg-yellow-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                </Link>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black mr-3"></div>
                <Link href="/contact" className="relative group overflow-hidden text-black">
                  <span className="relative z-10">
                    <span className="font-bold">CONTACT ME</span> - Get In Touch
                  </span>
                  <div className="absolute inset-y-4 left-0 right-0 bg-yellow-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                </Link>
              </div>
            </div>
          </div>

          {/* Connect With Me */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-black font-serif uppercase border-b border-black pb-2 relative group overflow-hidden inline-block">
              <span className="relative z-10">CONNECT WITH ME</span>
              <div className="absolute inset-y-1 left-0 right-0 bg-yellow-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </h4>
            <div className="space-y-3 text-sm font-serif">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black mr-3"></div>
                <a 
                  href="https://github.com/eshentials" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden text-black"
                >
                  <span className="relative z-10">
                    <span className="font-bold">GITHUB</span>
                  </span>
                  <div className="absolute inset-y-4 left-0 right-0 bg-yellow-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black mr-3"></div>
                <a 
                  href="https://www.linkedin.com/in/eshaniparulekar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden text-black"
                >
                  <span className="relative z-10">
                    <span className="font-bold">LINKEDIN</span>
                  </span>
                  <div className="absolute inset-y-4 left-0 right-0 bg-yellow-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                </a>
              </div>               
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black mr-3"></div>
                <span className="text-gray-700">
                  <span className="font-bold">RESUME</span>
                </span>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm font-serif text-black">
                <span className="font-bold">PUBLISHER:</span> Eshani Parulekar
              </p>
              <p className="text-sm font-serif text-gray-700">
                <span className="font-bold">ESTABLISHED:</span> 2024
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm font-serif text-black">
                <span className="font-bold">CONTACT:</span> contact@eshani.dev
              </p>
              <p className="text-sm font-serif text-gray-700">
                <span className="font-bold">WEBSITE:</span> www.eshani.dev
              </p>
            </div>
          </div>
        </div>

        {/* Final Notice */}
        <div className="mt-6 text-center">
          <p className="text-base font-serif font-bold text-black">
            ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}