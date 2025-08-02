import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_CLdCtpUm.mjs';
import 'kleur/colors';
import { $ as $$ShopLayout } from '../chunks/ShopLayout_BEy7phtM.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://boisterous-valkyrie-62854e.netlify.app");
const $$TextMoving = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TextMoving;
  const {
    text = "This text moves left and right",
    speed = 5,
    color = "#2eddddff",
    fontSize = "10rem"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="moving-text"${addAttribute(`animation-duration: ${speed}s; font-size: ${fontSize}; color: ${color};`, "style")} data-astro-cid-hovfojde> ${text} </div>`;
}, "C:/Projects/Website/gullible-giant/src/components/TextMoving.astro", void 0);

const $$Diary = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$ShopLayout, { "title": "", "data-astro-cid-pyfuvgrx": true }, { "default": ($$result2) => renderTemplate` <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72&family=League+Script&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Nanum+Pen+Script&display=swap" rel="stylesheet"> ${maybeRenderHead()}<div class="moving-text-wrapper" data-astro-cid-pyfuvgrx> ${renderComponent($$result2, "TextMoving", $$TextMoving, { "text": "My Picks", "fontSize": "13rem", "data-astro-cid-pyfuvgrx": true })} </div> <div class="notes-container" data-astro-cid-pyfuvgrx> <article class="text-reflection" data-astro-cid-pyfuvgrx> <h2 class="note-title" data-astro-cid-pyfuvgrx>The Warehouse: a playground for Eros</h2> <p data-astro-cid-pyfuvgrx>
eros: love conceived as a fundamental creative impulse having a sensual element.
        this scene in effy's first episode lights me on fire. i've watched it idk how many times.
        it's like the warehouse is an alternate reality that is effy's and hers alone.
        ofc spencer is there but more as a means through which effy expresses herself and meets her needs.
        she doesnt have to say anything to get everything.
</p> <p data-astro-cid-pyfuvgrx>
the metallic sounds, the whirs, the grinding, the beeping, makes the place feel cold and industrial,
        but somehow the scene is full of humanity and bursting with sensuality, creativity, and also destruction.
        everything is being let go and made to serve her purpose. shes worshipped.
</p> <p data-astro-cid-pyfuvgrx>
its a total trip. an unearthly place. it may feel childish or immature for a second,
        but then it becomes about the underlying desires present.
</p> <p class="signature" data-astro-cid-pyfuvgrx>7/18 c</p> </article> <article class="text-reflection" data-astro-cid-pyfuvgrx> <h2 class="note-title" data-astro-cid-pyfuvgrx>Sharp Desires</h2> <p data-astro-cid-pyfuvgrx>
something that has always been a part of me is the desired to defile my skin with 
        sharp or satisfying objects.
</p> <p data-astro-cid-pyfuvgrx>
for example, today at my job, i was entranced by the
        long sharp probes of the multimeter sitting on my desk. you see, i have this bump on my upper arm
        near the pit, and i have been picking at it lately. this morning i made it bleed again
        and then a nice satisfying little protruded scab formed. later on in the day when i 
        noticed this fact and also the multimeter lying just in front of me, i knew what i wanted to
        do. to get under this little scab and remove it with a precise instrument such as the probe would be
        so intensely satisfying. but i held back, as i sit in an open hallway with other interns 
        and engineers around me. anyway thats what i felt today
</p> <p class="signature" data-astro-cid-pyfuvgrx>7/21 c</p> </article> </div>  ` })}`;
}, "C:/Projects/Website/gullible-giant/src/pages/diary.astro", void 0);

const $$file = "C:/Projects/Website/gullible-giant/src/pages/diary.astro";
const $$url = "/diary";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Diary,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
