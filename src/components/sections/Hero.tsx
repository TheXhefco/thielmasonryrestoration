"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Star, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

const heroImages = [
  {
    src: "/images/305767575_392436556406058_1142528663414251542_n.jpg",
    alt: "Brick house chimney restoration with scaffolding — Thiel Masonry",
  },
  {
    src: "/images/468325849_886926883615568_3787408909199281843_n.jpg",
    alt: "Completed brick chimney rebuild — Thiel Masonry Restoration",
  },
  {
    src: "/images/203382862_115495654092032_6024570810460858068_n.jpg",
    alt: "Hand-laid natural stone wall — Thiel Masonry Restoration",
  },
  {
    src: "/images/441154321_758148796501497_8291900822432693272_n.jpg",
    alt: "Cultured stone veneer installation complete",
  },
  {
    src: "/images/487477762_980368524279522_2511297735243838257_n.jpg",
    alt: "Stone chimney and exterior restoration complete",
  },
  {
    src: "/images/474051187_923667549941501_8752436248307950729_n.jpg",
    alt: "Masonry crew rebuilding chimney on residential roof",
  },
  {
    src: "/images/202375480_115495457425385_1494219477211291981_n.jpg",
    alt: "Completed brick chimney rebuild — Thiel Masonry",
  },
  {
    src: "/images/438118138_758148753168168_3754698127576438807_n.jpg",
    alt: "Stone exterior completed — Thiel Masonry Restoration on site",
  },
  {
    src: "/images/488249778_980368314279543_7690558026773507627_n.jpg",
    alt: "Fresh chimney repair on rooftop — Becker MN",
  },
];

const INTERVAL_MS = 5000;

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[88vh] flex items-center overflow-hidden bg-[#22242a]"
      aria-label="Hero"
    >
      {/* Parallax wrapper */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        {/* Crossfade carousel */}
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            <Image
              src={heroImages[currentIndex].src}
              alt={heroImages[currentIndex].alt}
              fill
              priority={currentIndex === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(34,36,42,0.78) 0%, rgba(34,36,42,0.40) 60%, rgba(34,36,42,0.72) 100%)",
        }}
      />

      {/* Subtle brick texture */}
      <div className="absolute inset-0 brick-texture-overlay" />

      {/* Content */}
      <div className="container-content relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="hairline-wood" />
            <span className="text-eyebrow text-[#c8a06a]">
              MASONRY RESTORATION · CENTRAL MINNESOTA
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="font-display text-display-xl font-bold text-[#faf7f2] mb-6 leading-none"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            Masonry Restored.
            <br />
            <em className="not-italic text-[#c8a06a]">Built to Last.</em>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            className="font-body text-body-l text-[#d8d0c4] mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Foundation, block & chimney repair done right — by the mason who says yes when others won't. Serving Minneapolis & Central Minnesota.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button href="/contact" size="lg">
              Get a Free Quote
            </Button>
            <Button href="/projects" variant="ghost" size="lg">
              See Our Work
            </Button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#c8a06a] text-[#c8a06a]" />
                ))}
              </div>
              <span className="font-heraldic text-[#faf7f2] text-sm font-semibold">5.0</span>
            </div>
            <span className="text-[#8a8d91] text-sm">·</span>
            <span className="font-body text-sm text-[#d8d0c4]">7 Google Reviews</span>
            <span className="text-[#8a8d91] text-sm">·</span>
            <span className="font-body text-sm text-[#d8d0c4]">Residential & Commercial</span>
            <span className="text-[#8a8d91] text-sm">·</span>
            <span className="font-body text-sm text-[#d8d0c4]">Free Quotes</span>
          </motion.div>
        </div>
      </div>

      {/* Carousel dot indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300"
          >
            <span
              className={[
                "block rounded-full transition-all duration-300",
                i === currentIndex
                  ? "w-6 h-1.5 bg-[#c8a06a]"
                  : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70",
              ].join(" ")}
            />
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-[#8a8d91]"
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
