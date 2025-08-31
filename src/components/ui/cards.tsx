import { Star, Quote } from "lucide-react";

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  testimonial: string;
  project: string;
}

const testimonialItems: TestimonialItem[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechFlow Solutions",
    avatar: "SJ",
    rating: 5,
    testimonial: "Eshani delivered an exceptional e-commerce platform that exceeded our expectations. Her attention to detail and technical expertise made the entire development process smooth and efficient.",
    project: "E-commerce Platform"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    avatar: "MC",
    rating: 5,
    testimonial: "Working with Eshani was a game-changer for our startup. She built a robust mobile app that our users love, and her communication throughout the project was outstanding.",
    project: "Mobile App Development"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Design Director",
    company: "Creative Studios",
    avatar: "ER",
    rating: 5,
    testimonial: "Eshani's UI/UX design skills are top-notch. She transformed our vision into a beautiful, intuitive interface that significantly improved user engagement metrics.",
    project: "UI/UX Redesign"
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO",
    company: "DataTech Inc",
    avatar: "DK",
    rating: 5,
    testimonial: "The cloud infrastructure Eshani designed for us is incredibly scalable and reliable. Her technical knowledge and problem-solving abilities are exceptional.",
    project: "Cloud Architecture"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Marketing Manager",
    company: "Growth Marketing",
    avatar: "LT",
    rating: 5,
    testimonial: "Eshani's performance optimization work on our website resulted in a 40% improvement in load times. Our conversion rates have never been better!",
    project: "Performance Optimization"
  },
  {
    id: 6,
    name: "Alex Patel",
    role: "Founder",
    company: "InnovateLab",
    avatar: "AP",
    rating: 5,
    testimonial: "From concept to deployment, Eshani handled our full-stack project with professionalism and skill. She's not just a developer, she's a true partner in our success.",
    project: "Full-Stack Application"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about 
            working together and the results we've achieved.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialItems.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">
                "{testimonial.testimonial}"
              </p>

              {/* Project Type */}
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {testimonial.project}
                </span>
              </div>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's work together to bring your ideas to life and create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors transform hover:scale-105">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
