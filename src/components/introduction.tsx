import { useTranslations } from "next-intl";
import Resumes from "./resumes";

export default function Introduction() {
  const t = useTranslations("HomePage");
  return (
    <section>
      <h1 className={`font-title text-6xl tracking-wide`}>{t("introduction.title").toUpperCase()}</h1>
      <p>{t("introduction.description")}</p>
      <Resumes />
    </section>
  );
}
