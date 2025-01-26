import { useLocale, useTranslations } from "next-intl";
import Title from "./title";
import Link from "next/link";

export default function LastProjects() {
  const locale = useLocale();
  const t = useTranslations("HomePage");
  return (
    <section className="px-16 pb-16 pt-4">
      <Title title={t("lastprojects.title")} />
      <Link href={`/${locale}/projects`} className="underline underline-offset-4">Voir tous mes projets</Link>
    </section>
  );
}
