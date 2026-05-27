"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FinalCTABand() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 bg-[#22242a]"
      aria-label="Get a free quote"
    >
      {/* Crest watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <svg width="500" height="540" viewBox="0 0 100 110" fill="white" opacity="0.02">
          <path d="M50 5 L85 20 L85 60 Q85 90 50 105 Q15 90 15 60 L15 20 Z" />
          <path d="M40 30 L60 30 L65 50 L50 65 L35 50 Z" />
        </svg>
      </div>

      {/* Brick texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='58' height='12' rx='2' fill='%23ffffff'/%3E%3Crect x='30' y='16' width='58' height='12' rx='2' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 30px",
        }}
      />

      <div className="container-content relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="hairline-wood opacity-40" />
            <span className="text-eyebrow text-[#c8a06a]">READY TO RESTORE</span>
            <span className="hairline-wood opacity-40" />
          </div>

          <h2 className="font-display text-h2 font-bold text-[#faf7f2] mb-6 max-w-2xl mx-auto">
            Got a problem others won't touch?
          </h2>

          <p className="font-body text-[#8a8d91] mb-10 max-w-md mx-auto">
            Fast callbacks. Honest quotes. No pressure.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              Get a Free Quote
            </Button>
            <a
              href="tel:7636881248"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-[12px] border-2 border-[#3a3d42] text-[#faf7f2] font-body font-semibold text-base hover:border-[#8a8d91] hover:text-white transition-all duration-200"
            >
              <Phone size={17} />
              (763) 688-1248
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
