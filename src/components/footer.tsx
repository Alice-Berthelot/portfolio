"use client";

import { usePathname } from "next/navigation";
import Links from "./links";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function Footer() {
  const locale = useLocale();
  const pathname = usePathname();
  const fixedPages = ["/projects", "/background", "/contact"];

  // Vérifie si la page actuelle est dans la liste
  const isFixedFooter = fixedPages.some((page) => pathname?.includes(page));

  return (
    <footer
      className={`w-full flex justify-end gap-6 items-center bg-dark-charcoal ${
        isFixedFooter ? "fixed bottom-0 left-0" : ""
      }`}
    >
      <Link href={`/${locale}/contact`} className="underline underline-offset-2">Contact</Link>
      <Links />
    </footer>
  );
}
