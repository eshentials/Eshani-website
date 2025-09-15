# LinkedIn Posts Integration Setup

This setup allows your LinkedIn posts to automatically appear in your blog through a Zapier webhook integration.

## How It Works

1. **Zapier Webhook**: Your Zapier hook at `https://hooks.zapier.com/hooks/catch/24610132/umhbt06/` automatically sends LinkedIn posts to your website
2. **API Endpoint**: The webhook data is received at `/api/linkedin-webhook`
3. **Storage**: Posts are stored in a JSON file (`data/linkedin-posts.json`)
4. **Display**: Posts appear in the blog's "Additional Articles Section"

## Setup Instructions

### 1. Configure Zapier Webhook

In your Zapier automation:
- **Trigger**: LinkedIn post published
- **Action**: Webhook POST
- **URL**: `https://yourdomain.com/api/linkedin-webhook`
- **Method**: POST
- **Data**: Send the following fields:
  ```json
  {
    "id": "{{post_id}}",
    "title": "{{post_title}}",
    "content": "{{post_content}}",
    "publishedAt": "{{post_published_date}}",
    "url": "{{post_url}}",
    "image": "{{post_image_url}}"
  }
  ```

### 2. Test the Integration

You can test the webhook locally:

```bash
# Start your development server
npm run dev

# In another terminal, run the test script
node test-webhook.js
```

### 3. Verify Posts Appear

1. Visit your blog page: `http://localhost:3000/blog`
2. Scroll down to the "Additional Articles Section"
3. You should see your LinkedIn posts displayed

## API Endpoints

### POST `/api/linkedin-webhook`
Receives LinkedIn posts from Zapier webhook.

**Request Body:**
```json
{
  "id": "linkedin-123",
  "title": "Post Title",
  "content": "Post content...",
  "publishedAt": "2024-01-01T00:00:00Z",
  "url": "https://linkedin.com/posts/...",
  "image": "https://example.com/image.jpg"
}
```

**Response:**
```json
{
  "success": true,
  "message": "LinkedIn post received and saved successfully",
  "data": { /* saved post data */ }
}
```

### GET `/api/linkedin-posts`
Fetches all stored LinkedIn posts.

**Response:**
```json
{
  "success": true,
  "posts": [ /* array of posts */ ],
  "count": 5
}
```

## File Structure

```
src/
├── app/
│   ├── api/
│   │   ├── linkedin-webhook/
│   │   │   └── route.ts          # Webhook endpoint
│   │   └── linkedin-posts/
│   │       └── route.ts          # Fetch posts endpoint
│   └── blog/
│       └── page.tsx              # Blog page with LinkedIn integration
├── components/
│   └── ui/
│       └── linkedin-posts.tsx    # LinkedIn posts component
└── lib/
    └── linkedin-posts.ts         # Data storage utilities

data/
└── linkedin-posts.json           # Stored posts (auto-created)
```

## Customization

### Styling
The LinkedIn posts component uses the same newspaper theme as your blog. You can customize the styling in `src/components/ui/linkedin-posts.tsx`.

### Data Fields
You can modify which fields are captured from LinkedIn by updating the webhook handler in `src/app/api/linkedin-webhook/route.ts`.

### Storage
Currently using file-based storage. For production, consider upgrading to:
- Supabase
- MongoDB
- PostgreSQL
- Any other database

## Troubleshooting

### Posts Not Appearing
1. Check browser console for errors
2. Verify webhook is receiving data: `GET /api/linkedin-webhook`
3. Check if `data/linkedin-posts.json` is being created
4. Ensure Zapier webhook is configured correctly

### Webhook Not Working
1. Test locally with `node test-webhook.js`
2. Check server logs for webhook errors
3. Verify Zapier webhook URL is correct
4. Ensure your domain is accessible from Zapier

## Production Deployment

1. Deploy your website to your hosting platform
2. Update Zapier webhook URL to your production domain
3. Ensure the `data` directory is writable on your server
4. Consider upgrading to a proper database for better performance

## Security Considerations

- The webhook endpoint is currently open - consider adding authentication
- Validate incoming data to prevent malicious content
- Implement rate limiting to prevent spam
- Sanitize HTML content before storing
