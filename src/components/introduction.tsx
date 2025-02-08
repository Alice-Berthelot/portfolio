import { useLocale, useTranslations } from "next-intl";
import Resumes from "./resumes";
import Link from "next/link";
import ProfilePicture from "./profilepicture";
import IntroText from "./introtext";

export default function Introduction() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <section className="flex flex-row items-center px-20 pt-40 w-full">
      <ProfilePicture />
      <section className="flex flex-col items-end w-full mr-32 gap-20">
        <IntroText
          title={t("introduction.title")}
          subtitle={t("introduction.subtitle")}
          descriptionFirst={t.rich("introduction.description-first-p", {
            name: (chunks) => (
              <span className="font-title text-4xl">{chunks}</span>
            ),
          })}
          descriptionSecond={t("introduction.description-second-p")}
          descriptionThird={t.rich("introduction.description-third-p", {
            contact: (chunks) => (
              <Link
                href={`/${locale}/contact`}
                className="underline underline-offset-4 text-ghost-white"
              >
                {chunks}
              </Link>
            ),
          })}
        />
        <Resumes />
      </section>
    </section>
  );
}
