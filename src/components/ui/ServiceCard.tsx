"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceIcon } from "@/components/icons/ServiceIcons";

interface ServiceCardProps {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  iconName: string;
  index?: number;
  featured?: boolean;
}

export function ServiceCard({ slug, title, shortDesc, iconName, index = 0, featured = false }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, x: index % 2 === 0 ? -8 : 8 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    >
      <Link
        href={`/services#${slug}`}
        className={[
          "group flex flex-col gap-4 p-6 rounded-[12px] bg-white border transition-all duration-300",
          "hover:shadow-[0_4px_12px_rgba(34,36,42,0.10)] hover:-translate-y-1",
          featured
            ? "border-[#c8a06a] border-t-2 shadow-[0_1px_2px_rgba(34,36,42,0.06)]"
            : "border-[#d8d0c4] border-t-2 border-t-transparent hover:border-t-[#c8a06a] shadow-[0_1px_2px_rgba(34,36,42,0.06)]",
        ].join(" ")}
      >
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-[8px] bg-[#faf7f2] text-[#8a8d91] group-hover:text-[#b01e24] group-hover:bg-[#fdf0ef] transition-colors duration-300">
          <ServiceIcon name={iconName} size={28} />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="font-subhead font-semibold text-[#22242a] group-hover:text-[#b01e24] transition-colors duration-300" style={{ fontSize: "1.125rem", lineHeight: "1.3" }}>
            {title}
          </h3>
          <p className="font-body text-[#5a5e64] text-sm leading-relaxed flex-1">{shortDesc}</p>
        </div>

        {/* Link */}
        <div className="flex items-center gap-1.5 text-[#b01e24] text-sm font-semibold font-body group-hover:gap-2.5 transition-all duration-200">
          <span>Learn more</span>
          <ArrowRight size={14} />
        </div>
      </Link>
    </motion.div>
  );
}
