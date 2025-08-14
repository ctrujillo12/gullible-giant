import type { APIRoute } from "astro";
import { clientId, clientSecret, redirectUri } from "../../../lib/spotifyTokenStore";

export const GET: APIRoute = async ({ url, redirect }) => {
  const code = url.searchParams.get("code");
  if (!code) {
    return new Response("No code provided", { status: 400 });
  }

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUri,
    client_id: clientId,
    client_secret: clientSecret
  });

  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  const data = await tokenRes.json();

  if (!tokenRes.ok) {
    return new Response(JSON.stringify(data), { status: 500 });
  }

  const access_token = data.access_token;

  // Redirect somewhere with the token OR save to a cookie/session/etc.
  return redirect(`/spotify/success?token=${access_token}`);
};
