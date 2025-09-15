// Simple file-based storage for LinkedIn posts
// In production, you would use a proper database

import fs from 'fs';
import path from 'path';

export interface LinkedInPost {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  url: string;
  image?: string;
  category: string;
  source: string;
  createdAt: string;
}

const DATA_FILE = path.join(process.cwd(), 'data', 'linkedin-posts.json');

// Ensure data directory exists
const ensureDataDir = () => {
  const dataDir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Read LinkedIn posts from file
export const getLinkedInPosts = (): LinkedInPost[] => {
  try {
    ensureDataDir();
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading LinkedIn posts:', error);
    return [];
  }
};

// Save LinkedIn posts to file
export const saveLinkedInPosts = (posts: LinkedInPost[]): void => {
  try {
    ensureDataDir();
    fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2));
  } catch (error) {
    console.error('Error saving LinkedIn posts:', error);
  }
};

// Add a new LinkedIn post
export const addLinkedInPost = (postData: Partial<LinkedInPost>): LinkedInPost => {
  const posts = getLinkedInPosts();
  const newPost: LinkedInPost = {
    id: postData.id || `linkedin-${Date.now()}`,
    title: postData.title || 'LinkedIn Post',
    content: postData.content || '',
    publishedAt: postData.publishedAt || new Date().toISOString(),
    url: postData.url || '',
    image: postData.image,
    category: postData.category || 'LinkedIn',
    source: postData.source || 'linkedin',
    createdAt: new Date().toISOString()
  };
  
  posts.unshift(newPost); // Add to beginning of array
  saveLinkedInPosts(posts);
  return newPost;
};

// Update LinkedIn post
export const updateLinkedInPost = (id: string, updates: Partial<LinkedInPost>): LinkedInPost | null => {
  const posts = getLinkedInPosts();
  const index = posts.findIndex(post => post.id === id);
  
  if (index === -1) {
    return null;
  }
  
  posts[index] = { ...posts[index], ...updates };
  saveLinkedInPosts(posts);
  return posts[index];
};

// Delete LinkedIn post
export const deleteLinkedInPost = (id: string): boolean => {
  const posts = getLinkedInPosts();
  const filteredPosts = posts.filter(post => post.id !== id);
  
  if (filteredPosts.length === posts.length) {
    return false; // Post not found
  }
  
  saveLinkedInPosts(filteredPosts);
  return true;
};
