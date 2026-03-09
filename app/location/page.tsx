import Link from "next/link";
import {
  Clock3,
  MapPinned,
  MessageCircle,
  Navigation,
  PhoneCall,
} from "lucide-react";

const whatsappHref =
  "https://wa.me/2348123456789?text=Hello%20Cornerstone%20Enterprises%2C%20I%20want%20to%20confirm%20item%20availability%20before%20coming%20to%20Kubwa%20Plaza.";

const directions = [
  "From Arab Road Junction, continue straight toward Kubwa town centre and watch for Kubwa Plaza retail signage.",
  "If you are coming from Kubwa Village Market, head toward the main plaza corridor and follow the cluster of fashion and household stores.",
  "From the Kubwa General Hospital axis, take the direct route toward the plaza strip and ask for Cornerstone Enterprises inside the commercial block.",
];

export default function LocationPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
            Visit Us
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Find Cornerstone Enterprises inside Kubwa Plaza, Abuja.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            This page is structured to convert mobile browsing into real store
            visits with directions, trading hours, and a direct WhatsApp stock
            check before pickup.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] bg-slate-50 p-5">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-[var(--brand)]">
                <MapPinned className="h-5 w-5" />
              </div>
              <p className="mt-4 text-lg font-semibold text-slate-950">
                Kubwa Plaza retail corridor
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Easy to access for walk-in shoppers looking for clothing,
                gadgets, and household goods in one stop.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                <Clock3 className="h-5 w-5" />
              </div>
              <p className="mt-4 text-lg font-semibold">Open hours</p>
              <div className="mt-2 space-y-2 text-sm text-white/75">
                <p>Monday to Friday: 8:00 AM - 7:00 PM</p>
                <p>Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: WhatsApp pickup coordination</p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,#0f172a_0%,#0f4cbb_52%,#38bdf8_100%)] p-5 text-white shadow-[0_24px_60px_rgba(15,23,42,0.14)] sm:p-6">
          <div className="rounded-[1.75rem] border border-white/15 bg-slate-950/10 p-4 backdrop-blur sm:p-5">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
              <Navigation className="h-4 w-4" />
              Map Placeholder
            </div>
            <div className="relative min-h-[340px] overflow-hidden rounded-[1.5rem] border border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.18),transparent_18%),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:100%_100%,48px_48px,48px_48px]" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="max-w-sm rounded-[1.25rem] bg-slate-950/25 p-4 backdrop-blur">
                  <p className="text-sm font-semibold">Cornerstone Enterprises</p>
                  <p className="mt-1 text-sm text-white/75">
                    Kubwa Plaza, Abuja
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.25rem] bg-white/12 p-4 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/65">
                      Landmark
                    </p>
                    <p className="mt-2 text-lg font-semibold">Arab Road Junction</p>
                  </div>
                  <div className="rounded-[1.25rem] bg-white/12 p-4 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/65">
                      Access
                    </p>
                    <p className="mt-2 text-lg font-semibold">Walk-in & pickup friendly</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600" />
              Chat on WhatsApp for Availability
            </a>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
            Directions
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-slate-950">
            Quick routes from major Kubwa landmarks
          </h2>
          <div className="mt-6 grid gap-4">
            {directions.map((direction) => (
              <div
                key={direction}
                className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5"
              >
                <p className="text-sm leading-7 text-slate-700">{direction}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/70 bg-slate-950 p-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.14)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
            Contact & Policy
          </p>
          <div className="mt-5 space-y-5">
            <div className="rounded-[1.5rem] bg-white/8 p-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                <PhoneCall className="h-5 w-5" />
              </div>
              <p className="mt-3 text-lg font-semibold">Phone support</p>
              <p className="mt-1 text-sm text-white/70">+234 812 345 6789</p>
            </div>
            <div className="rounded-[1.5rem] bg-white/8 p-4">
              <p className="text-lg font-semibold">Pickup guidance</p>
              <p className="mt-1 text-sm leading-6 text-white/70">
                Confirm item availability before leaving home if you need a
                same-day pickup around Kubwa Plaza.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
            >
              Return to catalog
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}
