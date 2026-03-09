"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  MapPin,
  Menu,
  Search,
  ShoppingCart,
  Store,
  X,
} from "lucide-react";

const departments = [
  { label: "Men's Fashion", href: "/apparel" },
  { label: "Women's Apparel", href: "/apparel" },
  { label: "Home Goods", href: "/shop" },
  { label: "Gadgets", href: "/shop" },
];

const services = [
  { label: "Full Shop", href: "/shop" },
  { label: "Visit Kubwa Plaza", href: "/location" },
  { label: "New Arrivals", href: "/#featured" },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/80 bg-white/80 backdrop-blur-xl">
        <div className="hidden border-b border-slate-200/80 bg-slate-950 text-slate-200 md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 text-sm">
            <div className="flex items-center gap-5">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-300" />
                Kubwa Plaza, Abuja
              </span>
              <span>Mon - Sat: 8:00 AM - 7:00 PM</span>
            </div>
            <p className="text-slate-300">
              Clean retail presentation for clothing, essentials, and home goods.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-6">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-slate-300 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <Link href="/" className="flex min-w-0 items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand)] text-white shadow-lg shadow-blue-700/20">
                <Store className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="truncate font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-slate-950 sm:text-xl">
                  Cornerstone Enterprises
                </p>
                <p className="truncate text-xs uppercase tracking-[0.24em] text-slate-500">
                  Kubwa Plaza Retail Store
                </p>
              </div>
            </Link>

            <div className="hidden lg:block">
              <div className="flex items-center gap-3 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-2 shadow-sm">
                <div className="flex flex-1 items-center gap-3 rounded-[1.2rem] bg-white px-4 py-3">
                  <Search className="h-4 w-4 text-slate-400" />
                  <input
                    aria-label="Search inventory"
                    placeholder="Search clothing, gadgets, kitchenware, bedding..."
                    className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-[1.2rem] bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)]"
                >
                  Search
                </button>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-2 lg:ml-0">
              <div className="hidden items-center gap-2 xl:flex">
                <DesktopDropdown label="Departments" items={departments} />
                <DesktopDropdown label="Quick Links" items={services} />
              </div>

              <Link
                href="/shop"
                className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-slate-300"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute right-2 top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--brand)] px-1 text-[10px] font-semibold text-white">
                  3
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-4 lg:hidden">
            <div className="flex items-center gap-2 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-2 shadow-sm">
              <div className="flex flex-1 items-center gap-3 rounded-[1rem] bg-white px-4 py-3">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  aria-label="Search store inventory"
                  placeholder="Search stock near you..."
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-[1rem] bg-[var(--brand)] px-4 py-3 text-sm font-semibold text-white"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen ? (
        <div className="fixed inset-0 z-[70] bg-white lg:hidden">
          <div className="flex h-full flex-col">
            <div className="border-b border-slate-200 bg-white px-5 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-slate-950">
                    Cornerstone
                  </p>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Abuja retail store
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-700"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-[1.25rem] border border-slate-200 bg-slate-50 p-2">
                <div className="flex flex-1 items-center gap-3 rounded-[1rem] bg-white px-4 py-3">
                  <Search className="h-4 w-4 text-slate-400" />
                  <input
                    aria-label="Search store inventory from menu"
                    placeholder="Search clothing, gadgets, bedding..."
                    className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-[1rem] bg-[var(--brand)] px-4 py-3 text-sm font-semibold text-white"
                >
                  Search
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6">
              <div className="space-y-6">
                <div className="rounded-[1.5rem] bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Store location
                  </p>
                  <p className="mt-2 font-semibold text-slate-950">
                    Kubwa Plaza, Abuja
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Monday to Saturday, 8:00 AM to 7:00 PM
                  </p>
                </div>

                <nav className="space-y-2">
                  <MobileMenuLink
                    href="/"
                    onNavigate={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </MobileMenuLink>
                  <MobileMenuLink
                    href="/shop"
                    onNavigate={() => setIsMobileMenuOpen(false)}
                  >
                    Shop
                  </MobileMenuLink>
                  <MobileMenuLink
                    href="/apparel"
                    onNavigate={() => setIsMobileMenuOpen(false)}
                  >
                    Apparel
                  </MobileMenuLink>
                  <MobileMenuLink
                    href="/location"
                    onNavigate={() => setIsMobileMenuOpen(false)}
                  >
                    Visit Us
                  </MobileMenuLink>
                </nav>

                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Departments
                  </p>
                  {departments.map((item) => (
                    <MobileMenuLink
                      key={item.label}
                      href={item.href}
                      onNavigate={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </MobileMenuLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

type DesktopDropdownProps = {
  label: string;
  items: { label: string; href: string }[];
};

function DesktopDropdown({ label, items }: DesktopDropdownProps) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex h-12 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300"
      >
        {label}
        <ChevronDown className="h-4 w-4 text-slate-500 transition group-hover:rotate-180" />
      </button>

      <div className="pointer-events-none absolute right-0 top-[calc(100%+12px)] w-64 rounded-[1.5rem] border border-white/80 bg-white/95 p-2 opacity-0 shadow-[0_18px_48px_rgba(15,23,42,0.14)] backdrop-blur transition group-hover:pointer-events-auto group-hover:opacity-100">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block rounded-[1rem] px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

type MobileMenuLinkProps = {
  href: string;
  onNavigate: () => void;
  children: React.ReactNode;
};

function MobileMenuLink({
  href,
  onNavigate,
  children,
}: MobileMenuLinkProps) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="block rounded-[1.2rem] border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
    >
      {children}
    </Link>
  );
}
