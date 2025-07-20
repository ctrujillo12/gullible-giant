import type { APIRoute } from 'astro';
import { setToken } from '../../../lib/spotifyTokenStore';

const client_id = 'f6af48791a99465e8a5eb950464a9c15';
const client_secret = '9851ae0eafed489ea54cba54bd8b23a4';
const redirect_uri = 'http://127.0.0.1:4322/api/spotify/callback'; // Must match Spotify Dashboard

export const get: APIRoute = async ({ url }) => {
  const code = url.searchParams.get('code');
  if (!code) return new Response('Missing code', { status: 400 });

  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri,
    }),
  });

  if (!tokenResponse.ok) {
    const err = await tokenResponse.text();
    return new Response(`Token fetch error: ${err}`, { status: 500 });
  }

  const tokenData = await tokenResponse.json();
  setToken(tokenData.access_token);

  return new Response('Login successful! You can now fetch user data.');
};
