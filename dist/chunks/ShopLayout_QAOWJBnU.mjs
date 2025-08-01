import { c as createComponent, d as createAstro, f as renderSlot, e as renderHead, a as renderTemplate } from './astro/server_CPTbKEqK.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$ShopLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ShopLayout;
  const { title = "Shop" } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-ipno7jli> <head><meta charset="UTF-8"><title>${title}</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Glider.js --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.css"><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72&family=League+Script&family=Graduate&display=swap" rel="stylesheet">
/>
${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body data-astro-cid-ipno7jli> <header data-astro-cid-ipno7jli> <nav data-astro-cid-ipno7jli> <!-- <a href="/" class="site-logo">C</a> --> <a href="/" class="site-logo" aria-label="horse" style="position: relative; width: 80px; height: 80px; display: inline-block;" data-astro-cid-ipno7jli> <img src="/images/whorse.png" alt="Home" style="
          width: 40px;
          height: 40px;
          filter: drop-shadow(0 0 0 rgb(182, 35, 255)) drop-shadow(0 0 2px rgb(182, 35, 255));
          display: block;
          margin: 20px auto;
        " data-astro-cid-ipno7jli> <svg viewBox="0 0 100 100" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;" data-astro-cid-ipno7jli> <defs data-astro-cid-ipno7jli> <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" data-astro-cid-ipno7jli></path> </defs> <text fill="#b623ff" font-family="Graduate, serif" font-size="10" letter-spacing="2" style="text-shadow: 0 0 5px #b623ff;" data-astro-cid-ipno7jli> <textPath xlink:href="#circlePath" startOffset="25%" data-astro-cid-ipno7jli>
• H O M E •
</textPath> </text> </svg> </a> <div class="nav-links" data-astro-cid-ipno7jli> <!-- <a href="/">Home</a> --> <!-- <a href="/projects">Projects</a> --> <a href="/mypicks" data-astro-cid-ipno7jli>My Picks</a> <!-- <a href="/diary">Diary</a> --> <a href="/spotify" class="spotify-link" aria-label="Spotify" data-astro-cid-ipno7jli> <img src="/images/spotify--v2.png" alt="Spotify" data-astro-cid-ipno7jli> </a> <a href="/about" data-astro-cid-ipno7jli>Connect</a> </div> </nav> </header> <main data-astro-cid-ipno7jli> ${renderSlot($$result, $$slots["default"])} </main> <footer data-astro-cid-ipno7jli> <div class="footer" data-astro-cid-ipno7jli></div>
© ${(/* @__PURE__ */ new Date()).getFullYear()} cheyenneettrujillo — made with Astro
</footer> </body></html>`;
}, "C:/Projects/Website/gullible-giant/src/layouts/ShopLayout.astro", void 0);

export { $$ShopLayout as $ };
