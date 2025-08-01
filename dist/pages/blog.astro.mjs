import { c as createComponent, d as createAstro, e as renderHead, f as renderSlot, g as addAttribute, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CPTbKEqK.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_C5FysFo7.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, description, coverImage } = Astro2.props;
  return renderTemplate`<html lang="en"> <!-- <head>
    <meta charset="UTF-8" />
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/styles/global.css" />
  </head> --> <head><meta charset="UTF-8"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=League+Script&display=swap" rel="stylesheet">${renderHead()}</head> <body style="font-family: 'League Script', serif; background-color:rgb(33, 33, 33); color: #333333; line-height: 1.6; margin: 0;"> <header style="padding: 1.5rem 25rem; border-bottom: 1px solid #eee;"> <nav style="display: flex; gap: 2rem; font-weight: bold;"> <a href="/">Home</a> <a href="/blog">Blog</a> <a href="/projects">Projects</a> <a href="/mypicks">Picks</a> <a href="/diary">Diary</a> <a href="/spotify">Spotifyyy</a> <a href="/about">About</a> </nav> </header> <main style="max-width: 1000px; margin: 2rem auto; padding: 0 1rem;"> ${coverImage && renderTemplate`<img${addAttribute(coverImage, "src")}${addAttribute(title, "alt")} style="width: 100%; border-radius: 12px; margin-bottom: 2rem;">`} <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem;">${title}</h1> ${description && renderTemplate`<p style="font-style: italic; color: #c7ff7a;">${description}</p>`} <div style="margin-top: 2rem;"> ${renderSlot($$result, $$slots["default"])} </div> </main> <footer style="text-align: center; padding: 2rem 0; border-top: 1px solid #eee;"> <p>© </p><p style="color: #33ffff;">${(/* @__PURE__ */ new Date()).getFullYear()} cheyenneettrujillo — made with ☕ + Astro</p> </footer> </body></html>`;
}, "C:/Projects/Website/gullible-giant/src/layouts/PageLayout.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Blog", "description": "Writings, thoughts, and digital diary entries \u270F\uFE0F" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section style="display: grid; gap: 2rem; margin-top: 2rem;"> ${posts.map((post) => renderTemplate`<article style="padding: 1.5rem; border: 1px solid #ehhe; border-radius: 12px; background: #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.04); transition: transform 0.2s ease-in-out;"${addAttribute(() => (void 0).style.transform = "scale(1.02)", "on:mouseover")}${addAttribute(() => (void 0).style.transform = "scale(1.0)", "on:mouseout")}> <h2 style="margin: 0 0 0.5rem 0; font-size: 1.5rem;"> <a${addAttribute(`/blog/${post.slug}`, "href")} style="text-decoration: none; color: #2d2d2d;"> ${post.data.title} </a> </h2> <p style="font-size: 0.9rem; color: #777; margin-bottom: 0.5rem;"> ${new Date(post.data.pubDate).toLocaleDateString(void 0, { dateStyle: "medium" })} </p> <p style="margin: 0;">${post.data.description}</p> </article>`)} </section> ` })}`;
}, "C:/Projects/Website/gullible-giant/src/pages/blog/index.astro", void 0);

const $$file = "C:/Projects/Website/gullible-giant/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
