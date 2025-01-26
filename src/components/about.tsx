import { useLocale, useTranslations } from "next-intl";
import Title from "./title";
import HardSkills from "./hardskills";
import SoftSkills from "./softskills";
import Hobbies from "./hobbies";
import Link from "next/link";

export default function About() {
  const locale = useLocale();
  const t = useTranslations("HomePage");
  return (
    <section id="about" className="px-16 pt-14">
      <Title title={t("profile.title")} />
      <div className="flex gap-12 justify-center">
        <HardSkills />
        <SoftSkills />
      </div>
      <div className="flex gap-12 justify-center">
        <div className="w-[45%]"></div>
      <Hobbies />
      </div>
      <Link
        href={`/${locale}/background`}
        className="underline underline-offset-4 text-right"
      >
        {t("profile.link-to-background")}
      </Link>
    </section>
  );
}
