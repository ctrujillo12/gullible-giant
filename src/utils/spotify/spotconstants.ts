export const clientId = 'f6af48791a99465e8a5eb950464a9c15';
export const redirectUri = 'https://ctrujillo.netlify.app/callback';
export const scopes = encodeURIComponent('user-read-private user-read-email user-top-read');
export const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes}`;
