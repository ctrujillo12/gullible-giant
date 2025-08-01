import { c as createComponent, d as createAstro, m as maybeRenderHead, g as addAttribute, a as renderTemplate } from './astro/server_CPTbKEqK.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro();
const $$LoopMoving = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LoopMoving;
  const {
    text = "This text loops infinitely",
    speed = 60,
    color = "#2eddddff",
    fontSize = "4rem"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="scroll-container" data-astro-cid-fhy6akgs> <div class="scroll-text"${addAttribute(`animation-duration: ${speed}s; font-size: ${fontSize}; color: ${color};`, "style")} data-astro-cid-fhy6akgs> ${text} ${text} ${text} ${text} ${text} ${text} ${text} ${text} </div> </div>`;
}, "C:/Projects/Website/gullible-giant/src/components/LoopMoving.astro", void 0);

export { $$LoopMoving as $ };
