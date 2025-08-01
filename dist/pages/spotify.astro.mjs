import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_CPTbKEqK.mjs';
import 'kleur/colors';
import { $ as $$ShopLayout } from '../chunks/ShopLayout_QAOWJBnU.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Spotify = createComponent(($$result, $$props, $$slots) => {
  const clientId = "f6af48791a99465e8a5eb950464a9c15";
  const redirectUri = "http://127.0.0.1:4321/api/spotify/callback";
  const scopes = encodeURIComponent("user-read-private user-read-email user-top-read");
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$ShopLayout, { "title": "Home", "data-astro-cid-e7z3a3u3": true }, { "default": ($$result2) => renderTemplate` <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72&family=League+Script&family=Graduate&display=swap" rel="stylesheet"> ${maybeRenderHead()}<main data-astro-cid-e7z3a3u3> <h1 class="graduate-pink-center" data-astro-cid-e7z3a3u3>Coming Soon 🛠️</h1> <a${addAttribute(authUrl, "href")} data-astro-cid-e7z3a3u3> <img src="/images/kimk.JPG" alt="My Spotify" style="width: 80px; cursor: pointer;" data-astro-cid-e7z3a3u3> <img src="/images/kimk.JPG" alt="My Spotify" style="width: 80px; cursor: pointer;" data-astro-cid-e7z3a3u3> <img src="/images/kimk.JPG" alt="My Spotify" style="width: 80px; cursor: pointer;" data-astro-cid-e7z3a3u3> <img src="/images/kimk.JPG" alt="My Spotify" style="width: 80px; cursor: pointer;" data-astro-cid-e7z3a3u3> <img src="/images/kimk.JPG" alt="My Spotify" style="width: 80px; cursor: pointer;" data-astro-cid-e7z3a3u3> <img src="/images/kimk.JPG" alt="My Spotify" style="width: 80px; cursor: pointer;" data-astro-cid-e7z3a3u3> <img src="/images/kimk.JPG" alt="My Spotify" style="width: 80px; cursor: pointer;" data-astro-cid-e7z3a3u3> <img src="/images/kimk.JPG" alt="My Spotify" style="width: 80px; cursor: pointer;" data-astro-cid-e7z3a3u3> <img src="/images/kimk.JPG" alt="My Spotify" style="width: 80px; cursor: pointer;" data-astro-cid-e7z3a3u3> <img src="/images/kimk.JPG" alt="My Spotify" style="width: 80px; cursor: pointer;" data-astro-cid-e7z3a3u3> <img src="/images/kimk.JPG" alt="My Spotify" style="width: 80px; cursor: pointer;" data-astro-cid-e7z3a3u3> <img src="/images/kimk.JPG" alt="My Spotify" style="width: 80px; cursor: pointer;" data-astro-cid-e7z3a3u3> <img src="/images/kimk.JPG" alt="My Spotify" style="width: 80px; cursor: pointer;" data-astro-cid-e7z3a3u3> <img src="/images/kimk.JPG" alt="My Spotify" style="width: 80px; cursor: pointer;" data-astro-cid-e7z3a3u3> </a> <a href="https://open.spotify.com/user/6f8wd68ntevknv4h1fx17lky5?si=Jig_62sAS_ixal_bHqOwFQ&nd=1&dlsi=fb03e7d356b5483f" style="display: inline-block;" data-astro-cid-e7z3a3u3> <!-- <img src="/images/kimk.JPG" alt="Go to Projects" style="width: 60px; cursor: pointer;" /> --> </a> </main>  ` })}`;
}, "C:/Projects/Website/gullible-giant/src/pages/spotify.astro", void 0);

const $$file = "C:/Projects/Website/gullible-giant/src/pages/spotify.astro";
const $$url = "/spotify";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Spotify,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
