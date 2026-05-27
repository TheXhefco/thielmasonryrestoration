"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function WeSayYesBand() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-24"
      style={{
        background: "linear-gradient(135deg, #b01e24 0%, #7e1419 100%)",
      }}
      aria-label="Why Thiel Masonry"
    >
      {/* Brick texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='58' height='12' rx='2' fill='%23ffffff'/%3E%3Crect x='30' y='16' width='58' height='12' rx='2' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 30px",
        }}
      />

      {/* Crest watermark */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none hidden lg:block">
        <svg width="300" height="320" viewBox="0 0 100 110" fill="white">
          <path d="M50 5 L85 20 L85 60 Q85 90 50 105 Q15 90 15 60 L15 20 Z" />
        </svg>
      </div>

      <div className="container-content relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="hairline-wood opacity-60" />
              <span className="text-eyebrow text-[#c8a06a]">THE THIEL DIFFERENCE</span>
              <span className="hairline-wood opacity-60" />
            </div>

            {/* Pull quote */}
            <blockquote
              className="font-subhead text-white mb-6"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: "1.3", fontWeight: 500 }}
            >
              "When other contractors said no,{" "}
              <em className="text-[#ffd399] not-italic font-semibold">Dustin said yes.</em>"
            </blockquote>

            <p className="font-body text-[#ffc4bf] mb-10 max-w-xl mx-auto" style={{ fontSize: "1.0625rem", lineHeight: "1.65" }}>
              Badly deteriorated foundations. Bowing block walls. Jobs that other contractors walk away from. Dustin takes them on — because he has the skill, the patience, and the pride in craft to do what others won't.
            </p>

            <Button href="/contact" variant="ghost" size="lg">
              Tell Us About Your Project
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
