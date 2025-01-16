import BackgroundContent from "@/components/backgroundcontent";
import TemporaryPage from "@/components/temporarypage";
import Title from "@/components/title";
import { useTranslations } from "next-intl";

export default function BackgroundPage() {
  const t = useTranslations("BackgroundPage");
  return (
    <section className="px-16">
      <Title title={t("title")} />
      <TemporaryPage />
      <BackgroundContent />
    </section>
  );
}
