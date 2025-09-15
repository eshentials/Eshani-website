import { NextRequest, NextResponse } from 'next/server';
import { addLinkedInPost } from '@/lib/linkedin-posts';

// This endpoint receives LinkedIn posts from Zapier webhook
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the incoming data for debugging
    console.log('LinkedIn webhook received:', body);
    
    // Extract data from Zapier webhook payload
    // The exact structure depends on how Zapier sends the data
    const postData = {
      id: body.id || body.guid || `linkedin-${Date.now()}`,
      title: body.title || body.headline || 'LinkedIn Post',
      content: body.content || body.text || body.description || '',
      publishedAt: body.publishedAt || body.pubDate || body.createdAt || new Date().toISOString(),
      url: body.url || body.link || body.permalink || '',
      image: body.image || body.thumbnail || body.media || '',
      category: 'LinkedIn',
      source: 'linkedin'
    };
    
    // Save the post to our storage
    const savedPost = addLinkedInPost(postData);
    
    console.log('LinkedIn post saved:', savedPost);
    
    return NextResponse.json({ 
      success: true, 
      message: 'LinkedIn post received and saved successfully',
      data: savedPost 
    });
  } catch (error) {
    console.error('Error processing LinkedIn webhook:', error);
    return NextResponse.json(
      { success: false, message: 'Error processing webhook' },
      { status: 500 }
    );
  }
}

// Handle GET requests (for testing)
export async function GET() {
  return NextResponse.json({ 
    message: 'LinkedIn webhook endpoint is active',
    timestamp: new Date().toISOString()
  });
}
