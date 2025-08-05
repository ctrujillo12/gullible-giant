// import type { APIRoute } from 'astro';
import type { APIRoute } from 'astro';
import { clientId, redirectUri } from '../utils/spotify/spotconstants';

const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;

export const GET: APIRoute = async ({ url, redirect, cookies }) => {
  const code = url.searchParams.get('code');
  if (!code) return new Response('No code provided', { status: 400 });

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
    }),
  });

  const tokenData = await tokenRes.json();

  if (!tokenRes.ok) return new Response(JSON.stringify(tokenData), { status: 500 });

  cookies.set('spotify_token', tokenData.access_token, {
    path: '/',
    httpOnly: true,
    secure: true,
    maxAge: 3600,
  });

  return redirect('/spotify');
};
