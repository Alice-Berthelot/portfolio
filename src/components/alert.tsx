'use client'
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function Alert() {
  const t = useTranslations("Temporary");

  useEffect(() => {
    alert(`${t("banner-content")}`);
  }, [t]);

  return null;
}
