"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { FilterChip } from "@/components/ui/FilterChip";
import { StatCounter } from "@/components/ui/StatCounter";
import { FinalCTABand } from "@/components/sections/FinalCTABand";
import { reviews, reviewTags } from "@/lib/data/reviews";

export default function ReviewsPage() {
  const [activeTag, setActiveTag] = useState("all");

  const filtered =
    activeTag === "all"
      ? reviews
      : reviews.filter((r) => r.tags.includes(activeTag));

  return (
    <>
      {/* Header */}
      <section className="bg-[#22242a] pt-32 pb-16">
        <div className="container-content">
          <div className="text-center mb-12">
            <SectionEyebrow text="WHAT CUSTOMERS SAY" center className="mb-5" />
            <div className="flex items-center justify-center gap-4 mb-4">
              <span
                className="font-heraldic font-bold text-[#c8a06a]"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1 }}
              >
                5.0
              </span>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} className="fill-[#c8a06a] text-[#c8a06a]" />
                  ))}
                </div>
                <p className="font-body text-[#8a8d91] text-sm">Based on 7 Google reviews</p>
              </div>
            </div>

            {/* Distribution bars */}
            <div className="max-w-xs mx-auto flex flex-col gap-2 mb-8">
              {[5, 4, 3, 2, 1].map((star) => (
                <motion.div
                  key={star}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (5 - star) * 0.08 }}
                >
                  <span className="font-body text-xs text-[#8a8d91] w-4 text-right">{star}</span>
                  <Star size={11} className="text-[#c8a06a] fill-[#c8a06a] flex-shrink-0" />
                  <div className="flex-1 h-1.5 rounded-full bg-[#3a3d42] overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-[#b01e24]"
                      initial={{ width: 0 }}
                      whileInView={{ width: star === 5 ? "100%" : "0%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + (5 - star) * 0.08 }}
                    />
                  </div>
                  <span className="font-body text-xs text-[#8a8d91] w-4">{star === 5 ? "7" : "0"}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="https://g.page/r/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[12px] border-2 border-[#3a3d42] text-[#faf7f2] font-body font-semibold text-sm hover:border-[#8a8d91] transition-colors"
            >
              <ExternalLink size={15} />
              Write a Review
            </Link>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-[#faf7f2] py-8 border-b border-[#d8d0c4]">
        <div className="container-content">
          <div className="flex flex-wrap gap-2 justify-center">
            {reviewTags.map((tag) => (
              <FilterChip
                key={tag.value}
                label={tag.label}
                count={tag.value !== "all" ? tag.count : undefined}
                active={activeTag === tag.value}
                onClick={() => setActiveTag(tag.value)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="section-padding bg-[#faf7f2]">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((review, i) => (
              <ReviewCard key={review.id} review={review} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center font-body text-[#8a8d91] py-12">
              No reviews match this filter.
            </p>
          )}
        </div>
      </section>

      {/* CTA band */}
      <section
        className="relative py-16"
        style={{ background: "linear-gradient(135deg, #b01e24 0%, #7e1419 100%)" }}
      >
        <div className="container-content text-center">
          <h2 className="font-display text-h3 font-bold text-white mb-4">
            Join our happy customers.
          </h2>
          <p className="font-body text-[#ffc4bf] mb-7 max-w-sm mx-auto">
            Get a free quote today — no pressure, no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-[12px] bg-white text-[#b01e24] font-body font-semibold text-sm hover:bg-[#faf7f2] transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:7636881248"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[12px] border-2 border-white/40 text-white font-body font-semibold text-sm hover:border-white/80 transition-colors"
            >
              (763) 688-1248
            </a>
          </div>
        </div>
      </section>

      <FinalCTABand />
    </>
  );
}
