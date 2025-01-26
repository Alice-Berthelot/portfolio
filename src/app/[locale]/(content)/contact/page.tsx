import TemporaryPage from "@/components/temporarypage";
import Title from "@/components/title";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  return (
    <section className="px-16">
      <Title title={t("title")} />
      <TemporaryPage />
      <p className="mt-8 mb-2">{t("temporary")}</p>
      <a href="mailto:aliceberthelot.pro@gmail.com" className="underline underline-offset-4">aliceberthelot.pro@gmail.com</a>
    </section>
  );
}
