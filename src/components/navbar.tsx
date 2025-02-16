"use client";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import HamburgerMenu from "./hamburgermenu";
import { useState } from "react";

export default function NavBar() {
  const t = useTranslations("NavBar");
  const locale = useLocale();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  const classLi =
    "relative transform transition-all ease-in-out duration-300 lg:hover:rotate-[-10deg] ";

  return (
    <nav className="">
      <HamburgerMenu isOpen={isOpen} handleClick={handleClick} />
      <ul
        className={`border-l border-t border-solid border-ghost-white/30 md:border-none rounded-l-md flex flex-col md:flex-row items-center gap-10 md:gap-4 font-semibold tracking-wide 
        ${isOpen ? "absolute top-full right-0 w-3/5 h-screen bg-dark-charcoal text-xl p-6 pt-14" : "hidden md:flex"}`}
      >
        <li className={classLi}>
          <Link href={`/${locale}/#about`}>{t("about")}</Link>
        </li>
        <li className={classLi}>
          <Link href={`/${locale}/projects`}>{t("projects")}</Link>
        </li>
        <li className={classLi}>
          <Link href={`/${locale}/background`}>{t("background")}</Link>
        </li>
        <li className={classLi}>
          <Link href={`/${locale}/contact`}>{t("contact")}</Link>
        </li>
      </ul>
    </nav>
  );
}
