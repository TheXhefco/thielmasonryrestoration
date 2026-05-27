import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your quote request has been received. Dustin will be in touch soon.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  "Dustin will personally review your request",
  "Expect a callback within 1 business day",
  "He'll ask a few questions about your project",
  "You'll receive an honest, no-pressure quote",
];

export default function ThankYouPage() {
  return (
    <section className="min-h-screen bg-[#faf7f2] flex items-center justify-center pt-24 pb-16">
      <div className="container-content max-w-lg text-center">
        {/* Icon */}
        <div className="w-24 h-24 rounded-full bg-[#e7e0d6] flex items-center justify-center mx-auto mb-8">
          <CheckCircle size={44} className="text-[#b01e24]" />
        </div>

        {/* Headline */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="hairline-wood" />
          <span className="text-eyebrow text-[#c8a06a]">QUOTE REQUEST RECEIVED</span>
          <span className="hairline-wood" />
        </div>

        <h1 className="font-display text-display-l font-bold text-[#22242a] mb-4">
          Thanks! Dustin will call you shortly.
        </h1>

        <p className="font-body text-[#5a5e64] mb-10">
          Your quote request is in. Dustin personally handles every project inquiry — you'll hear from him soon.
        </p>

        {/* Next steps */}
        <div className="bg-white rounded-[12px] p-6 border border-[#d8d0c4] shadow-[0_1px_2px_rgba(34,36,42,0.06)] mb-8 text-left">
          <h2 className="font-heraldic text-sm font-semibold text-[#c8a06a] tracking-wider uppercase mb-4">
            What Happens Next
          </h2>
          <div className="flex flex-col gap-3">
            {nextSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#b01e24]/10 text-[#b01e24] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-heraldic font-bold">
                  {i + 1}
                </div>
                <p className="font-body text-sm text-[#3a3d42]">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fallback CTA */}
        <div className="flex flex-col gap-3">
          <p className="font-body text-sm text-[#5a5e64]">Can&apos;t wait? Call directly:</p>
          <a
            href="tel:7636881248"
            className="inline-flex items-center justify-center gap-2 bg-[#b01e24] text-white font-body font-semibold px-7 py-3.5 rounded-[12px] hover:bg-[#7e1419] transition-colors mx-auto"
          >
            <Phone size={16} />
            (763) 688-1248
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-1 font-body text-sm text-[#b01e24] hover:text-[#7e1419] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
