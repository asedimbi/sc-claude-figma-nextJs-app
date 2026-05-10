"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";

type NavItemProps = {
  icon: LucideIcon;
  label: string;
  href: string;
};

export default function NavItem({ icon: Icon, label, href }: NavItemProps) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <li>
      <Link
        href={href}
        className={`flex items-center justify-between px-3 py-2.5 rounded-md ${
          active
            ? "bg-blue-600 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <div className="flex items-center gap-3">
          <Icon size={18} />
          <span className="text-sm font-medium">{label}</span>
        </div>
        <svg
          className={`w-4 h-4 ${active ? "text-white" : "text-gray-400"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {active ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          )}
        </svg>
      </Link>
    </li>
  );
}
