import { useTranslations } from "next-intl";
import Resumes from "./resumes";
import Image from "next/image";
import profilePic from "../../public/pictures/profile-pic.png";

export default function Introduction() {
  const t = useTranslations("HomePage");
  return (
    <section className="flex flex-row items-end px-20 pt-44 pb-12 w-full">
      <picture className="pl-16">
        {/* prévoir un alt fr/eng */}
        <Image src={profilePic} alt="profile picture" width="500" />
      </picture>
      <section className="flex flex-col items-end w-full mr-32">
        <h1 className={`font-title text-7xl tracking-wide`}>
          {t("introduction.title").toUpperCase()}
        </h1>
        <p className="w-10/12 text-xl text-right mt-8 mb-14">{t("introduction.description")}</p>
        <Resumes />
      </section>
    </section>
  );
}
