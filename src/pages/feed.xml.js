import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  try {
    const posts = await getCollection('blog');
    
    // Robust filtering and mapping with proper validation
    const rssItems = posts
      .filter(post => {
        // Ensure post has required data structure
        if (!post || !post.data) return false;
        
        // Must have either title or description
        const hasTitle = post.data.title && typeof post.data.title === 'string' && post.data.title.trim().length > 0;
        const hasDescription = post.data.description && typeof post.data.description === 'string' && post.data.description.trim().length > 0;
        
        return hasTitle || hasDescription;
      })
      .map(post => {
        const title = post.data.title && typeof post.data.title === 'string' ? post.data.title.trim() : null;
        const description = post.data.description && typeof post.data.description === 'string' ? post.data.description.trim() : null;
        
        // Create RSS item with proper validation
        const rssItem = {
          link: `/blog/${post.slug}/`,
          author: post.data.author && typeof post.data.author === 'string' ? post.data.author : 'John Wheeler'
        };
        
        // Add title if available
        if (title) {
          rssItem.title = title;
        }
        
        // Add description, with fallback to title if needed
        if (description) {
          rssItem.description = description;
        } else if (title) {
          rssItem.description = title;
        }
        
        // Handle pubDate with proper validation
        if (post.data.pubDate) {
          try {
            const date = new Date(post.data.pubDate);
            if (!isNaN(date.getTime())) {
              rssItem.pubDate = date;
            }
          } catch (e) {
            // If date parsing fails, don't include pubDate
            console.warn(`Invalid pubDate for post ${post.slug}:`, post.data.pubDate);
          }
        }
        
        return rssItem;
      })
      .filter(item => {
        // Final validation: ensure each item has title or description
        return item.title || item.description;
      });

    return rss({
      title: 'John Wheeler Production Blog',
      description: 'Insights on web development, SEO, and technology',
      site: context.site || 'https://www.johnwheelerproduction.com',
      items: rssItems,
      customData: `<language>en-us</language>`,
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    
    // Return minimal valid RSS feed on error
    return rss({
      title: 'John Wheeler Production Blog',
      description: 'Insights on web development, SEO, and technology',
      site: context.site || 'https://www.johnwheelerproduction.com',
      items: [],
      customData: `<language>en-us</language>`,
    });
  }
}