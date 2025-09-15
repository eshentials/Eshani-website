// Test script to simulate Zapier webhook calls
// Run this with: node test-webhook.js

const testLinkedInPost = {
  id: "linkedin-test-1",
  title: "Excited to share my latest project!",
  content: "Just finished building a full-stack e-commerce platform using Next.js and Stripe. The project involved implementing user authentication, product catalog management, and secure payment processing. Really proud of how it turned out! #webdevelopment #nextjs #stripe",
  publishedAt: new Date().toISOString(),
  url: "https://linkedin.com/posts/eshaniparulekar-test-post",
  image: "https://example.com/linkedin-post-image.jpg",
  category: "LinkedIn",
  source: "linkedin"
};

async function testWebhook() {
  try {
    const response = await fetch('http://localhost:3000/api/linkedin-webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testLinkedInPost)
    });
    
    const result = await response.json();
    console.log('Webhook test result:', result);
  } catch (error) {
    console.error('Error testing webhook:', error);
  }
}

// Run the test
testWebhook();
