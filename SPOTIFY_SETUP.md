# Spotify Integration Setup

This guide will help you set up the Spotify integration to display your actual listening habits on your portfolio.

## Prerequisites

1. A Spotify account
2. Access to Spotify for Developers

## Step 1: Create a Spotify App

1. Go to [Spotify for Developers](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account
3. Click "Create an App"
4. Fill in the app details:
   - **App name**: `Your Portfolio Music`
   - **App description**: `Portfolio website music integration`
   - **Website**: Your portfolio URL (e.g., `https://[yourportfolioname].com`)
   - **Redirect URI**: `http://127.0.0.1:4321/auth/spotify/callback` (for development)
   - **API/SDKs**: Check "Web API"
5. Accept the terms and create the app

## Step 2: Get Your Credentials

1. In your app dashboard, go to "Settings"
2. Note down your **Client ID** and **Client Secret**
3. Keep these secure - don't commit them to version control

## Step 3: Configure Environment Variables

1. Copy the `env.example` file to `.env`:
   ```bash
   cp env.example .env
   ```

2. Edit the `.env` file and add your credentials:
   ```env
   SPOTIFY_CLIENT_ID=your_actual_client_id_here
   SPOTIFY_CLIENT_SECRET=your_actual_client_secret_here
   SPOTIFY_REDIRECT_URI=http://localhost:4321/auth/spotify/callback
   ```

## Step 4: Test the Integration

1. Start your development server:
   ```bash
   pnpm run dev
   ```

2. Visit your homepage and check the "What I'm listening to" section
3. You should see either:
   - Your actual top albums (if properly configured)
   - Fallback albums (if there are issues)

## Current Implementation

The current implementation uses Spotify's Web API with client credentials flow, which gives us access to:
- Public album information
- Featured playlists
- General music data

### Limitations

The current setup has some limitations:
- **Cannot access user's personal top tracks/albums** (requires user authorization)
- **Cannot access private playlists**
- **Cannot access user's listening history**

### To Get Your Actual Top Albums

To display your actual top albums, you would need to implement Spotify's Authorization Code flow:

1. **User Authorization**: Users need to log in with Spotify
2. **OAuth Flow**: Implement the full OAuth 2.0 flow
3. **User Endpoints**: Use endpoints like `/me/top/tracks` and `/me/top/artists`

This would require additional setup including:
- OAuth callback handling
- User session management
- Database to store user tokens
- Privacy considerations for user data

## Alternative Approaches

### Option 1: Manual Album Curation
- Keep the current static approach but update albums manually
- Use Spotify's Web API to fetch album details dynamically

### Option 2: Use Spotify's Public Playlists
- Create public playlists on your Spotify account
- Fetch and display these playlists using the current API setup

### Option 3: Full User Authorization (Advanced)
- Implement the complete OAuth flow
- Allow visitors to connect their Spotify account
- Display their own top albums (with permission)

## Troubleshooting

### Common Issues

1. **"Spotify credentials not configured"**
   - Make sure your `.env` file exists and has the correct variables
   - Ensure the environment variables are loaded (restart your dev server)

2. **API Rate Limits**
   - Spotify has rate limits for API calls
   - The current implementation includes caching to reduce API calls

3. **CORS Issues**
   - The API calls are made server-side to avoid CORS issues
   - If you see CORS errors, check your API endpoint configuration

### Testing the API

You can test the API endpoint directly:
```bash
curl http://localhost:4321/api/spotify/top-albums
```

This should return a JSON response with album data.

## Production Deployment

When deploying to production:

1. **Update Redirect URI**: Change the redirect URI in your Spotify app settings to your production domain:
   - Go to your Spotify app dashboard
   - Edit the app settings
   - Update "Redirect URI" to: `https://yourdomain.com/auth/spotify/callback`

2. **Environment Variables**: Set the production environment variables:
   ```env
   SPOTIFY_CLIENT_ID=your_production_client_id
   SPOTIFY_CLIENT_SECRET=your_production_client_secret
   SPOTIFY_REDIRECT_URI=https://yourdomain.com/auth/spotify/callback
   ```

## Security Notes

- Never commit your `.env` file to version control
- Keep your Client Secret secure
- Consider using environment variables in production
- The current implementation only uses public data and doesn't require user tokens

## Next Steps

1. Set up your Spotify app and get credentials
2. Configure your environment variables
3. Test the integration
4. Consider implementing user authorization if you want personal top albums
5. Customize the UI and add more features as needed

For more advanced features, refer to the [Spotify Web API documentation](https://developer.spotify.com/documentation/web-api/).
