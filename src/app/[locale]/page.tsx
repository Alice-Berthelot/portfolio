'use client'
import About from "@/components/about";
import Introduction from "@/components/introduction";
import LastProjects from "@/components/lastprojects";
import { useTranslations } from "next-intl";
import { useEffect } from "react";


export default function HomePage() {
  const t = useTranslations("Temporary")
  useEffect(() => {
    alert(`${t("banner-content")}`);
  }, [t]); 

  return (
    <>
      <Introduction />
      <About />
      <LastProjects />
    </>
  );
}
