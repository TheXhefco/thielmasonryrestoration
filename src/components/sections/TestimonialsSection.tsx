"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { reviews } from "@/lib/data/reviews";

export function TestimonialsSection() {
  const featured = reviews.slice(0, 3);
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i - 1 + featured.length) % featured.length);
  const next = () => setActiveIndex((i) => (i + 1) % featured.length);

  return (
    <section className="section-padding bg-[#22242a]" aria-label="Customer reviews">
      <div className="container-content">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <SectionEyebrow text="WHAT NEIGHBORS SAY" center className="mb-5" />
          <motion.h2
            className="font-display text-h2 font-bold text-[#faf7f2] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            5.0 stars. Every time.
          </motion.h2>
          <motion.p
            className="font-body text-[#8a8d91]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Real reviews from real Central Minnesota homeowners and property owners.
          </motion.p>
        </div>

        {/* Desktop: 3-up grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-10">
          {featured.map((review, i) => (
            <ReviewCard key={review.id} review={review} index={i} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden mb-10">
          <div className="relative overflow-hidden rounded-[12px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <ReviewCard review={featured[activeIndex]} index={0} />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full border border-[#3a3d42] flex items-center justify-center text-[#8a8d91] hover:text-[#faf7f2] hover:border-[#8a8d91] transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${i === activeIndex ? "bg-[#c8a06a]" : "bg-[#3a3d42]"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next review"
              className="w-10 h-10 rounded-full border border-[#3a3d42] flex items-center justify-center text-[#8a8d91] hover:text-[#faf7f2] hover:border-[#8a8d91] transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Link to all reviews */}
        <div className="flex justify-center">
          <Link
            href="/reviews"
            className="font-body text-sm font-semibold text-[#c8a06a] hover:text-[#faf7f2] flex items-center gap-1.5 transition-colors group"
          >
            Read all 7 reviews
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
