"use client";

import { usePathname } from "next/navigation";
import Links from "./links";

// import { useTranslations } from "next-intl";

export default function Footer() {
  //   const t = useTranslations("HomePage");
  const pathname = usePathname();
  const fixedPages = ["/projects", "/background", "/contact"];

  // Vérifie si la page actuelle est dans la liste
  const isFixedFooter = fixedPages.some((page) => pathname?.includes(page));

  return (
    <footer
      className={`w-full flex justify-between bg-dark-charcoal ${
        isFixedFooter ? "fixed bottom-0 left-0" : ""
      }`}
    >
      <Links />
    </footer>
  );
}
