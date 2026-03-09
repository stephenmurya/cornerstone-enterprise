import Link from "next/link";
import { Clock3, MapPin, RotateCcw, ShieldCheck } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Apparel", href: "/apparel" },
  { label: "Location", href: "/location" },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/70 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
        <div className="space-y-4">
          <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-white">
            Cornerstone Enterprises
          </p>
          <p className="max-w-md text-sm leading-7 text-slate-300">
            Clean commercial retail across clothing and general merchandise for
            fast-moving households in Kubwa Plaza, Abuja.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
            <MapPin className="h-4 w-4 text-cyan-300" />
            Kubwa Plaza, Abuja, Nigeria
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            <Clock3 className="h-4 w-4" />
            Store Hours
          </div>
          <div className="space-y-2 text-sm text-slate-300">
            <p>Monday to Friday: 8:00 AM - 7:00 PM</p>
            <p>Saturday: 9:00 AM - 7:00 PM</p>
            <p>Sunday: Availability updates on WhatsApp</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            <RotateCcw className="h-4 w-4" />
            Returns
          </div>
          <div className="space-y-2 text-sm text-slate-300">
            <p>7-day exchange window on eligible fashion items.</p>
            <p>Electricals can be returned within 48 hours if unopened.</p>
            <p>Original receipt or proof of payment required.</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            <ShieldCheck className="h-4 w-4" />
            Quick Links
          </div>
          <div className="space-y-2">
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Built for Vercel deployment with Next.js App Router and Tailwind CSS.</p>
          <p>Cornerstone Enterprises © 2026</p>
        </div>
      </div>
    </footer>
  );
}
