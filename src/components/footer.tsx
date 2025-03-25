"use client";

import { usePathname } from "next/navigation";
import Links from "./links";
import { useLocale, useTranslations } from "next-intl";
import logo from "./../../public/logos/logo.png";
import Image from "next/image";
import AnimatedLink from "./animatedlink";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const pathname = usePathname();
  const fixedPages = ["/contact"];

  // Check if the current page is in the list
  const isFixedFooter = fixedPages.some((page) => pathname?.includes(page));

  return (
    <footer
      className={`w-11/12 py-6 flex flex-col md:flex-row md:justify-between gap-10 md:gap-6 items-center border-solid border-t border-ghost-white ${
        isFixedFooter
          ? "mx-auto md:fixed md:bottom-0 md:left-0 md:left-1/2 md:transform md:-translate-x-1/2 md:bg-dark-charcoal"
          : "mx-auto"
      }`}
    >
      <div className="flex flex-col gap-2 order-last md:order-first items-center md:items-start">
        <Image
          alt="Logo du portfolio pour retourner vers l'accueil"
          src={logo}
          width="50"
          className="md:ml-2"
        />
        <p className="text-xs text-ghost-white/80"><span className="text-joyful">©</span> 2025 Alice Berthelot</p>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start flex-wrap gap-4 px-6 md:px-auto">
        <p className="text-lg text-ghost-white text-center md:text-left">{t("text")}</p>
        <AnimatedLink text={t("link")} link={`/${locale}/contact`} target={""} />
      </div>
      <Links />
    </footer>
  );
}