import { c as createComponent, m as maybeRenderHead, b as renderScript, g as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_CPTbKEqK.mjs';
import 'kleur/colors';
import { $ as $$ShopLayout } from '../chunks/ShopLayout_QAOWJBnU.mjs';
import { $ as $$LoopMoving } from '../chunks/LoopMoving_B1tZTtF6.mjs';
import 'clsx';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const products = [
  {
    name: "Nanette Lepore halter",
    image: '/images/halter.jpg', // Make sure this image exists in your /public/images folder
    link: "https://poshmark.com/listing/Nanette-Lepore-Silk-Sleeveless-Floral-68470493310f1c933d8a8a47",
    price: "$29"
  },
  {
    name: "Marc Jacobs owl ring",
    image: "/images/mj_ring.webp",
    link: "https://www.therealreal.com/products/jewelry/rings/cocktail-ring/kate-spade-new-york-arctic-friends-polar-bear-pave-ring-qr3nf",
    price: "$63"
  },
  {
    name: "Blumarine cardigan",
    image: "/images/blumarine_cardigan.webp",
    link: "https://www.therealreal.com/products/jewelry/rings/cocktail-ring/kate-spade-new-york-arctic-friends-polar-bear-pave-ring-qr3nf",
    price: "$51"
  },
  {
    name: "Sneakers",
    image: "/images/fredperry.jpg",
    link: "https://www.therealreal.com/products/men/shoes/sneakers/fred-perry-x-comme-des-garcons-printed-embroidered-accent-sneakers-qcior",
    price: "$120"
  },
  {
    name: "Marc Jacobs cardigan",
    image: "/images/mjcardigan.png",
    link: "https://www.therealreal.com/products/women/clothing/knitwear/marc-by-marc-jacobs-plaid-print-crew-neck-sweater-quaku",
    price: "$36"
  },
  {
    name: "Ombre skirt",
    image: "/images/topshopskirt.png",
    link: "https://poshmark.com/listing/Topshop-high-low-ombre-gray-mini-skirt-6276871c09d760cb66538393",
    price: "$25"
  },
  {
    name: "Bebe ruffle top",
    image: "/images/beberuffle.png",
    link: "https://poshmark.com/listing/Bebe-100-Silk-Ruffled-Tiered-Camisole-Top-Womens-Small-67a4970334e984be3690a03c",
    price: "$50"
  },
  {
    name: "Balenciaga dress",
    image: "/images/balencidress.png",
    link: "https://poshmark.com/listing/Balenciaga-small-short-dress-622429cacb692c022d07ceea",
    price: "$240"
  },
  {
    name: "Guess top",
    image: "/images/guesstop.png",
    link: "https://poshmark.com/listing/Guess-Creased-Off-Shoulder-Top-XXS-NWT-58f65bb04127d0b0d516ba81",
    price: "$50"
  },
  {
    name: "Marc Jacobs",
    image: "/images/mj_sunglasses.png",
    link: "https://www.therealreal.com/products/women/accessories/sunglasses/marc-jacobs-wayfarer-tinted-sunglasses-qrqyi",
    price: "$56"
  },
  {
    name: "Guinness polo",
    image: "/images/guiness_shirt.webp",
    link: "https://poshmark.com/listing/Guinness-rugby-shirt-67a235c12839bc7bc77b6a4d",
    price: "$10"
  },
  {
    name: "MCM mini boston bag",
    image: "/images/mcm_bag.webp",
    link: "https://poshmark.com/listing/MCM-mini-Boston-bag-6606d91a92e491386801376a",
    price: "$199"
  },
  {
    name: "2 tone green polo",
    image: "/images/pwc_polo.webp",
    link: "https://poshmark.com/listing/Olive-Green-Polo-Shirt-67a238bd154600a6a5c303ad",
    price: "$20"
  },
  {
    name: "Molly Goddard cardigan",
    image: "/images/mollygoddard_cardigan.webp",
    link: "https://poshmark.com/listing/Molly-Goddard-cardigan-sweater-66d49f8dfe7e2cf2d14f17c4",
    price: "$180"
  },
  {
    name: "Kate Spade arctic bear ring",
    image: "/images/katespade_bear_ring.webp",
    link: "https://www.therealreal.com/products/jewelry/rings/cocktail-ring/kate-spade-new-york-arctic-friends-polar-bear-pave-ring-qr3nf",
    price: "$68"
  },
  {
    name: "Jil Sander sweater",
    image: "/images/jilsander_shortsleeve_sweater.webp",
    link: "https://www.therealreal.com/products/women/clothing/knitwear/jil-sander-cashmere-crew-neck-sweater-qd7o1",
    price: "$75"
  },
  {
    name: "Marc Jacobs denim jacket",
    image: "/images/mj_denimjacket.webp",
    link: "https://www.therealreal.com/products/women/clothing/jackets/marc-by-marc-jacobs-printed-jacket-qt548",
    price: "$45"
  },
  {
    name: "Fleur Du Mal bodysuit",
    image: "/images/fleurdumal_bodysuit.webp",
    link: "https://www.therealreal.com/products/women/clothing/tops/fleur-du-mal-off-the-shoulder-short-sleeve-bodysuit-qcy09",
    price: "$84"
  },
  // {
  //   name: "Kate Spade arctic bear ring",
  //   image: "/images/katespade_bear_ring.webp",
  //   link: "https://www.therealreal.com/products/jewelry/rings/cocktail-ring/kate-spade-new-york-arctic-friends-polar-bear-pave-ring-qr3nf",
  //   price: "$68"
  // },

  
];

const $$ShopCarousel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="carousel-container" data-astro-cid-e2n6rwuc> <button aria-label="Previous" class="glider-prev" data-astro-cid-e2n6rwuc>‹</button> <div class="glider" data-astro-cid-e2n6rwuc> ${products.map((product) => renderTemplate`<a${addAttribute(product.link, "href")} class="product-card" data-astro-cid-e2n6rwuc> <img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} data-astro-cid-e2n6rwuc> <div class="product-name" data-astro-cid-e2n6rwuc>${product.name}</div> <div class="product-price" data-astro-cid-e2n6rwuc>${product.price}</div> </a>`)} </div> <button aria-label="Next" class="glider-next" data-astro-cid-e2n6rwuc>›</button> </div> ${renderScript($$result, "C:/Projects/Website/gullible-giant/src/components/ShopCarousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Projects/Website/gullible-giant/src/components/ShopCarousel.astro", void 0);

const $$Mypicks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$ShopLayout, { "title": "", "data-astro-cid-7f2wokly": true }, { "default": ($$result2) => renderTemplate` <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72&family=League+Script&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=League+Script+Two&display=swap" rel="stylesheet"> ${maybeRenderHead()}<div class="moving-text-wrapper" data-astro-cid-7f2wokly> ${renderComponent($$result2, "LoopMoving", $$LoopMoving, { "text": "-My Picks", "fontSize": "13rem", "data-astro-cid-7f2wokly": true })} <div class="content-text" data-astro-cid-7f2wokly> <h2 data-astro-cid-7f2wokly>What i'd buy. . .</h2> <!-- <p>Personal reflections, observations, and thoughts from my life and mind.</p>
      <a href="/diary" class="link-button">Read Entries</a> --> </div> </div>  ${renderComponent($$result2, "ShopCarousel", $$ShopCarousel, { "data-astro-cid-7f2wokly": true })}  ` })}`;
}, "C:/Projects/Website/gullible-giant/src/pages/mypicks.astro", void 0);

const $$file = "C:/Projects/Website/gullible-giant/src/pages/mypicks.astro";
const $$url = "/mypicks";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Mypicks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
