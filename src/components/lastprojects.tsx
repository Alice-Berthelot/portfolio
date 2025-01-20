import { useLocale, useTranslations } from "next-intl";
import Title from "./title";
import Link from "next/link";

export default function LastProjects() {
  const locale = useLocale();
  const t = useTranslations("HomePage");
  return (
    <section className="p-16">
      <Title title={t("lastprojects.title")} />
      <Link href={`/${locale}/projects`} className="underline underline-offset-2">Voir tous mes projets</Link>
    </section>
  );
}
