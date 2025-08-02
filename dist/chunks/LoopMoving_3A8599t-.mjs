import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate } from './astro/server_CLdCtpUm.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro("https://boisterous-valkyrie-62854e.netlify.app");
const $$LoopMoving = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LoopMoving;
  const {
    text = "This text loops infinitely",
    speed = 70,
    color = "#2eddddff",
    fontSize = "1rem"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="scroll-container" data-astro-cid-fhy6akgs> <div class="scroll-text"${addAttribute(`animation-duration: ${speed}s; font-size: ${fontSize}; color: ${color};`, "style")} data-astro-cid-fhy6akgs> ${text} ${text} ${text} ${text} ${text} ${text} ${text} ${text} </div> </div>`;
}, "C:/Projects/Website/gullible-giant/src/components/LoopMoving.astro", void 0);

export { $$LoopMoving as $ };
