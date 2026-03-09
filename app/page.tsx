import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { HeroCarousel } from "@/components/hero-carousel";
import { ProductCard } from "@/components/product-card";
import { apparelProducts, generalProducts } from "@/data/products";

const categoryCards = [
  {
    title: "Men's Fashion",
    description: "Corporate shirts, senator sets, and polished essentials.",
    href: "/apparel",
    className:
      "bg-[linear-gradient(145deg,#0f172a_0%,#1d4ed8_95%)] text-white lg:col-span-2",
  },
  {
    title: "Women's Apparel",
    description: "Statement dresses and sharp matching sets for every occasion.",
    href: "/apparel",
    className:
      "bg-[linear-gradient(145deg,#7c3aed_0%,#ec4899_95%)] text-white lg:row-span-2",
  },
  {
    title: "Home Goods",
    description: "Bedding, cooling products, and practical household upgrades.",
    href: "/shop",
    className:
      "bg-[linear-gradient(145deg,#0f766e_0%,#14b8a6_100%)] text-white",
  },
  {
    title: "Gadgets",
    description: "Speakers, lanterns, and popular rechargeable picks.",
    href: "/shop",
    className:
      "bg-[linear-gradient(145deg,#1e293b_0%,#334155_40%,#0ea5e9_100%)] text-white",
  },
];

export default function HomePage() {
  return (
    <div className="pb-8">
      <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8 lg:pt-10">
        <HeroCarousel />
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
              <Sparkles className="h-4 w-4" />
              Department Highlights
            </span>
            <div className="space-y-2">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Clean routing into the categories customers browse most.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                High-contrast bento cards push traffic into apparel, general
                merchandise, and fast-moving everyday picks.
              </p>
            </div>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300"
          >
            View full catalog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {categoryCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className={`group relative overflow-hidden rounded-[2rem] p-6 shadow-[0_18px_42px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 ${card.className}`}
            >
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-6 -translate-y-6 rounded-full bg-white/10 blur-2xl" />
              <div className="relative flex h-full flex-col justify-between gap-14">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                    Featured Category
                  </p>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold">
                    {card.title}
                  </h3>
                  <p className="max-w-xs text-sm leading-6 text-white/80">
                    {card.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Explore
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="featured"
        className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8"
      >
        <div className="mb-8 grid gap-4 rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_18px_42px_rgba(15,23,42,0.06)] lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.5rem] bg-slate-50 p-4">
              <ShoppingBag className="h-5 w-5 text-[var(--brand)]" />
              <p className="mt-3 text-lg font-semibold text-slate-950">
                12 mixed inventory demos
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Apparel, electronics, kitchenware, lighting, and comfort.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-slate-50 p-4">
              <ShieldCheck className="h-5 w-5 text-[var(--brand)]" />
              <p className="mt-3 text-lg font-semibold text-slate-950">
                Trusted storefront pattern
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Premium presentation with clear callouts and strong hierarchy.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-slate-50 p-4">
              <MapPin className="h-5 w-5 text-[var(--brand)]" />
              <p className="mt-3 text-lg font-semibold text-slate-950">
                Kubwa pickup ready
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Directions and WhatsApp intent are available on the location page.
              </p>
            </div>
          </div>
          <Link
            href="/location"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)]"
          >
            Plan your visit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-10">
          <div>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
                  Apparel Focus
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-slate-950">
                  New arrivals for polished personal style
                </h2>
              </div>
              <Link
                href="/apparel"
                className="hidden text-sm font-semibold text-slate-700 md:inline-flex md:items-center md:gap-2"
              >
                Shop apparel
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {apparelProducts.map((product) => (
                <ProductCard key={product.id} product={product} portrait />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
                  Daily Sellers
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-slate-950">
                  Everyday essentials that keep the basket moving
                </h2>
              </div>
              <Link
                href="/shop"
                className="hidden text-sm font-semibold text-slate-700 md:inline-flex md:items-center md:gap-2"
              >
                Browse merchandise
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {generalProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
