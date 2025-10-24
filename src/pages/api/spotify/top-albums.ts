import type { APIRoute } from 'astro';

interface SpotifyAlbum {
  id: string;
  name: string;
  artists: Array<{ name: string }>;
  external_urls: {
    spotify: string;
  };
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  release_date: string;
}

// Removed unused interface

// Get Spotify access token using client credentials
async function getSpotifyAccessToken(): Promise<string> {
  const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;
  
  if (!clientId || !clientSecret) {
    throw new Error('Spotify credentials not configured');
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    throw new Error(`Failed to get Spotify access token: ${response.statusText}`);
  }

  const data = await response.json();
  return data.access_token;
}

// Fetch user's top tracks (requires user authorization)
// For demo purposes, we'll use some curated albums
async function getCuratedAlbums(): Promise<SpotifyAlbum[]> {
  try {
    const accessToken = await getSpotifyAccessToken();
    
    // Fetch some popular albums as a fallback
    // In a real implementation, you'd use the user's actual top albums
    const albumIds = [
      '3hKlec1wgYVJcI0YvwCFJB', // Example album 1
      '1QZJzByKliJB2xyhgrYk4j', // Example album 2
      '3g4koxypokRF6kR3KA5F0P', // Example album 3
      '0U0Qv2jYtsgGxFDpQJKAxQ', // Example album 4
      '5QGv6b6i7tIOksucTpcUau', // Example album 5
    ];

    const albumPromises = albumIds.map(async (id) => {
      const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        return await response.json();
      }
      return null;
    });

    const albums = (await Promise.all(albumPromises)).filter(Boolean);
    return albums;
  } catch (error) {
    console.error('Error fetching Spotify albums:', error);
    
    // Return fallback albums if API fails
    return [
      {
        id: '3hKlec1wgYVJcI0YvwCFJB',
        name: 'Sample Album',
        artists: [{ name: 'Sample Artist' }],
        external_urls: { spotify: 'https://open.spotify.com/album/3hKlec1wgYVJcI0YvwCFJB' },
        images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273...', height: 640, width: 640 }],
        release_date: '2024-01-01'
      }
    ];
  }
}

export const GET: APIRoute = async () => {
  try {
    const albums = await getCuratedAlbums();
    
    return new Response(JSON.stringify({
      success: true,
      albums: albums
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Spotify API error:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to fetch Spotify data',
      albums: []
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
