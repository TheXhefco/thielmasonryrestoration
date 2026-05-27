"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { primaryCities } from "@/lib/data/serviceArea";

export function ServiceAreaSnippet() {
  return (
    <section className="section-padding bg-[#faf7f2]" aria-label="Service area">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map illustration */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="bg-[#e7e0d6] rounded-[20px] aspect-[4/3] flex items-center justify-center overflow-hidden">
              {/* SVG map illustration */}
              <svg
                viewBox="0 0 400 320"
                className="w-full h-full p-8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background */}
                <rect width="400" height="320" fill="#e7e0d6" />
                {/* MN state outline (simplified) */}
                <path
                  d="M80 20 L320 20 L320 140 L280 180 L280 220 L240 240 L220 260 L200 300 L180 260 L120 260 L100 240 L80 180 L60 140 L60 60 Z"
                  fill="#d8d0c4"
                  stroke="#8a8d91"
                  strokeWidth="2"
                />
                {/* Service area highlight */}
                <ellipse cx="190" cy="150" rx="90" ry="70" fill="#b01e24" fillOpacity="0.12" />
                <ellipse cx="190" cy="150" rx="90" ry="70" stroke="#b01e24" strokeWidth="1.5" strokeDasharray="6 3" />

                {/* City pins */}
                {[
                  { x: 190, y: 148, label: "Becker", primary: true },
                  { x: 155, y: 168, label: "Annandale" },
                  { x: 220, y: 128, label: "St. Cloud" },
                  { x: 165, y: 188, label: "Buffalo" },
                  { x: 202, y: 162, label: "Monticello" },
                  { x: 210, y: 178, label: "Elk River" },
                ].map((pin) => (
                  <g key={pin.label}>
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r={pin.primary ? 8 : 5}
                      fill={pin.primary ? "#b01e24" : "#c8a06a"}
                    />
                    {pin.primary && (
                      <circle cx={pin.x} cy={pin.y} r={12} fill="#b01e24" fillOpacity="0.2" />
                    )}
                    <text
                      x={pin.x + (pin.primary ? 12 : 8)}
                      y={pin.y + 4}
                      fill="#3a3d42"
                      fontSize={pin.primary ? 11 : 9}
                      fontWeight={pin.primary ? "bold" : "normal"}
                    >
                      {pin.label}
                    </text>
                  </g>
                ))}

                {/* Legend */}
                <g>
                  <circle cx="55" cy="290" r="5" fill="#b01e24" />
                  <text x="65" y="294" fill="#5a5e64" fontSize="10">Home base</text>
                  <circle cx="150" cy="290" r="5" fill="#c8a06a" />
                  <text x="160" y="294" fill="#5a5e64" fontSize="10">Service area</text>
                </g>
              </svg>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <SectionEyebrow text="SERVICE AREA" />
            <h2 className="font-display text-h2 font-bold text-[#22242a]">
              Proudly serving Central Minnesota.
            </h2>
            <p className="font-body text-[#5a5e64]">
              Based in Becker, MN — Dustin travels throughout the Minneapolis metro and Central Minnesota region for the right project.
            </p>

            {/* City tags */}
            <div className="flex flex-wrap gap-2">
              {primaryCities.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-[6px] bg-[#e7e0d6] text-[#3a3d42] text-sm font-body font-medium"
                >
                  <MapPin size={11} className="text-[#b01e24]" />
                  {city}
                </span>
              ))}
            </div>

            {/* Reassurance + CTA */}
            <div className="flex flex-col gap-4">
              <p className="font-body text-sm text-[#5a5e64] italic">
                "Not sure if you're in range? Just call."
              </p>
              <a
                href="tel:7636881248"
                className="inline-flex items-center gap-2 bg-[#b01e24] text-white font-body font-semibold text-sm px-6 py-3 rounded-[12px] hover:bg-[#7e1419] transition-colors w-fit"
              >
                <Phone size={15} />
                (763) 688-1248
              </a>
              <Link
                href="/service-area"
                className="font-body text-sm text-[#b01e24] hover:text-[#7e1419] flex items-center gap-1 transition-colors"
              >
                View full service area →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
