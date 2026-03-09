"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Search, Sparkles, Star } from "lucide-react";
import { formatNaira } from "@/data/products";

const slides = [
  {
    id: "new-arrivals",
    eyebrow: "Fresh This Week",
    title: "New arrivals built for fast retail decisions.",
    description:
      "From statement Ankara pieces to reliable home upgrades, Cornerstone keeps the front of store moving with high-demand stock.",
    accent: "from-[#0f4cbb] via-[#1d63d5] to-[#57a7ff]",
    primaryCta: { label: "Shop all inventory", href: "/shop" },
    secondaryCta: { label: "Browse apparel", href: "/apparel" },
    highlights: [
      { label: "Men's Corporate Shirt", price: 18500 },
      { label: "Ankara Print Dress", price: 29500 },
      { label: "Bluetooth Home Speaker", price: 27000 },
    ],
  },
  {
    id: "everyday-essentials",
    eyebrow: "Always Useful",
    title: "Everyday essentials for homes, offices, and busy families.",
    description:
      "High-visibility daily sellers across gadgets, kitchenware, lighting, and comfort products for shoppers around Kubwa Plaza.",
    accent: "from-[#0f766e] via-[#10b981] to-[#34d399]",
    primaryCta: { label: "See essentials", href: "/shop" },
    secondaryCta: { label: "Visit our location", href: "/location" },
    highlights: [
      { label: "Rechargeable Standing Fan", price: 82000 },
      { label: "Premium Bedding Set", price: 36500 },
      { label: "Smart Rechargeable Lantern", price: 14500 },
    ],
  },
];

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_30%),linear-gradient(120deg,rgba(15,23,42,0.08),transparent_45%)]" />

      <div className="relative min-h-[540px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ${
              activeSlide === index
                ? "translate-x-0 opacity-100"
                : "pointer-events-none translate-x-8 opacity-0"
            }`}
          >
            <div
              className={`grid min-h-[540px] grid-cols-1 gap-8 bg-gradient-to-br ${slide.accent} px-6 py-8 text-white sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-12`}
            >
              <div className="flex flex-col justify-between gap-10">
                <div className="space-y-6">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/90 backdrop-blur">
                    <Sparkles className="h-4 w-4" />
                    {slide.eyebrow}
                  </span>

                  <div className="max-w-2xl space-y-4">
                    <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold leading-none text-white sm:text-5xl lg:text-6xl">
                      {slide.title}
                    </h1>
                    <p className="max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                      {slide.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={slide.primaryCta.href}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                    >
                      {slide.primaryCta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href={slide.secondaryCta.href}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                    >
                      {slide.secondaryCta.label}
                    </Link>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {slide.highlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-white/65">
                        Featured
                      </p>
                      <p className="mt-2 text-sm font-medium text-white">
                        {item.label}
                      </p>
                      <p className="mt-3 text-lg font-semibold text-white">
                        {formatNaira(item.price)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.75rem] border border-white/15 bg-white/12 p-5 backdrop-blur">
                  <div className="rounded-[1.4rem] border border-white/15 bg-slate-950/18 p-4">
                    <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3">
                      <Search className="h-4 w-4 text-white/70" />
                      <span className="text-sm text-white/70">
                        Search shirts, cookware, fans, bedding...
                      </span>
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-white/12 p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                          Fast Browse
                        </p>
                        <p className="mt-2 text-2xl font-semibold">4 Pages</p>
                        <p className="mt-1 text-sm text-white/75">
                          Storefront, shop, apparel, and location.
                        </p>
                      </div>
                      <div className="rounded-2xl bg-white/12 p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                          Inventory Mix
                        </p>
                        <p className="mt-2 text-2xl font-semibold">12 SKUs</p>
                        <p className="mt-1 text-sm text-white/75">
                          Apparel, gadgets, home goods, and kitchen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/15 bg-white/12 p-5 backdrop-blur">
                    <Star className="h-5 w-5 text-yellow-300" />
                    <p className="mt-4 text-lg font-semibold">
                      Trusted retail presentation
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/75">
                      Clear merchandising, sharper calls to action, and mobile-first navigation.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/15 bg-slate-950/18 p-5 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/65">
                      Pickup Focus
                    </p>
                    <p className="mt-4 text-lg font-semibold">
                      Kubwa Plaza friendly
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/75">
                      Built to convert mobile shoppers into in-store visits and WhatsApp enquiries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/20 px-3 py-2 backdrop-blur">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              activeSlide === index ? "w-8 bg-white" : "w-2.5 bg-white/45"
            }`}
            aria-label={`Show ${slide.eyebrow}`}
          />
        ))}
      </div>
    </section>
  );
}
