import { useLocale, useTranslations } from "next-intl";
import Resumes from "./resumes";
import Image from "next/image";
import profilePic from "../../public/pictures/profile-pic.png";
import Link from "next/link";

export default function Introduction() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <section className="flex flex-row items-center px-20 pt-44 w-full">
      <picture className="pl-16">
        {/* prévoir un alt fr/eng */}
        <Image src={profilePic} alt="profile picture" width="600" />
      </picture>
      <section className="flex flex-col items-end w-full mr-32 gap-20">
        <h1 className={`font-title text-7xl/6 tracking-wide`}>
          {t("introduction.title").toUpperCase()}

          {/* {t.rich(('introduction.title'), {
  portfolio: (chunks) => <span className="font-title text-3xl self-end"><br/>{chunks}</span>,
})} */}
        </h1>
        <div className="flex flex-col gap-6 w-10/12 text-xl text-right">
          <p>
            {t.rich("introduction.description-first-p", {
              name: (chunks) => (
                <span className="font-title text-4xl">{chunks}</span>
              ),
            })}
          </p>
          <p>{t("introduction.description-second-p")}</p>
          <p>
            {t.rich("introduction.description-third-p", {
              contact: (chunks) => (
                <Link
                  href={`/${locale}/contact`}
                  className="underline underline-offset-4"
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </div>
        <Resumes />
      </section>
    </section>
  );
}
