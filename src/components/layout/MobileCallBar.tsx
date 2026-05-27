"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export function MobileCallBar() {
  return (
    <motion.div
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#faf7f2] border-t border-[#d8d0c4] shadow-[0_-4px_12px_rgba(34,36,42,0.08)]"
    >
      <div className="grid grid-cols-2 divide-x divide-[#d8d0c4]">
        <a
          href="tel:7636881248"
          className="flex items-center justify-center gap-2 py-4 font-body font-semibold text-sm text-[#22242a] hover:bg-[#e7e0d6] transition-colors active:bg-[#d8d0c4]"
          aria-label="Call Thiel Masonry Restoration"
        >
          <Phone size={16} className="text-[#b01e24]" />
          Call Dustin
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 py-4 bg-[#b01e24] font-body font-semibold text-sm text-white hover:bg-[#7e1419] transition-colors active:bg-[#7e1419]"
        >
          Free Quote
        </Link>
      </div>
    </motion.div>
  );
}
