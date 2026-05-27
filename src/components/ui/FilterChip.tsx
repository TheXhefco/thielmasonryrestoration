"use client";

interface FilterChipProps {
  label: string;
  count?: number;
  active?: boolean;
  onClick?: () => void;
}

export function FilterChip({ label, count, active = false, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={[
        "inline-flex items-center gap-1.5 px-4 py-2 rounded-[999px] text-sm font-body font-medium transition-all duration-200 cursor-pointer",
        "focus-visible:outline focus-visible:outline-3 focus-visible:outline-[#b01e24]",
        active
          ? "bg-[#b01e24] text-white shadow-[0_1px_4px_rgba(176,30,36,0.3)]"
          : "bg-[#e7e0d6] text-[#3a3d42] hover:bg-[#d8d0c4]",
      ].join(" ")}
    >
      {label}
      {count !== undefined && (
        <span
          className={[
            "text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold",
            active ? "bg-white/20 text-white" : "bg-[#c8a06a]/20 text-[#795829]",
          ].join(" ")}
        >
          {count}
        </span>
      )}
    </button>
  );
}
