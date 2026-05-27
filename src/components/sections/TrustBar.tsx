"use client";

import { StatCounter } from "@/components/ui/StatCounter";

export function TrustBar() {
  return (
    <section className="bg-[#e7e0d6] py-12 md:py-16" aria-label="Trust statistics">
      <div className="container-content">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <StatCounter value="5.0" label="Star Google Rating" suffix="★" decimals={1} />
          <StatCounter value="7" label="Five-Star Reviews" />
          <StatCounter value="25" label="Towns Served in Central MN" suffix="+" />
          <div className="flex flex-col items-center gap-2">
            <div
              className="font-heraldic text-[#b01e24] font-bold"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
            >
              Free
            </div>
            <p className="font-body text-[#5a5e64] text-sm text-center leading-tight max-w-[120px]">On-Site Quotes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
