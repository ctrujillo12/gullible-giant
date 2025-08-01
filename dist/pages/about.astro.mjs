import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../chunks/astro/server_CPTbKEqK.mjs';
import 'kleur/colors';
import { $ as $$ShopLayout } from '../chunks/ShopLayout_QAOWJBnU.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$ShopLayout, { "title": "Let's Connect", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="connect-container" data-astro-cid-kh7btl4r><h1 data-astro-cid-kh7btl4r>💌 Let’s Connect</h1><!-- <p>Have suggestions, comments, or just want to say hi?</p> --><button class="connect-button" id="openModal" data-astro-cid-kh7btl4r>Send a Message</button><div class="social-links" data-astro-cid-kh7btl4r><!-- <a href="https://www.pinterest.com/yourprofile" target="_blank" aria-label="Pinterest">
        <img src="/images/pinterest.svg" alt="Pinterest" class="social-icon" />
      </a> --><a href="https://www.linkedin.com/in/cheyenne-trujillo-093a41246" target="_blank" aria-label="LinkedIn" data-astro-cid-kh7btl4r><img src="/images/linkedin.svg" alt="LinkedIn" class="social-icon" data-astro-cid-kh7btl4r></a><a href="https://github.com/ctrujillo12" target="_blank" aria-label="GitHub" data-astro-cid-kh7btl4r><img src="/images/github.png" alt="GitHub" class="social-icon" data-astro-cid-kh7btl4r></a><a href="https://www.instagram.com/cheyenneetrujillo/" target="_blank" aria-label="Instagram" data-astro-cid-kh7btl4r><img src="/images/instagram.png" alt="Instagram" class="social-icon" data-astro-cid-kh7btl4r></a><a href="mailto:cheyenneettrujillo@gmail.com" aria-label="Email" data-astro-cid-kh7btl4r><img src="/images/gmail.jpg" alt="Email" class="social-icon" data-astro-cid-kh7btl4r></a></div></div><div class="modal" id="contactModal" data-astro-cid-kh7btl4r><div class="modal-content" data-astro-cid-kh7btl4r><h2 data-astro-cid-kh7btl4r>Send a Message</h2><form data-astro-cid-kh7btl4r><label for="name" data-astro-cid-kh7btl4r>Name</label><input type="text" id="name" name="name" data-astro-cid-kh7btl4r><label for="email" data-astro-cid-kh7btl4r>Email/Handle</label><input type="email" id="email" name="email" data-astro-cid-kh7btl4r><!-- <label for="topic">Topic</label>
        <input type="text" id="topic" name="topic" /> --><label for="message" data-astro-cid-kh7btl4r>Content</label><textarea id="message" name="message" data-astro-cid-kh7btl4r></textarea><button class="modal-close" type="submit" data-astro-cid-kh7btl4r>Send</button></form></div></div>${renderScript($$result2, "C:/Projects/Website/gullible-giant/src/pages/about.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "C:/Projects/Website/gullible-giant/src/pages/about.astro", void 0);

const $$file = "C:/Projects/Website/gullible-giant/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
