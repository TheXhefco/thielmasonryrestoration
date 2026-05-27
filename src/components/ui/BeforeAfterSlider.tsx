"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className = "",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => { isDragging.current = true; };
  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };
  const onMouseUp = () => { isDragging.current = false; };
  const onTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 2));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 2));
  };

  useEffect(() => {
    const up = () => { isDragging.current = false; };
    window.addEventListener("mouseup", up);
    return () => window.removeEventListener("mouseup", up);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-[20px] cursor-ew-resize select-none ${className}`}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchMove={onTouchMove}
      role="slider"
      aria-label="Before and after comparison slider"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {/* After image (base) */}
      <div className="relative aspect-[4/3] w-full">
        <Image src={afterSrc} alt={afterAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-[#22242a]/80 text-[#faf7f2] text-xs font-heraldic px-3 py-1 rounded-[6px] tracking-wider uppercase">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-[#b01e24]/90 text-white text-xs font-heraldic px-3 py-1 rounded-[6px] tracking-wider uppercase">
        After
      </div>

      {/* Handle line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/90 pointer-events-none"
        style={{ left: `${position}%` }}
      />

      {/* Handle grip */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-[0_4px_12px_rgba(34,36,42,0.20)] flex items-center justify-center pointer-events-none border-2 border-[#c8a06a]"
        style={{ left: `${position}%` }}
      >
        <ChevronsLeftRight size={18} className="text-[#3a3d42]" />
      </div>
    </div>
  );
}
