"use client";

import { motion } from "framer-motion";

interface SectionEyebrowProps {
  text: string;
  className?: string;
  center?: boolean;
}

export function SectionEyebrow({ text, className = "", center = false }: SectionEyebrowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-3 ${center ? "justify-center" : ""} ${className}`}
    >
      <span className="hairline-wood" />
      <span className="text-eyebrow text-[#c8a06a]">{text}</span>
      <span className="hairline-wood" />
    </motion.div>
  );
}
