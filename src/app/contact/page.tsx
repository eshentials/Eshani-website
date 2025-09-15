"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Footer } from "@/components/ui/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual email service)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleWhatsApp = () => {
    const message = `Hi Eshani! I'd like to connect with you. My email is: ${formData.email || '[Please provide your email]'}`;
    // Replace with your actual WhatsApp number (remove + and country code)
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="min-h-screen" style={{backgroundColor: '#f7f6f0'}}>
      {/* Newspaper Header */}
      <section className="py-8 border-b-2 border-black" style={{backgroundColor: '#f7f6f0'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm font-serif uppercase tracking-wider">ISSUE, DECEMBER</div>
            <div className="text-sm font-serif uppercase tracking-wider">HELP WANTED</div>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-black text-center mb-4">
            HELP WANTED
          </h1>
          <div className="border-t border-black"></div>
        </div>
      </section>

      {/* Help Wanted Advertisement - Traditional Newspaper Style */}
      <section className="py-12" style={{backgroundColor: '#f7f6f0'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border-2 border-black" style={{backgroundColor: '#f7f6f0'}}>
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
            <div className="p-8" style={{backgroundColor: '#f7f6f0'}}>
              {/* Help Wanted Header */}
              <div className="text-center mb-8">
                <div className="bg-black text-white px-8 py-4 inline-block mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold font-serif">HELP WANTED</h2>
                </div>
                <div className="w-full h-1 bg-black mb-4"></div>
                <p className="text-lg font-serif text-black font-bold">FULL-STACK DEVELOPER</p>
                <p className="text-sm font-serif text-gray-600">IMMEDIATE START AVAILABLE</p>
              </div>

              {/* Job Description in Newspaper Style */}
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 font-serif">
                    SEEKING FREELANCE OPPORTUNITIES
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 font-serif">
                    Experienced developer available for immediate projects
                  </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Left Column - Job Details */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-black font-serif border-b border-black pb-2">
                      POSITION DETAILS
                    </h4>
                    <div className="space-y-3 text-sm font-serif">
                      <p><span className="font-bold">TYPE:</span> Freelance/Contract</p>
                      <p><span className="font-bold">LOCATION:</span> Remote Available</p>
                      <p><span className="font-bold">DURATION:</span> Flexible</p>
                      <p><span className="font-bold">RATE:</span> Competitive</p>
                      <p><span className="font-bold">START DATE:</span> Immediate</p>
                    </div>
                  </div>

                  {/* Right Column - Requirements */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-black font-serif border-b border-black pb-2">
                      WHAT I OFFER
                    </h4>
                    <div className="space-y-2 text-sm font-serif">
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-black mr-3 mt-2 flex-shrink-0"></span>
                        <span>Modern web development (React, Next.js)</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-black mr-3 mt-2 flex-shrink-0"></span>
                        <span>Full-stack solutions with databases</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-black mr-3 mt-2 flex-shrink-0"></span>
                        <span>Cloud deployment and DevOps</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-black mr-3 mt-2 flex-shrink-0"></span>
                        <span>Mobile app development</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-black mr-3 mt-2 flex-shrink-0"></span>
                        <span>UI/UX design and implementation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-black mr-3 mt-2 flex-shrink-0"></span>
                        <span>24/7 communication and support</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form - Styled as Application */}
                <div className="border-2 border-black p-6" style={{backgroundColor: '#f7f6f0'}}>
                  <h4 className="text-2xl font-bold text-black mb-6 text-center font-serif">APPLY NOW</h4>
                  
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h5 className="text-xl font-bold text-black mb-2 font-serif">APPLICATION RECEIVED!</h5>
                      <p className="text-gray-700 font-serif">
                        Thank you for your interest. I&apos;ll get back to you within 24 hours.
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
                      
                      <div>
                        <label className="block text-sm font-bold text-black mb-2 font-serif">
                          PROJECT TYPE *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-black bg-white text-black focus:outline-none font-serif"
                          placeholder="Web Development, Mobile App, etc."
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
                          {isSubmitting ? "SUBMITTING..." : "SUBMIT APPLICATION"}
                        </button>
                        <button
                          type="button"
                          onClick={handleWhatsApp}
                          disabled={!formData.email}
                          className="flex-1 bg-green-600 text-white py-4 px-8 font-bold hover:bg-green-700 transition-colors disabled:opacity-50 font-serif text-lg"
                        >
                          WHATSAPP
                        </button>
                      </div>
                    </form>
                  )}
                </div>

                {/* Contact Information - Newspaper Style */}
                <div className="text-center space-y-4 border-t border-black pt-6">
                  <h4 className="text-lg font-bold text-black font-serif">CONTACT INFORMATION</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-serif">
                    <div>
                      <p className="font-bold">EMAIL</p>
                      <p>hello@eshani.dev</p>
                    </div>
                    <div>
                      <p className="font-bold">LINKEDIN</p>
                      <a href="https://www.linkedin.com/in/eshaniparulekar" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        /in/eshaniparulekar
                      </a>
                    </div>
                    <div>
                      <p className="font-bold">GITHUB</p>
                      <a href="https://github.com/eshentials" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">
                        /eshentials
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 font-serif">
                    Response time: Within 24 hours | Available for immediate start
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}