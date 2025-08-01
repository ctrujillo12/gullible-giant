import { c as createComponent, r as renderComponent, m as maybeRenderHead, b as renderScript, a as renderTemplate } from '../chunks/astro/server_CPTbKEqK.mjs';
import 'kleur/colors';
import { $ as $$ShopLayout } from '../chunks/ShopLayout_QAOWJBnU.mjs';
import { $ as $$LoopMoving } from '../chunks/LoopMoving_B1tZTtF6.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$ShopLayout, { "title": "Home", "data-astro-cid-aid3sr62": true })} <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72&family=League+Script&display=swap" rel="stylesheet"> ${maybeRenderHead()}<div class="hero" data-astro-cid-aid3sr62> <div class="overlay" data-astro-cid-aid3sr62></div> ${renderComponent($$result, "LoopMoving", $$LoopMoving, { "text": "My Picks", "fontSize": "13rem", "data-astro-cid-aid3sr62": true })} </div> <div class="content-section" data-astro-cid-aid3sr62> <div class="content-text" data-astro-cid-aid3sr62> <h2 data-astro-cid-aid3sr62>Secondhand Picks</h2> <p data-astro-cid-aid3sr62>A collection of my favorite vintage and thrifted gems. Fashion with a story.</p> <a href="/secondhand" class="link-button" data-astro-cid-aid3sr62>Explore Finds</a> </div> <div class="content-image" data-astro-cid-aid3sr62> <img src="/images/secondhand.jpg" alt="Secondhand Finds" data-astro-cid-aid3sr62> </div> </div> <div class="content-section" data-astro-cid-aid3sr62> <div class="content-text" data-astro-cid-aid3sr62> <h2 data-astro-cid-aid3sr62>Diary</h2> <p data-astro-cid-aid3sr62>Personal reflections, observations, and thoughts from my life and mind.</p> <a href="/diary" class="link-button" data-astro-cid-aid3sr62>Read Entries</a> </div> <div class="content-image" data-astro-cid-aid3sr62> <img src="/images/diary.jpg" alt="Diary Entries" data-astro-cid-aid3sr62> </div> </div> <div class="content-section" data-astro-cid-aid3sr62> <div class="content-text" data-astro-cid-aid3sr62> <h2 data-astro-cid-aid3sr62>My Music</h2> <p data-astro-cid-aid3sr62>Snippets, covers, and compositions—from violin to piano to experimental loops.</p> <a href="/music" class="link-button" data-astro-cid-aid3sr62>Listen In</a> </div> <div class="content-image" data-astro-cid-aid3sr62> <img src="/images/music.jpg" alt="Music" data-astro-cid-aid3sr62> </div> </div> <div class="content-section" data-astro-cid-aid3sr62> <div class="content-text" data-astro-cid-aid3sr62> <h2 data-astro-cid-aid3sr62>Projects & Inspo</h2> <p data-astro-cid-aid3sr62>Things I’ve built, things I love, and the ideas that spark something in me.</p> <a href="/projects" class="link-button" data-astro-cid-aid3sr62>See More</a> </div> <div class="content-image" data-astro-cid-aid3sr62> <img src="/images/projects.jpg" alt="Projects and Inspirations" data-astro-cid-aid3sr62> </div> </div> ${renderScript($$result, "C:/Projects/Website/gullible-giant/src/pages/projects.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Projects/Website/gullible-giant/src/pages/projects.astro", void 0);

const $$file = "C:/Projects/Website/gullible-giant/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
