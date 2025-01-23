import TemporaryPage from "@/components/temporarypage";
import Title from "@/components/title";
import { useTranslations } from "next-intl";

export default function ProjectPage() {
  const t = useTranslations("ProjectPage");
  return (
    <section className="px-16 pt-6">
      <Title title={t("title")} />
      <TemporaryPage />
    </section>
  );
}
