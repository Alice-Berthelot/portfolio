import { useTranslations } from "next-intl";

export default function ProjectPage() {
  const t = useTranslations("ProjectPage");
  return (
    <>
      <h1 className={`font-title`}>{t("title")}</h1>
    </>
  );
}
