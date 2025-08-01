import { s as setToken } from '../../../chunks/spotifyTokenStore_BHbDpUA0.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ url, redirect }) => {
  const code = url.searchParams.get("code");
  if (!code) {
    return new Response("Missing code", { status: 400 });
  }
  const clientId = "f6af48791a99465e8a5eb950464a9c15";
  const clientSecret = "9851ae0eafed489ea54cba54bd8b23a4";
  const redirectUri = "http://127.0.0.1:4321/api/spotify/callback";
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUri,
    client_id: clientId,
    client_secret: clientSecret
  });
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body
  });
  const data = await res.json();
  if (!res.ok) {
    return new Response(`Error fetching token: ${JSON.stringify(data)}`, {
      status: res.status
    });
  }
  setToken(data.access_token);
  return redirect("/");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
