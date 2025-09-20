"use client";

import Link from "next/link";

export function Navbar() {
  const navLinks = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-[#f7f6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex flex-col items-center">
          {/* Top Line - Date and Price */}
          <div className="w-full flex justify-between items-center text-xs font-serif uppercase tracking-wider mb-2">
            <div>ISSUE, DECEMBER 2025</div>
            <div className="font-bold">FREE</div>
          </div>
          
          {/* Main Title with Navigation */}
          <div className="w-full flex items-center justify-center relative py-2">
            {/* Main Title */}
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-tight">
                <Link href="/" className="hover:opacity-90 transition-opacity">
                  ESHANI PARULEKAR
                </Link>
              </h1>
              <div className="text-sm md:text-base font-serif mt-1">
                Student, Developer, and Creative Problem Solver
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block absolute right-0">
              <ul className="flex flex-col space-y-0.5 text-right">
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
          
          {/* Mobile Navigation */}
          <nav className="md:hidden w-full mt-4">
            <ul className="flex flex-wrap justify-center space-x-6 text-sm">
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
