"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Calendar, Clock, ArrowRight, BookOpen, Heart, Code, Cake, PawPrint } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  image: string;
  url: string;
  featured?: boolean;
}

interface MediumRSSItem {
  guid: string;
  title: string;
  description: string;
  content: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
  categories?: string[];
}

// Medium RSS feed URL
const MEDIUM_RSS_URL = "https://medium.com/@eshani.parulekar";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Kathak":
      return <Heart className="w-4 h-4" />;
    case "Baker":
      return <Cake className="w-4 h-4" />;
    case "Enthusiastic Reader":
      return <BookOpen className="w-4 h-4" />;
    case "Dog Mom":
      return <PawPrint className="w-4 h-4" />;
    case "Techie":
      return <Code className="w-4 h-4" />;
    default:
      return <BookOpen className="w-4 h-4" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Kathak":
      return "bg-red-100 text-red-800 border-red-200";
    case "Baker":
      return "bg-amber-100 text-amber-800 border-amber-200";
    case "Enthusiastic Reader":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "Dog Mom":
      return "bg-green-100 text-green-800 border-green-200";
    case "Techie":
      return "bg-purple-100 text-purple-800 border-purple-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

// Helper function to clean HTML content and create readable excerpts
const createCleanExcerpt = (htmlContent: string, maxLength: number = 150): string => {
  if (!htmlContent) return "Read the full article on Medium...";
  
  // Remove HTML tags
  const cleanText = htmlContent.replace(/<[^>]*>/g, '');
  
  // Remove extra whitespace and normalize
  const normalizedText = cleanText.replace(/\s+/g, ' ').trim();
  
  // Truncate to max length and add ellipsis if needed
  if (normalizedText.length <= maxLength) {
    return normalizedText;
  }
  
  // Find the last complete word within the limit
  const truncated = normalizedText.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  
  if (lastSpaceIndex > 0) {
    return truncated.substring(0, lastSpaceIndex).trim() + "...";
  }
  
  return truncated + "...";
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Kathak", "Baker", "Enthusiastic Reader", "Dog Mom", "Techie"];

  // Fetch Medium RSS feed
  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        setLoading(true);
        
        // Fetch Medium RSS feed
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_RSS_URL + '/feed')}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch Medium RSS feed');
        }
        
        const data = await response.json();
        
        if (data.status === 'ok' && data.items) {
          // Transform Medium RSS data to our BlogPost format
          const mediumPosts: BlogPost[] = data.items.map((item: MediumRSSItem, index: number) => {
            // Extract category from tags or default to "Techie"
            let category = "Techie";
            if (item.categories && item.categories.length > 0) {
              const firstTag = item.categories[0].toLowerCase();
              if (firstTag.includes('kathak') || firstTag.includes('dance')) {
                category = "Kathak";
              } else if (firstTag.includes('bake') || firstTag.includes('food') || firstTag.includes('recipe')) {
                category = "Baker";
              } else if (firstTag.includes('read') || firstTag.includes('book') || firstTag.includes('literature')) {
                category = "Enthusiastic Reader";
              } else if (firstTag.includes('dog') || firstTag.includes('pet') || firstTag.includes('animal')) {
                category = "Dog Mom";
              } else if (firstTag.includes('tech') || firstTag.includes('code') || firstTag.includes('development')) {
                category = "Techie";
              }
            }
            
            // Extract image from content or use default
            let image = "/next.svg"; // Default image
            if (item.thumbnail) {
              image = item.thumbnail;
            } else if (item.content) {
              // Try to extract image from content HTML
              const imgMatch = item.content.match(/<img[^>]+src="([^"]+)"/);
              if (imgMatch) {
                image = imgMatch[1];
              }
            }
            
            // Calculate read time (Medium typically provides this)
            const readTime = item.content ? `${Math.ceil(item.content.split(' ').length / 200)} min read` : "3 min read";
            
            // Create clean excerpt from HTML content
            const excerpt = createCleanExcerpt(item.content || item.description, 150);
            
            return {
              id: item.guid || `post-${index}`,
              title: item.title,
              category: category,
              excerpt: excerpt,
              publishedAt: item.pubDate,
              readTime: readTime,
              image: image,
              url: item.link,
              featured: index === 0 // First article is featured
            };
          });
          
          setPosts(mediumPosts);
        } else {
          throw new Error('Invalid RSS feed data');
        }
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
        // Fallback to empty posts array if RSS fetch fails
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Fine Print() Logo */}
            <div className="mb-8">
              <div className="inline-block bg-teal-800 px-8 py-6 rounded-2xl shadow-2xl">
                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-amber-50 drop-shadow-lg">
                  <span className="block">Fine</span>
                  <span className="block">Print()</span>
                </h1>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              My Medium Blog
            </h2>
            
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
              Thoughts, experiences, and insights from my journey as a developer, 
              dancer, reader, baker, and dog mom. Connecting the dots between 
              diverse passions and technology.
            </p>
            <div className="mt-8">
              <a 
                href={MEDIUM_RSS_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-red-900 px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Follow on Medium
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                disabled={loading}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Loading your blog posts from Medium...</p>
          </div>
        </section>
      )}

      {/* No Posts State */}
      {!loading && posts.length === 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Articles Found</h3>
            <p className="text-lg text-gray-600 mb-8">
              It looks like there are no articles available right now, or there might be an issue fetching from Medium.
            </p>
            <a 
              href={MEDIUM_RSS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Visit My Medium Profile
            </a>
          </div>
        </section>
      )}

      {/* Featured Article */}
      {!loading && featuredPost && (
        <section className="py-16 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="text-sm font-medium text-amber-800 uppercase tracking-wider">
                FEATURED ARTICLE
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-red-200 to-red-300 rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-center text-red-800">
                    <div className="w-32 h-32 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-4xl">📝</span>
                    </div>
                    <p className="text-2xl font-serif">Blog Post</p>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Content */}
              <div className="space-y-6">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(featuredPost.category)}`}>
                  {getCategoryIcon(featuredPost.category)}
                  <span className="ml-2">{featuredPost.category}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
                  {featuredPost.title}
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <a 
                  href={featuredPost.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-all duration-200"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      {!loading && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Larger Articles */}
              <div className="lg:col-span-2 space-y-8">
                {regularPosts.slice(0, 4).map((post) => (
                  <article key={post.id} className="group">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Image */}
                      <div className="relative">
                        <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                          <div className="text-center text-gray-600">
                            <div className="w-16 h-16 bg-gray-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <span className="text-white text-2xl">📄</span>
                            </div>
                            <p className="text-sm">Article</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-4">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(post.category)}`}>
                          {getCategoryIcon(post.category)}
                          <span className="ml-2">{post.category}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200 leading-tight">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <a 
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors duration-200"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Right Column - Compact Articles */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">More Articles</h3>
                {regularPosts.slice(4).map((post) => (
                  <article key={post.id} className="group">
                    <div className="flex space-x-4">
                      {/* Thumbnail */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                          <span className="text-gray-600 text-lg">📝</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)} mb-2`}>
                          {getCategoryIcon(post.category)}
                          <span className="ml-1">{post.category}</span>
                        </div>
                        
                        <h4 className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200 leading-tight mb-2">
                          {post.title}
                        </h4>
                        
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <a 
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-red-600 text-xs font-medium hover:text-red-700 transition-colors duration-200 mt-2"
                        >
                          Read Article
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Stay Updated with My Latest Thoughts
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get notified when I publish new articles about technology, creativity, 
            and the intersection of diverse passions with modern development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            No spam, just thoughtful content delivered to your inbox.
          </p>
        </div>
      </section>
    </main>
  );
}
