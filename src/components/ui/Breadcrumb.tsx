import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 text-xs">
      <ol className="flex items-center space-x-2 text-[#6E6A64]">
        <li>
          <Link href="/" className="hover:text-[#1D1D1B] transition-colors uppercase tracking-wider">
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-3 h-3 text-[#A88B5A]" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-[#1D1D1B] transition-colors uppercase tracking-wider"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#1D1D1B] font-medium uppercase tracking-wider truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
