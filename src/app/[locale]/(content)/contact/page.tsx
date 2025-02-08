import { ScrollDownAnimation } from "@/components/scrolldownanimation";
import TemporaryPage from "@/components/temporarypage";
import Title from "@/components/title";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  return (
    <section className="px-16 pt-6">
      <ScrollDownAnimation>
        <Title title={t("title")} />
        <TemporaryPage />
      </ScrollDownAnimation>
      <ScrollDownAnimation>
        <p className="mt-8 mb-2">{t("temporary")}</p>
        <a
          href="mailto:aliceberthelot.pro@gmail.com"
          className="underline underline-offset-4 text-xl"
        >
          aliceberthelot.pro@gmail.com
        </a>
      </ScrollDownAnimation>
    </section>
  );
}
