import { ShoppingCart, Truck } from "lucide-react";
import { Product, formatNaira } from "@/data/products";

type ProductCardProps = {
  product: Product;
  portrait?: boolean;
};

export function ProductCard({
  product,
  portrait = false,
}: ProductCardProps) {
  return (
    <article className="section-shell group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/70">
      <div
        className={`relative overflow-hidden ${
          portrait ? "aspect-[4/5]" : "aspect-[4/3]"
        }`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${product.imageClass}`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_32%),linear-gradient(180deg,transparent_5%,rgba(15,23,42,0.55)_100%)]" />
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-700 shadow-sm">
          {product.badge}
        </span>
        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/70">
              {product.category}
            </p>
            <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-white drop-shadow-[0_6px_24px_var(--font-shadow)]">
              {product.imageLabel}
            </p>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              product.inStock
                ? "bg-emerald-400/15 text-emerald-50 ring-1 ring-white/20"
                : "bg-amber-300/15 text-amber-50 ring-1 ring-white/20"
            }`}
          >
            {product.inStock ? "In Stock" : "Restocking"}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">
            {product.title}
          </h3>
          <p className="text-sm leading-6 text-slate-600">
            {product.description}
          </p>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Price
            </p>
            <p className="text-2xl font-bold tracking-tight text-slate-950">
              {formatNaira(product.price)}
            </p>
          </div>

          <button
            type="button"
            disabled={!product.inStock}
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2 text-xs font-medium text-slate-500">
          <Truck className="h-4 w-4 text-[var(--brand)]" />
          Same-day pickup available around Kubwa Plaza for stocked items.
        </div>
      </div>
    </article>
  );
}
