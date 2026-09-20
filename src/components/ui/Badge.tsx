import React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  type?: "NEW" | "BESTSELLER" | "LIMITED" | "SALE" | string;
  className?: string;
};

export function Badge({ type, className }: BadgeProps) {
  if (!type) return null;

  let colorClasses = "bg-[#1D1D1B] text-white";

  switch (type.toUpperCase()) {
    case "NEW":
      colorClasses = "bg-[#A88B5A] text-white";
      break;
    case "BESTSELLER":
      colorClasses = "bg-[#1D1D1B] text-[#F8F5EF]";
      break;
    case "LIMITED":
      colorClasses = "bg-[#3D3A35] text-[#E9E1D5]";
      break;
    case "SALE":
      colorClasses = "bg-[#8A2B2B] text-white";
      break;
    default:
      colorClasses = "bg-[#6E6A64] text-white";
  }

  return (
    <span
      className={cn(
        "inline-block px-2.5 py-0.5 text-[9px] font-semibold tracking-widest uppercase",
        colorClasses,
        className
      )}
    >
      {type}
    </span>
  );
}
