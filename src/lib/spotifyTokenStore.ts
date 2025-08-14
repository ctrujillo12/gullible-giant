// let accessToken: string | null = null;

// /**
//  * Stores the Spotify access token in memory.
//  * @param token - The access token to store.
//  */
// export function setToken(token: string) {
//   accessToken = token;
// }

// /**
//  * Retrieves the currently stored access token.
//  * @returns The access token or null if none is stored.
//  */
// export function getToken(): string | null {
//   return accessToken;
// }

// /**
//  * Clears the stored access token.
//  */
// export function clearToken() {
//   accessToken = null;
// }
export const clientId = 'f6af48791a99465e8a5eb950464a9c15';

export const redirectUri = 'http://127.0.0.1:4321/api/spotify/callback';

export const scopes = encodeURIComponent('user-read-private user-read-email user-top-read');

export const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes}`;
