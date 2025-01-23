"use client";

import { usePathname } from "next/navigation";
import Links from "./links";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function Footer() {
  const locale = useLocale();
  const pathname = usePathname();
  const fixedPages = ["/projects", "/contact"];

  // Vérifie si la page actuelle est dans la liste
  const isFixedFooter = fixedPages.some((page) => pathname?.includes(page));

  return (
    <footer
      className={`w-11/12 py-2 flex justify-end gap-6 items-center border-solid border-t border-ghost-white ${
        isFixedFooter ? "fixed bottom-0 left-0 left-1/2 transform -translate-x-1/2 bg-dark-charcoal" : "mx-auto"
      }`}
    >
      <Link href={`/${locale}/contact`} className="underline underline-offset-2">Contact</Link>
      <Links />
    </footer>
  );
}
