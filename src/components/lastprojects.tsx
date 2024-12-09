import { useLocale, useTranslations } from "next-intl";
import Title from "./title";
import Link from "next/link";

export default function LastProjects() {
  const locale = useLocale()
  const t = useTranslations("HomePage");
  return (
    <section className="p-16">
      <Title title={t("lastprojects.title")} margin={"mt-0"}/>
          <Link href={`/${locale}/projects`}>Voir tous mes projets</Link>
    </section>
  );
}
