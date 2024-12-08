import { useTranslations } from "next-intl";

export default function BackgroundPage() {
  const t = useTranslations("BackgroundPage");
  return (
    <>
      <h1 className={`font-title`}>{t("title")}</h1>
    </>
  );
}
