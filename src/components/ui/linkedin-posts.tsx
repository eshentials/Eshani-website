"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Linkedin } from "lucide-react";

interface LinkedInPost {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  url: string;
  image?: string;
  category: string;
  source: string;
}

// Mock data for demonstration - in production, this would come from your database
const mockLinkedInPosts: LinkedInPost[] = [
  {
    id: "linkedin-1",
    title: "Excited to share my latest project!",
    content: "Just finished building a full-stack e-commerce platform using Next.js and Stripe. The project involved implementing user authentication, product catalog management, and secure payment processing. Really proud of how it turned out!",
    publishedAt: new Date().toISOString(),
    url: "https://linkedin.com/posts/eshaniparulekar",
    category: "LinkedIn",
    source: "linkedin"
  },
  {
    id: "linkedin-2", 
    title: "Reflecting on my internship experience",
    content: "Three months at EY flew by! Learned so much about automation, ML, and working in a professional environment. Grateful for the opportunity to work on real-world projects that impact business operations.",
    publishedAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    url: "https://linkedin.com/posts/eshaniparulekar",
    category: "LinkedIn",
    source: "linkedin"
  }
];

export function LinkedInPosts() {
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLinkedInPosts = async () => {
      try {
        setLoading(true);
        
        const response = await fetch('/api/linkedin-posts');
        const data = await response.json();
        
        if (data.success) {
          setPosts(data.posts);
        } else {
          // Fallback to mock data if API fails
          setPosts(mockLinkedInPosts);
        }
      } catch (error) {
        console.error('Error fetching LinkedIn posts:', error);
        // Fallback to mock data if API fails
        setPosts(mockLinkedInPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchLinkedInPosts();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
            <Linkedin className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-xl font-serif font-bold text-black uppercase">
            LINKEDIN POSTS
          </h3>
        </div>
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
            <Linkedin className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-xl font-serif font-bold text-black uppercase">
            LINKEDIN POSTS
          </h3>
        </div>
        <p className="text-sm font-serif text-gray-600">
          No LinkedIn posts available at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
          <Linkedin className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-xl font-serif font-bold text-black uppercase">
          LINKEDIN POSTS
        </h3>
      </div>
      
      <div className="space-y-6">
        {posts.map((post, index) => (
          <article key={post.id} className="group">
            <div className="space-y-4">
              {/* Post Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-xs font-serif text-gray-600 mb-2">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h4 className="text-lg font-serif font-bold text-black leading-tight mb-2">
                    {post.title}
                  </h4>
                </div>
                <div className="ml-4">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <Linkedin className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Post Content */}
              <div className="space-y-3">
                <p className="text-sm font-serif text-black leading-relaxed">
                  {post.content.length > 200 
                    ? `${post.content.substring(0, 200)}...` 
                    : post.content
                  }
                </p>
                
                {/* Post Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>LinkedIn</span>
                  </div>
                  
                  <a 
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 text-xs font-serif hover:underline group-hover:text-blue-800"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
