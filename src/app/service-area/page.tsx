import type { Metadata } from "next";
import { Phone, MapPin, CheckCircle } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { FinalCTABand } from "@/components/sections/FinalCTABand";
import { primaryCities, surroundingCities, counties } from "@/lib/data/serviceArea";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "Thiel Masonry Restoration serves Becker, Annandale, St. Cloud, Buffalo, Monticello, Big Lake, Elk River, and all of Central Minnesota. Call (763) 688-1248.",
};

const faqs = [
  {
    q: "Do you travel outside Sherburne County?",
    a: "Yes. Dustin regularly travels throughout Wright County, Stearns County, Benton County, and the northern Hennepin County area. If you're within reasonable distance of Becker, call and ask.",
  },
  {
    q: "I'm in Minneapolis — do you serve the metro?",
    a: "The northern metro (Elk River, Rogers, Maple Grove corridor and north) is well within range. Call (763) 688-1248 to confirm.",
  },
  {
    q: "What if I'm not on this list?",
    a: "This list isn't exhaustive. If you have a project, call or fill out the contact form. Dustin will let you know honestly whether he can make it work.",
  },
  {
    q: "Is there an extra charge for travel?",
    a: "For most projects in the service area, no. Dustin builds travel into his pricing fairly — and you'll know exactly what you're getting before any work starts.",
  },
];

