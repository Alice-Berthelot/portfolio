'use client'

import { useTranslations } from "next-intl";
import { useState } from "react";
import { MdOutlineConstruction } from "react-icons/md";

export default function TemporaryBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const t = useTranslations("Temporary");
  return (
    <>
      {isVisible && (
        <header className="w-full bg-dark-charcoal flex gap-2 items-center p-1.5 pl-3">
          <MdOutlineConstruction className="w-5 h-5" />
          <p>{t("banner-content")}</p>
          <button className="right-0" onClick={() => setIsVisible(false)}>✖</button>
        </header>
      )}
    </>
  );
}
