"use client";

import Link from "next/link";

export function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newspaper Header */}
        <div className="py-4 border-b border-black flex flex-col items-center">
          {/* Top Line - Date and Price */}
          <div className="w-full flex justify-between items-center text-xs font-serif uppercase tracking-wider mb-2">
            <div>ISSUE, DECEMBER 2025</div>
            <div className="font-bold">FREE</div>
          </div>
          
          {/* Main Title with Side Navigation */}
          <div className="w-full flex items-center justify-between py-2">
            {/* Left Navigation */}
            <nav className="hidden md:block w-1/4">
              <ul className="space-y-1 text-right pr-4">
                <li className="hover:underline">
                  <Link href="/projects" className="font-serif">PROJECTS</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/blog" className="font-serif">BLOG</Link>
                </li>
              </ul>
            </nav>
            
            {/* Main Title */}
            <div className="text-center flex-grow">
              <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-tight">
                <Link href="/" className="hover:opacity-90 transition-opacity">
                  ESHANI PARULEKAR
                </Link>
              </h1>
              <div className="text-sm md:text-base font-serif mt-1">
                Student, Developer, and Creative Problem Solver
              </div>
            </div>
            
            {/* Right Navigation */}
            <nav className="hidden md:block w-1/4">
              <ul className="space-y-1 text-left pl-4">
                <li className="hover:underline">
                  <Link href="/contact" className="font-serif">CONTACT</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/about" className="font-serif">ABOUT</Link>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Mobile Navigation */}
          <nav className="md:hidden w-full mt-4">
            <ul className="flex justify-center space-x-6 text-sm">
              {navLinks.map((link) => (
                <li key={link.name} className="hover:underline">
                  <Link href={link.href} className="font-serif">
                    {link.name.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
