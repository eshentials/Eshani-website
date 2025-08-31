import { Calendar, Clock, Star, TrendingUp, Mail, Phone, MapPin } from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-full lg:w-80 space-y-6">
      {/* Quick Stats */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Stats</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-gray-700">Projects Completed</span>
            </div>
            <span className="text-2xl font-bold text-blue-600">50+</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-gray-700">Hours Worked</span>
            </div>
            <span className="text-2xl font-bold text-green-600">2000+</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Star className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-gray-700">Client Rating</span>
            </div>
            <span className="text-2xl font-bold text-purple-600">4.9</span>
          </div>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Projects</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EP</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">E-commerce Platform</h4>
              <p className="text-sm text-gray-600">React, Node.js, MongoDB</p>
              <div className="flex items-center space-x-2 mt-1">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">2 weeks ago</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MA</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">Mobile App</h4>
              <p className="text-sm text-gray-600">React Native, Firebase</p>
              <div className="flex items-center space-x-2 mt-1">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">1 month ago</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DW</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">Dashboard Widget</h4>
              <p className="text-sm text-gray-600">Vue.js, D3.js, Express</p>
              <div className="flex items-center space-x-2 mt-1">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">2 months ago</span>
              </div>
            </div>
          </div>
        </div>
        
        <a 
          href="/projects" 
          className="block text-center mt-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
        >
          View All Projects →
        </a>
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Get In Touch</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-semibold text-gray-900">hello@eshani.dev</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Phone className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="font-semibold text-gray-900">+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <MapPin className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Location</p>
              <p className="font-semibold text-gray-900">San Francisco, CA</p>
            </div>
          </div>
        </div>
        
        <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
          Send Message
        </button>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Stay Updated</h3>
        <p className="text-gray-600 mb-4 text-sm">
          Get the latest insights and project updates delivered to your inbox.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
