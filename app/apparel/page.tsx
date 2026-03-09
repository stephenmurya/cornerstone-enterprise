import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { apparelProducts } from "@/data/products";

export default function ApparelPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,#fff7ed_0%,#ffffff_42%,#dbeafe_100%)] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white">
              <Sparkles className="h-4 w-4" />
              Dedicated Clothing Section
            </span>
            <h1 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Apparel presented with a taller, editorial retail frame.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              This section gives garments more vertical space, premium hierarchy,
              and cleaner browsing for shoppers comparing silhouettes, sets, and
              occasion wear.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
            <p className="text-xs uppercase tracking-[0.24em] text-white/60">
              Style Navigation
            </p>
            <div className="mt-4 space-y-4">
              <div className="rounded-[1.25rem] bg-white/8 p-4">
                <p className="text-lg font-semibold">Men&rsquo;s Fashion</p>
                <p className="mt-1 text-sm text-white/70">
                  Corporate shirts and tailored native sets.
                </p>
              </div>
              <div className="rounded-[1.25rem] bg-white/8 p-4">
                <p className="text-lg font-semibold">Women&rsquo;s Apparel</p>
                <p className="mt-1 text-sm text-white/70">
                  Ankara dresses and structured co-ords for standout dressing.
                </p>
              </div>
            </div>
            <Link
              href="/location"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
            >
              Visit for fitting and availability
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
              Apparel Grid
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-slate-950">
              Garments merchandised with more breathing room
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700"
          >
            Back to full catalog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {apparelProducts.map((product) => (
            <ProductCard key={product.id} product={product} portrait />
          ))}
        </div>
      </section>
    </div>
  );
}
