"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Review } from "@/lib/data/reviews";
import { StarRating } from "./StarRating";

interface ReviewCardProps {
  review: Review;
  index?: number;
}

export function ReviewCard({ review, index = 0 }: ReviewCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24, x: index % 2 === 0 ? -8 : 8 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className="bg-white rounded-[12px] p-6 flex flex-col gap-4 shadow-[0_1px_2px_rgba(34,36,42,0.06)] hover:shadow-[0_4px_12px_rgba(34,36,42,0.10)] transition-shadow duration-300 border border-[#d8d0c4] border-t-2 border-t-[#c8a06a]"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#e7e0d6] flex items-center justify-center flex-shrink-0">
            <span className="font-heraldic text-[#b01e24] font-semibold text-sm">
              {review.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <p className="font-body font-semibold text-[#22242a] text-sm leading-tight">{review.name}</p>
            {review.credential && (
              <p className="text-[#8a8d91] text-xs mt-0.5">{review.credential}</p>
            )}
            <p className="text-[#8a8d91] text-xs">{review.reviewCount}</p>
          </div>
        </div>
        {/* Google G mark */}
        <svg width="20" height="20" viewBox="0 0 24 24" className="flex-shrink-0 opacity-60">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
      </div>

      {/* Stars + date */}
      <div className="flex items-center justify-between">
        <StarRating rating={review.rating} size={14} />
        <span className="text-[#8a8d91] text-xs font-body">{review.date}</span>
      </div>

      {/* Quote text */}
      <div className="relative">
        <Quote size={18} className="text-[#c8a06a] opacity-40 absolute -top-1 -left-1" />
        <p className="font-body text-[#5a5e64] text-sm leading-relaxed pl-5">{review.text}</p>
      </div>
    </motion.article>
  );
}
