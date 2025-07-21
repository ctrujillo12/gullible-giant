// import type { APIRoute } from 'astro';

// export const GET: APIRoute = async ({ url, redirect }) => {
//   const code = url.searchParams.get('code');
//   if (!code) {
//     return new Response('Missing code', { status: 400 });
//   }

//   const clientId = 'f6af48791a99465e8a5eb950464a9c15';
//   const clientSecret = '9851ae0eafed489ea54cba54bd8b23a4'; // Replace this with your actual secret
//   const redirectUri = 'http://127.0.0.1:4321/api/spotify/callback';

//   const body = new URLSearchParams({
//     grant_type: 'authorization_code',
//     code,
//     redirect_uri: redirectUri,
//     client_id: clientId,
//     client_secret: clientSecret,
//   });

//   const res = await fetch('https://accounts.spotify.com/api/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body,
//   });

//   const data = await res.json();

//   if (!res.ok) {
//     return new Response(JSON.stringify(data), { status: res.status });
//   }

//   // Optional: Redirect to home page or some other page
//   // Store token in cookie/localStorage/db etc if needed
//   return new Response(JSON.stringify(data), { status: 200 });
// };




import type { APIRoute } from 'astro';
import { setToken } from '../../../lib/spotifyTokenStore';

export const GET: APIRoute = async ({ url, redirect }) => {
  const code = url.searchParams.get('code');
  if (!code) {
    return new Response('Missing code', { status: 400 });
  }

  const clientId = 'f6af48791a99465e8a5eb950464a9c15';
  const clientSecret = '9851ae0eafed489ea54cba54bd8b23a4';
  const redirectUri = 'http://127.0.0.1:4321/api/spotify/callback';

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: redirectUri,
    client_id: clientId,
    client_secret: clientSecret,
  });

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  const data = await res.json();

  if (!res.ok) {
    return new Response(`Error fetching token: ${JSON.stringify(data)}`, {
      status: res.status,
    });
  }

  // Store access token in memory
  setToken(data.access_token);

  // Redirect to homepage or another route
  return redirect('/');
};
