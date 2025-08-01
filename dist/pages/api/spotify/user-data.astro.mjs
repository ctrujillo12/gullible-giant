import { g as getToken } from '../../../chunks/spotifyTokenStore_BHbDpUA0.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async () => {
  const token = getToken();
  if (!token) {
    return new Response("No token. Please log in.", { status: 401 });
  }
  const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const data = await response.json();
  if (!response.ok) {
    return new Response(`Error fetching tracks: ${JSON.stringify(data)}`, {
      status: response.status
    });
  }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
