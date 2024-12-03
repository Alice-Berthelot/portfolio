import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <>
      <h1>{t("introduction.title")}</h1>
      <p>{t("introduction.description")}</p>
    </>
  );
}
