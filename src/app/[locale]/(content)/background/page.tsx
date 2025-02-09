import BackgroundHistory from "@/components/backgroundhistory";
import BackgroundRecap from "@/components/backgroundrecap";
import Title from "@/components/title";
import { getLocalizedBackground } from "../../../../../actions/server-actions";
import { LocaleValue } from "../../../../../models/models";
import { getTranslations } from "next-intl/server";

type BackgroundPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function BackgroundPage({ params }: BackgroundPageProps) {
  const { locale } = await params;
  const t = await getTranslations("BackgroundPage");
  const more = t("see-more");
  const less = t("see-less");

  const backgroundData = await getLocalizedBackground(locale as LocaleValue);

  return (

    <section className="px-6 md:px-12 lg:px-16 pt-6">
      <Title title={t("title")} />
      <BackgroundRecap locale={locale}/>
      <BackgroundHistory
       backgroundData={backgroundData}
       more={more}
       less={less}
      />
    </section>
  );
}
