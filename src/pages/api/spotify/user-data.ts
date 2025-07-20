import type { APIRoute } from 'astro';
import { getToken } from '../../../lib/spotifyTokenStore';

export const get: APIRoute = async () => {
  const token = getToken();
  if (!token) return new Response('No token. Please log in.', { status: 401 });

  const response = await fetch('https://api.spotify.com/v1/me/top/tracks', {
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
