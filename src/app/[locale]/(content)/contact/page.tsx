import TemporaryPage from "@/components/temporarypage";
import Title from "@/components/title";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  return (
    <section className="px-16">
      <Title title={t("title")} />
      <TemporaryPage />
    </section>
  );
}
