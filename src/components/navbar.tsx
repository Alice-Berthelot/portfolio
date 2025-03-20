"use client";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import HamburgerMenu from "./hamburgermenu";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const t = useTranslations("NavBar");
  const locale = useLocale();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  const classLi =
    "relative transform transition-all ease-in-out duration-300 lg:hover:rotate-[-10deg] hover:text-ghost-white";

  return (
    <nav className="z-40">
      {isOpen && (
        <div
          className="fixed top-10 left-0 w-screen h-screen bg-dark-charcoal bg-opacity-30"
          onClick={handleClick}
        ></div>
      )}
      <HamburgerMenu isOpen={isOpen} handleClick={handleClick} />
      <ul
        className={`border-l border-t border-solid border-ghost-white/30 md:border-none rounded-l-md flex flex-col md:flex-row items-center gap-10 md:gap-4 font-semibold tracking-wide 
        ${
          isOpen
            ? "absolute top-full right-0 w-3/5 h-screen bg-dark-charcoal text-xl p-6 pt-14 slide-in"
            : "hidden md:flex"
        }`}
      >
        <li className={`${classLi} ${((pathname === `/${locale}`) || (pathname === `/${locale}/#about`))  ? "text-ghost-white" : "text-ghost-white/75"}`}>
          <Link
            href={`/${locale}/#about`}
          >
            {t("about")}
          </Link>
        </li>
        <li className={`${classLi} ${(pathname === `/${locale}/projects`)  ? "text-ghost-white" : "text-ghost-white/75"}`}>
          <Link
            href={`/${locale}/projects`}
            className="aria-[current=page]:text-ghost-white"
          >
            {t("projects")}
          </Link>
        </li>
        <li className={`${classLi} ${(pathname === `/${locale}/background`)  ? "text-ghost-white" : "text-ghost-white/75"}`}>
          <Link href={`/${locale}/background`}>{t("background")}</Link>
        </li>
        <li className={`${classLi} ${(pathname === `/${locale}/contact`)  ? "text-ghost-white" : "text-ghost-white/75"}`}>
          <Link href={`/${locale}/contact`}>{t("contact")}</Link>
        </li>
      </ul>
    </nav>
  );
}
