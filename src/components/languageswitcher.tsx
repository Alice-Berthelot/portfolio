"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTransition, useState } from "react";
import { useLocale } from "next-intl";
import { Locale } from "../types/global";

export default function LanguageSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const pathname = usePathname();
  const otherLocale: Locale = locale === "en" ? "fr" : "en";

  const [isChecked, setIsChecked] = useState(locale === "en");

  const handleLanguageChange = (newLocale: Locale) => {
    setIsChecked(newLocale === "en");

    startTransition(() => {
      const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
      router.push(newPath);
    });
  };

  return (
    <div className="flex items-center">
    <label className="relative inline-block w-16 h-8 cursor-pointer" aria-label={`${isChecked ? 'Language switcher' : 'Sélecteur de langue'}`}>
      <input
        type="checkbox"
        role="switch"
        className="sr-only"
        checked={isChecked}
        onChange={() => handleLanguageChange(otherLocale)}
        disabled={isPending}
        aria-label={`${isChecked ? 'Passer à la version française' : 'Switch to English'}`}
      />

      <span className="absolute inset-0 bg-dark-charcoal border border-solid border-ghost-white/50 rounded-md transition-colors duration-300 peer-checked:bg-[#21CC4C]"></span>

      <span
        className={`absolute text-sm font-bold transition-all duration-300 ease-in-out ${
          isChecked ? "left-2 text-gray-500" : "right-2 text-gray-500"
        }`}
        style={{
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {isChecked ? "FR" : "EN"}
      </span>

      <span
        className={`absolute flex items-center justify-center w-7 h-7 text-sm font-bold rounded-md shadow-md bg-ghost-white text-black transition-all duration-300 ease-in-out ${
          isChecked
            ? "translate-x-8 bg-ghost-white text-dark-charcoal"
            : "translate-x-1"
        }`}
        style={{
          top: "50%",
          transform: `translateY(-50%) ${
            isChecked
              ? "translateX(32px) rotate(270deg)"
              : "translateX(4px) rotate(0deg)"
          }`,
        }}
      >
        <span
        className="flex items-center justify-center w-full h-full"
          style={{
            transform: isChecked ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          {isChecked ? "EN" : "FR"}
        </span>
      </span>
    </label>
    </div>
  );
}
