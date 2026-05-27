"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}

export function StatCounter({
  value,
  label,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1200,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const [displayValue, setDisplayValue] = useState("0");
  const numericValue = parseFloat(value);

  useEffect(() => {
    if (!isInView) return;

    const start = performance.now();
    const update = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * numericValue;
      setDisplayValue(current.toFixed(decimals));
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [isInView, numericValue, decimals, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="font-heraldic text-[#b01e24] font-bold" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <p className="font-body text-[#5a5e64] text-sm text-center leading-tight max-w-[120px]">{label}</p>
    </div>
  );
}
