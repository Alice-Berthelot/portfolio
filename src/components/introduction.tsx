import { useTranslations } from "next-intl";
import Resumes from "./resumes";
import Image from "next/image";
import profilePic from "../../public/pictures/profile-pic.png";
import Title from "./title";

export default function Introduction() {
  const t = useTranslations("HomePage");
  return (
    <section className="flex flex-row px-10 pt-16">
      <picture>
        {/* prévoir un alt fr/eng */}
        <Image src={profilePic} alt="profile picture" width="500" />
      </picture>
      <section className="flex flex-col items-end">
        <h1 className={`font-title text-6xl tracking-wide`}>
          {t("introduction.title").toUpperCase()}
        </h1>
        <p>{t("introduction.description")}</p>
        <Resumes />
      </section>
    </section>
  );
}
