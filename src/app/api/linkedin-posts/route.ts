import { NextResponse } from 'next/server';
import { getLinkedInPosts } from '@/lib/linkedin-posts';

// This endpoint fetches LinkedIn posts for display
export async function GET() {
  try {
    const posts = getLinkedInPosts();
    
    return NextResponse.json({ 
      success: true, 
      posts: posts,
      count: posts.length 
    });
  } catch (error) {
    console.error('Error fetching LinkedIn posts:', error);
    return NextResponse.json(
      { success: false, message: 'Error fetching posts' },
      { status: 500 }
    );
  }
}
