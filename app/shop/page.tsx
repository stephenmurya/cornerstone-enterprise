"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { products, shopCategories } from "@/data/products";

const priceBands = [
  { label: "All prices", value: "all" },
  { label: "Under ₦25,000", value: "under-25000" },
  { label: "₦25,000 - ₦60,000", value: "25000-60000" },
  { label: "Above ₦60,000", value: "over-60000" },
] as const;

type PriceBand = (typeof priceBands)[number]["value"];

export default function ShopPage() {
  const [priceBand, setPriceBand] = useState<PriceBand>("all");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesPrice =
      priceBand === "all" ||
      (priceBand === "under-25000" && product.price < 25000) ||
      (priceBand === "25000-60000" &&
        product.price >= 25000 &&
        product.price <= 60000) ||
      (priceBand === "over-60000" && product.price > 60000);

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const matchesStock = !inStockOnly || product.inStock;

    return matchesPrice && matchesCategory && matchesStock;
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );
  };

  const resetFilters = () => {
    setPriceBand("all");
    setSelectedCategories([]);
    setInStockOnly(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,#0f172a_0%,#0f4cbb_48%,#60a5fa_100%)] px-6 py-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.12)] sm:px-8 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-blue-100">
          Full Catalog
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-tight sm:text-5xl">
          General merchandise with clean commercial filtering.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-50/85 sm:text-base">
          Browse mixed inventory across apparel, gadgets, kitchenware, home
          comforts, and reliable household essentials from our Kubwa Plaza store.
        </p>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-8">
        <div className="lg:hidden">
          <details className="section-shell overflow-hidden rounded-[1.75rem]">
            <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-slate-900">
              <span className="inline-flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-[var(--brand)]" />
                Filter inventory
              </span>
              <span className="text-slate-400">Tap to expand</span>
            </summary>
            <div className="border-t border-slate-100 px-5 py-5">
              <FilterPanel
                inStockOnly={inStockOnly}
                priceBand={priceBand}
                selectedCategories={selectedCategories}
                onCategoryToggle={toggleCategory}
                onPriceBandChange={setPriceBand}
                onInStockChange={setInStockOnly}
                onReset={resetFilters}
              />
            </div>
          </details>
        </div>

        <aside className="hidden lg:block">
          <div className="section-shell sticky top-28 rounded-[1.75rem] p-5">
            <FilterPanel
              inStockOnly={inStockOnly}
              priceBand={priceBand}
              selectedCategories={selectedCategories}
              onCategoryToggle={toggleCategory}
              onPriceBandChange={setPriceBand}
              onInStockChange={setInStockOnly}
              onReset={resetFilters}
            />
          </div>
        </aside>

        <section className="space-y-6">
          <div className="section-shell flex flex-col gap-4 rounded-[1.75rem] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                Result Count
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-950">
                {filteredProducts.length} product
                {filteredProducts.length === 1 ? "" : "s"} available
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedCategories.length > 0
                ? selectedCategories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600"
                    >
                      {category}
                    </span>
                  ))
                : null}
              {inStockOnly ? (
                <span className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  In Stock Only
                </span>
              ) : null}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

type FilterPanelProps = {
  priceBand: PriceBand;
  selectedCategories: string[];
  inStockOnly: boolean;
  onPriceBandChange: (value: PriceBand) => void;
  onCategoryToggle: (value: string) => void;
  onInStockChange: (value: boolean) => void;
  onReset: () => void;
};

function FilterPanel({
  priceBand,
  selectedCategories,
  inStockOnly,
  onPriceBandChange,
  onCategoryToggle,
  onInStockChange,
  onReset,
}: FilterPanelProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
            Smart Filters
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-slate-950">
            Refine the catalog
          </h2>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="text-sm font-semibold text-slate-500 transition hover:text-slate-900"
        >
          Reset
        </button>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          Price
        </h3>
        <div className="grid gap-2">
          {priceBands.map((band) => (
            <button
              key={band.value}
              type="button"
              onClick={() => onPriceBandChange(band.value)}
              className={`rounded-[1rem] border px-4 py-3 text-left text-sm font-medium transition ${
                priceBand === band.value
                  ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
              }`}
            >
              {band.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          Category
        </h3>
        <div className="grid gap-2">
          {shopCategories.map((category) => {
            const isSelected = selectedCategories.includes(category);

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryToggle(category)}
                className={`rounded-[1rem] border px-4 py-3 text-left text-sm font-medium transition ${
                  isSelected
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-[1.5rem] bg-slate-50 p-4">
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(event) => onInStockChange(event.target.checked)}
            className="h-5 w-5 rounded border-slate-300 text-[var(--brand)] focus:ring-[var(--brand)]"
          />
          <div>
            <p className="text-sm font-semibold text-slate-900">In-stock only</p>
            <p className="text-sm text-slate-500">
              Hide restocking items and show immediate pickup options.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
}
