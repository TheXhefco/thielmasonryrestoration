"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, MouseEvent, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-base",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#b01e24] text-[#faf7f2] hover:bg-[#7e1419] active:translate-y-0.5 shadow-[0_0_0_0_rgba(200,160,106,0)] hover:shadow-[0_0_20px_4px_rgba(200,160,106,0.35)] transition-all",
  secondary:
    "bg-transparent text-[#22242a] border-2 border-[#3a3d42] hover:bg-[#3a3d42] hover:text-[#faf7f2] transition-all",
  ghost:
    "bg-transparent text-[#faf7f2] border-2 border-[rgba(250,247,242,0.5)] hover:border-[#faf7f2] hover:bg-[rgba(250,247,242,0.08)] transition-all",
  outline:
    "bg-transparent text-[#b01e24] border-2 border-[#b01e24] hover:bg-[#b01e24] hover:text-[#faf7f2] transition-all",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  fullWidth = false,
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  function handleMouseMove(e: MouseEvent) {
    if (variant !== "primary" || disabled) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.15;
    const dy = (e.clientY - cy) * 0.15;
    x.set(dx);
    y.set(dy);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const baseClasses = [
    "inline-flex items-center justify-center gap-2 font-body font-semibold rounded-[12px] cursor-pointer select-none",
    "focus-visible:outline focus-visible:outline-3 focus-visible:outline-[#b01e24] focus-visible:outline-offset-2",
    sizeClasses[size],
    variantClasses[variant],
    fullWidth ? "w-full" : "",
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      style={variant === "primary" ? { x: springX, y: springY } : {}}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.button>
  );
}
