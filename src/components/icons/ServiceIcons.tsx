"use client";

import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const defaultProps = (size: number = 32): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function MasonryIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props}>
      <rect x="4" y="20" width="10" height="6" rx="1" />
      <rect x="16" y="20" width="10" height="6" rx="1" />
      <rect x="9" y="13" width="12" height="6" rx="1" />
      <rect x="4" y="6" width="8" height="6" rx="1" />
      <rect x="14" y="6" width="12" height="6" rx="1" />
      <line x1="4" y1="20" x2="4" y2="12" strokeOpacity="0.3" />
    </svg>
  );
}

export function FoundationIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props}>
      <path d="M4 26 L16 8 L28 26 Z" />
      <line x1="4" y1="26" x2="28" y2="26" />
      <rect x="10" y="18" width="12" height="8" rx="1" />
      <line x1="16" y1="26" x2="16" y2="30" />
      <line x1="6" y1="30" x2="26" y2="30" />
    </svg>
  );
}

export function ChimneyIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props}>
      <rect x="10" y="4" width="12" height="24" rx="1" />
      <rect x="8" y="10" width="16" height="2" rx="1" />
      <path d="M13 4 C13 1 19 1 19 4" />
      <line x1="13" y1="9" x2="13" y2="28" strokeOpacity="0.3" />
      <line x1="19" y1="9" x2="19" y2="28" strokeOpacity="0.3" />
      <path d="M14 2 Q16 0 18 2" strokeWidth="1" />
    </svg>
  );
}

export function TuckPointingIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props}>
      <rect x="4" y="6" width="24" height="5" rx="0.5" />
      <rect x="4" y="14" width="24" height="5" rx="0.5" />
      <rect x="4" y="22" width="24" height="5" rx="0.5" />
      <line x1="14" y1="6" x2="14" y2="11" strokeWidth="3" stroke="currentColor" strokeOpacity="0.3" />
      <line x1="20" y1="14" x2="20" y2="19" strokeWidth="3" stroke="currentColor" strokeOpacity="0.3" />
      <path d="M22 20 L28 8" strokeWidth="2" />
      <circle cx="28" cy="7" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MortarIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props}>
      <path d="M8 28 L6 16 Q6 12 10 12 L22 12 Q26 12 26 16 L24 28 Z" />
      <line x1="8" y1="20" x2="24" y2="20" />
      <ellipse cx="16" cy="12" rx="8" ry="3" />
      <path d="M14 8 L16 4 L18 8" />
      <line x1="16" y1="4" x2="16" y2="12" />
    </svg>
  );
}

export function FlashingIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props}>
      <rect x="4" y="16" width="24" height="10" rx="1" />
      <path d="M4 16 L4 8 Q4 6 6 6 L26 6 Q28 6 28 8 L28 16" />
      <path d="M8 16 L8 10 L24 10 L24 16" strokeOpacity="0.5" />
      <path d="M10 22 L10 26 M14 22 L14 26 M18 22 L18 26 M22 22 L22 26" strokeWidth="1" />
    </svg>
  );
}

export function StoneIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props}>
      <path d="M8 26 L4 18 L8 10 L16 6 L24 10 L28 18 L24 26 Z" />
      <path d="M12 26 L8 18 L12 12 L20 10 L24 16 L22 26" strokeOpacity="0.4" />
      <circle cx="16" cy="16" r="3" />
    </svg>
  );
}

export function CulturedStoneIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props}>
      <rect x="4" y="4" width="7" height="5" rx="1" />
      <rect x="13" y="4" width="7" height="5" rx="1" />
      <rect x="22" y="4" width="6" height="5" rx="1" />
      <rect x="4" y="11" width="5" height="5" rx="1" />
      <rect x="11" y="11" width="10" height="5" rx="1" />
      <rect x="23" y="11" width="5" height="5" rx="1" />
      <rect x="4" y="18" width="8" height="5" rx="1" />
      <rect x="14" y="18" width="6" height="5" rx="1" />
      <rect x="22" y="18" width="6" height="5" rx="1" />
      <line x1="4" y1="25" x2="28" y2="25" strokeWidth="1" />
    </svg>
  );
}

export function ExteriorIcon({ size = 32, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props}>
      <path d="M4 28 L4 14 L16 4 L28 14 L28 28 Z" />
      <rect x="13" y="20" width="6" height="8" rx="0.5" />
      <rect x="7" y="16" width="5" height="5" rx="0.5" />
      <rect x="20" y="16" width="5" height="5" rx="0.5" />
      <path d="M4 28 L28 28" />
      <line x1="10" y1="14" x2="16" y2="8" strokeOpacity="0.3" />
      <line x1="22" y1="14" x2="16" y2="8" strokeOpacity="0.3" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<IconProps>> = {
  masonry: MasonryIcon,
  foundation: FoundationIcon,
  chimney: ChimneyIcon,
  tuckpointing: TuckPointingIcon,
  mortar: MortarIcon,
  flashing: FlashingIcon,
  stone: StoneIcon,
  culturedstone: CulturedStoneIcon,
  exterior: ExteriorIcon,
};

export function ServiceIcon({ name, ...props }: IconProps & { name: string }) {
  const Icon = iconMap[name] ?? MasonryIcon;
  return <Icon {...props} />;
}