export default function ServiceAreaPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#22242a] pt-32 pb-16">
        <div className="container-content text-center">
          <SectionEyebrow text="WHERE WE WORK" center className="mb-5" />
          <h1 className="font-display text-display-l font-bold text-[#faf7f2] mb-4">
            Proudly serving Central Minnesota.
          </h1>
          <p className="font-body text-[#8a8d91] max-w-xl mx-auto">
            Based in Becker, MN — Dustin travels throughout the Minneapolis metro and Central Minnesota for the right masonry project.
          </p>
        </div>
      </section>

      {/* Map + cities */}
      <section className="section-padding bg-[#faf7f2]">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map illustration */}
            <div className="bg-[#e7e0d6] rounded-[20px] p-8 flex items-center justify-center">
              <svg
                viewBox="0 0 400 400"
                className="w-full max-w-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="400" height="400" fill="#e7e0d6" rx="12" />
                {/* MN outline */}
                <path
                  d="M80 30 L320 30 L320 180 L290 220 L290 280 L250 310 L230 350 L200 380 L170 350 L130 350 L110 310 L90 280 L80 220 L60 180 L60 80 Z"
                  fill="#d8d0c4"
                  stroke="#8a8d91"
                  strokeWidth="2"
                />
                {/* Highways */}
                <line x1="80" y1="200" x2="320" y2="200" stroke="#b0a89a" strokeWidth="1.5" strokeDasharray="8 4" />
                <line x1="200" y1="30" x2="200" y2="380" stroke="#b0a89a" strokeWidth="1.5" strokeDasharray="8 4" />

                {/* Service area ellipse */}
                <ellipse cx="195" cy="200" rx="120" ry="90" fill="#b01e24" fillOpacity="0.10" />
                <ellipse cx="195" cy="200" rx="120" ry="90" stroke="#b01e24" strokeWidth="2" strokeDasharray="8 4" />

                {/* Pins */}
                {[
                  { x: 195, y: 195, label: "Becker", primary: true },
                  { x: 155, y: 225, label: "Annandale", primary: false },
                  { x: 230, y: 165, label: "St. Cloud", primary: false },
                  { x: 170, y: 245, label: "Buffalo", primary: false },
                  { x: 208, y: 215, label: "Monticello", primary: false },
                  { x: 220, y: 240, label: "Elk River", primary: false },
                  { x: 248, y: 255, label: "Minneapolis", primary: false },
                  { x: 188, y: 178, label: "Big Lake", primary: false },
                ].map((pin) => (
                  <g key={pin.label}>
                    {pin.primary && (
                      <circle cx={pin.x} cy={pin.y} r={16} fill="#b01e24" fillOpacity="0.15" />
                    )}
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r={pin.primary ? 8 : 5}
                      fill={pin.primary ? "#b01e24" : "#c8a06a"}
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <text
                      x={pin.x + (pin.primary ? 13 : 9)}
                      y={pin.y + 4}
                      fill="#22242a"
                      fontSize={pin.primary ? 11 : 9}
                      fontWeight={pin.primary ? "700" : "400"}
                    >
                      {pin.label}
                    </text>
                  </g>
                ))}

                {/* Legend */}
                <rect x="20" y="358" width="160" height="32" rx="6" fill="white" fillOpacity="0.6" />
                <circle cx="35" cy="374" r="5" fill="#b01e24" />
                <text x="45" y="378" fill="#5a5e64" fontSize="9">Home base</text>
                <circle cx="100" cy="374" r="5" fill="#c8a06a" />
                <text x="110" y="378" fill="#5a5e64" fontSize="9">Served cities</text>
              </svg>
            </div>

            {/* City lists */}
            <div className="flex flex-col gap-8">
              {/* Primary */}
              <div>
                <h2 className="font-display text-h3 font-bold text-[#22242a] mb-5">
                  Primary Service Areas
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {primaryCities.map((city) => (
                    <div key={city} className="flex items-center gap-2 bg-[#e7e0d6] rounded-[8px] px-3 py-2">
                      <MapPin size={13} className="text-[#b01e24] flex-shrink-0" />
                      <span className="font-body text-sm text-[#3a3d42] font-medium">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Surrounding */}
              <div>
                <h3 className="font-heraldic text-sm font-semibold text-[#c8a06a] tracking-wider uppercase mb-4">
                  Also Serving
                </h3>
                <div className="flex flex-wrap gap-2">
                  {surroundingCities.map((city) => (
                    <span
                      key={city}
                      className="font-body text-sm text-[#5a5e64] bg-[#faf7f2] border border-[#d8d0c4] rounded-[6px] px-3 py-1"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Counties */}
              <div>
                <h3 className="font-heraldic text-sm font-semibold text-[#c8a06a] tracking-wider uppercase mb-4">
                  Counties Covered
                </h3>
                <div className="flex flex-col gap-2">
                  {counties.map((county) => (
                    <div key={county} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-[#b01e24]" />
                      <span className="font-body text-sm text-[#3a3d42]">{county}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#e7e0d6] rounded-[12px] p-5">
                <p className="font-subhead font-medium text-[#22242a] mb-2">
                  Not sure if you&apos;re in range?
                </p>
                <p className="font-body text-sm text-[#5a5e64] mb-4">Just call — Dustin will tell you honestly.</p>
                <a
                  href="tel:7636881248"
                  className="inline-flex items-center gap-2 bg-[#b01e24] text-white font-body font-semibold text-sm px-5 py-2.5 rounded-[10px] hover:bg-[#7e1419] transition-colors"
                >
                  <Phone size={14} />
                  (763) 688-1248
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#e7e0d6]">
        <div className="container-content max-w-2xl">
          <SectionEyebrow text="COMMON QUESTIONS" className="mb-5" />
          <h2 className="font-display text-h2 font-bold text-[#22242a] mb-10">
            About our service area
          </h2>
          <div className="flex flex-col gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-[12px] p-6 shadow-[0_1px_2px_rgba(34,36,42,0.06)] border border-[#d8d0c4]">
                <h3 className="font-subhead font-semibold text-[#22242a] mb-2">{faq.q}</h3>
                <p className="font-body text-sm text-[#5a5e64] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO copy */}
      <section className="py-12 bg-[#faf7f2]">
        <div className="container-content max-w-2xl">
          <p className="font-body text-sm text-[#8a8d91] leading-relaxed">
            Thiel Masonry Restoration provides masonry restoration, foundation repair, chimney repair, tuck pointing, and mortar repair services to homeowners and commercial property owners in{" "}
            {primaryCities.join(", ")}, and surrounding communities in Sherburne, Wright, Stearns, and Benton counties. Call (763) 688-1248 or fill out our contact form to get started.
          </p>
        </div>
      </section>

      <FinalCTABand />
    </>
  );
}
