"use client";

import { Star } from "lucide-react";

interface StarRatingProps {
  rating?: number;
  size?: number;
  className?: string;
}

export function StarRating({ rating = 5, size = 16, className = "" }: StarRatingProps) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? "fill-[#c8a06a] text-[#c8a06a]" : "text-[#d8d0c4]"}
        />
      ))}
    </div>
  );
}
