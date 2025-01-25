"use client";

import { usePathname } from "next/navigation";
import Links from "./links";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const pathname = usePathname();
  const fixedPages = ["/projects", "/contact"];

  // Vérifie si la page actuelle est dans la liste
  const isFixedFooter = fixedPages.some((page) => pathname?.includes(page));

  return (
    <footer
      className={`w-11/12 py-6 flex justify-between gap-6 items-center border-solid border-t border-ghost-white ${
        isFixedFooter ? "fixed bottom-0 left-0 left-1/2 transform -translate-x-1/2 bg-dark-charcoal" : "mx-auto"
      }`}
    >
      <section className="flex flex-col justify-center items-left gap-1">
      <p className="text-lg">{t("text")}</p>
      <Link href={`/${locale}/contact`} className="underline underline-offset-2">{t("link")}</Link>
      </section>
      <Links />
    </footer>
  );
}
