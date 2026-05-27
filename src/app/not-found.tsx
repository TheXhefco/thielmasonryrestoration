import Link from "next/link";
import { Phone } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#faf7f2] flex items-center justify-center pt-24 pb-16">
      <div className="container-content max-w-lg text-center">
        {/* Crest SVG */}
        <div className="flex justify-center mb-8 opacity-20">
          <svg width="120" height="130" viewBox="0 0 100 110" fill="#22242a">
            <path d="M50 5 L85 20 L85 60 Q85 90 50 105 Q15 90 15 60 L15 20 Z" />
            <path d="M40 30 L60 30 L65 50 L50 65 L35 50 Z" fill="#b01e24" fillOpacity="0.5" />
          </svg>
        </div>

        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="hairline-wood" />
          <span className="text-eyebrow text-[#c8a06a]">404 — NOT FOUND</span>
          <span className="hairline-wood" />
        </div>

        <h1 className="font-display text-display-l font-bold text-[#22242a] mb-4">
          This page crumbled.
        </h1>

        <p className="font-body text-[#5a5e64] mb-10 max-w-sm mx-auto">
          But your foundation doesn&apos;t have to. Let&apos;s get you back on solid ground.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-[12px] bg-[#b01e24] text-white font-body font-semibold text-sm hover:bg-[#7e1419] transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-[12px] border-2 border-[#3a3d42] text-[#22242a] font-body font-semibold text-sm hover:bg-[#3a3d42] hover:text-white transition-all"
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:7636881248"
            className="inline-flex items-center gap-1.5 text-sm font-body font-medium text-[#b01e24] hover:text-[#7e1419] transition-colors"
          >
            <Phone size={15} />
            (763) 688-1248
          </a>
        </div>
      </div>
    </section>
  );
}
