"use client";

import { useState, useEffect } from "react";
import { ExternalLink, BookOpen } from "lucide-react";
import { Footer } from "@/components/ui/footer";

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

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <main style={{backgroundColor: '#f7f6f0'}}>
      {/* Newspaper Header */}
      <section className="py-8 border-b-2 border-black" style={{backgroundColor: '#f7f6f0'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm font-serif uppercase tracking-wider">ISSUE, DECEMBER</div>
            <div className="text-sm font-serif uppercase tracking-wider">BLOG</div>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-black text-center mb-4">
            BLOG
          </h1>
          <div className="border-t border-black"></div>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <section className="py-20" style={{backgroundColor: '#f7f6f0'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-black mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Loading your blog posts from Medium...</p>
          </div>
        </section>
      )}

      {/* No Posts State */}
      {!loading && posts.length === 0 && (
        <section className="py-20" style={{backgroundColor: '#f7f6f0'}}>
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
              className="inline-flex items-center bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Visit My Medium Profile
            </a>
          </div>
        </section>
      )}

      {/* Featured Article */}
      {!loading && featuredPost && (
        <section className="py-12" style={{backgroundColor: '#f7f6f0'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Content */}
              <div className="space-y-6">
                <div className="text-sm font-serif text-gray-600">
                  {new Date(featuredPost.publishedAt).toLocaleDateString()}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-black leading-tight">
                  &ldquo;{featuredPost.title}&rdquo;
                </h2>
                <p className="text-lg font-serif text-black leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>BY ESHANI PARULEKAR</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <a 
                  href={featuredPost.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black font-serif text-sm hover:underline"
                >
                  Read more &gt;
                </a>
              </div>
              
              {/* Right Column - Image */}
              <div className="relative">
                <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-gray-400 mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-2xl">📝</span>
                    </div>
                    <p className="text-sm font-serif">Featured Article</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      {!loading && posts.length > 0 && (
        <section className="py-12" style={{backgroundColor: '#f7f6f0'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-black pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.slice(0, 6).map((post) => (
                  <article key={post.id} className="group">
                    <div className="space-y-4">
                      {/* Image */}
                      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <div className="w-12 h-12 bg-gray-400 mx-auto mb-2 flex items-center justify-center">
                            <span className="text-white text-lg">📄</span>
                          </div>
                          <p className="text-xs font-serif">Article</p>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-3">
                        <div className="text-xs font-serif text-gray-600">
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                        <h3 className="text-lg font-serif font-bold text-black leading-tight group-hover:underline">
                          &ldquo;{post.title}&rdquo;
                        </h3>
                        <p className="text-sm font-serif text-black leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                          <span>{post.category}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <a 
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-black text-xs font-serif hover:underline"
                        >
                          Read more &gt;
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

      {/* Additional Articles Section */}
      {!loading && posts.length > 0 && (
        <section className="py-12" style={{backgroundColor: '#f7f6f0'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-black pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="w-full h-32 bg-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-8 h-8 bg-gray-400 mx-auto mb-1 flex items-center justify-center">
                        <span className="text-white text-sm">📝</span>
                      </div>
                      <p className="text-xs font-serif">Article</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-black uppercase">
                    ADD TITLE HERE
                  </h3>
                  <p className="text-sm font-serif text-black leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  </p>
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                  <h3 className="text-xl font-serif font-bold text-black uppercase">
                    ADD TITLE HERE
                  </h3>
                  <p className="text-sm font-serif text-black leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  </p>
                  <div className="w-full h-32 bg-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-8 h-8 bg-gray-400 mx-auto mb-1 flex items-center justify-center">
                        <span className="text-white text-sm">📝</span>
                      </div>
                      <p className="text-xs font-serif">Article</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
}
