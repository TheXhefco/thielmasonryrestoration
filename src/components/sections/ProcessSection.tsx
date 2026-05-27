"use client";

import { motion } from "framer-motion";
import { Phone, FileText, Calendar, CheckCircle } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Call or Request a Quote",
    desc: "Reach out by phone or our online form. Dustin answers personally and responds fast.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Dustin Visits & Quotes",
    desc: "He comes to your property, assesses the damage, and gives you an honest, no-pressure estimate.",
  },
  {
    number: "03",
    icon: Calendar,
    title: "Scheduled for Proper Weather",
    desc: "Work is timed for the right outdoor temps — because masonry cure requires patience, not shortcuts.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Restored & Built to Last",
    desc: "The job is done right, to last. No patchwork. No cutting corners. Craftsmanship you can see.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-[#faf7f2]" aria-label="How it works">
      <div className="container-content">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <SectionEyebrow text="HOW IT WORKS" center className="mb-5" />
          <motion.h2
            className="font-display text-h2 font-bold text-[#22242a]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Simple. Honest. Done right.
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-[#d8d0c4]" aria-hidden="true">
            <div className="absolute left-0 right-0 top-0 h-full bg-gradient-to-r from-[#c8a06a] via-[#c8a06a] to-[#d8d0c4]" />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center gap-4 relative"
            >
              {/* Number circle */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-[#faf7f2] border-2 border-[#d8d0c4] flex items-center justify-center flex-shrink-0 shadow-[0_1px_2px_rgba(34,36,42,0.06)]">
                <div className="flex flex-col items-center">
                  <step.icon size={22} className="text-[#b01e24] mb-0.5" />
                </div>
              </div>

              <div>
                <span className="font-heraldic text-xs font-bold text-[#c8a06a] tracking-widest mb-2 block">
                  {step.number}
                </span>
                <h3 className="font-subhead font-semibold text-[#22242a] mb-2" style={{ fontSize: "1.0625rem", lineHeight: "1.3" }}>
                  {step.title}
                </h3>
                <p className="font-body text-sm text-[#5a5e64] leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
