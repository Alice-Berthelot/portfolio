"use client";

import { usePathname } from "next/navigation";
import Links from "./links";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import logo from "./../../public/logos/logo.png";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const pathname = usePathname();
  const fixedPages = ["/contact"];

  // Check if the current page is in the list
  const isFixedFooter = fixedPages.some((page) => pathname?.includes(page));

  return (
    <footer
      className={`w-11/12 py-6 flex justify-between gap-6 items-center border-solid border-t border-ghost-white ${
        isFixedFooter
          ? "fixed bottom-0 left-0 left-1/2 transform -translate-x-1/2 bg-dark-charcoal"
          : "mx-auto"
      }`}
    >
      <Image
        alt="Logo du portfolio pour retourner vers l'accueil"
        src={logo}
        width="50"
      />
      <div className="flex flex-col justify-center items-left gap-1">
        <p className="text-lg">{t("text")}</p>
        <Link
          href={`/${locale}/contact`}
          className="underline underline-offset-4"
        >
          {t("link")}
        </Link>
      </div>
      <Links />
    </footer>
  );
}
