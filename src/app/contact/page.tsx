"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Footer } from "@/components/ui/footer";
import Link from "next/link";

export default function ContactPage() {
  const navLinks = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    linkedin: "",
    number: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual email service)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "", linkedin: "", number: "" });
    }, 3000);
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f7f6f0" }}>
      {/* Contact Header with Navigation */}
      <header className="bg-[#f7f6f0] border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 border-b border-black flex flex-col items-center">
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
                    CONTACT
                  </Link>
                </h1>
                <div className="text-sm md:text-base font-serif mt-1">
                  Get In Touch
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
      <div className="flex-grow">

      {/* Help Wanted Advertisement - Traditional Newspaper Style */}
      <section className="py-12" style={{ backgroundColor: "#f7f6f0" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative border-2 border-black"
            style={{ backgroundColor: "#f7f6f0" }}
          >
            {/* Thumbtack */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-red-800"></div>
            </div>

            {/* Decorative Stars */}
            <div className="absolute top-4 left-8">
              <div className="w-3 h-3 bg-black transform rotate-45"></div>
            </div>
            <div className="absolute top-4 right-8">
              <div className="w-3 h-3 bg-black transform rotate-45"></div>
            </div>

            {/* Main Content */}
            <div className="p-8" style={{ backgroundColor: "#f7f6f0" }}>
              {/* Help Wanted Header */}
              <div className="text-center mb-8">
                <div className="bg-black text-white px-8 py-4 inline-block mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold font-serif">Working On Something Awesome?</h2>
                </div>
              </div>

              {/* Job Description in Newspaper Style */}
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 font-serif">
                    Reach out and we can collaborate!!!
                  </h3>
                </div>

                {/* Contact Form - Styled as Application */}
                <div
                  className="border-2 border-black p-6"
                  style={{ backgroundColor: "#f7f6f0" }}
                >
                  <h4 className="text-2xl font-bold text-black mb-6 text-center font-serif">
                    YOUR DETAILS
                  </h4>

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h5 className="text-xl font-bold text-black mb-2 font-serif">
                        APPLICATION RECEIVED!
                      </h5>
                      <p className="text-gray-700 font-serif">
                        Thank you for your interest. I&apos;ll get back to you
                        within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-black mb-2 font-serif">
                            YOUR NAME *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-black bg-white text-black focus:outline-none font-serif"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-black mb-2 font-serif">
                            EMAIL ADDRESS *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-black bg-white text-black focus:outline-none font-serif"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                          <label className="block text-sm font-bold text-black mb-2 font-serif">
                            LINKEDIN ID *
                          </label>
                          <input
                            type="linkedin"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-black bg-white text-black focus:outline-none font-serif"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-black mb-2 font-serif">
                            PHONE NUMBER
                          </label>
                          <input
                            type="number"
                            name="number"
                            value={formData.number}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-black bg-white text-black focus:outline-none font-serif"
                            placeholder="+1 (your phone number)"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-black mb-2 font-serif">
                          GITHUB ID *
                        </label>
                        <input
                          type="url"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-black bg-white text-black focus:outline-none font-serif"
                          placeholder="www.github.com/yourusername"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-black mb-2 font-serif">
                          PROJECT DESCRIPTION *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 border-2 border-black bg-white text-black focus:outline-none resize-none font-serif"
                          placeholder="Describe your project requirements, timeline, and budget..."
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-black text-white py-4 px-8 font-bold hover:bg-gray-800 transition-colors disabled:opacity-50 font-serif text-lg"
                        >
                          {isSubmitting
                            ? "SUBMITTING..."
                            : "SUBMIT APPLICATION"}
                        </button>
                        {/* <button
                          type="button"
                          onClick={handleWhatsApp}
                          disabled={!formData.email}
                          className="flex-1 bg-green-600 text-white py-4 px-8 font-bold hover:bg-green-700 transition-colors disabled:opacity-50 font-serif text-lg"
                        >
                          WHATSAPP
                        </button> */}
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </main>
  );
}
