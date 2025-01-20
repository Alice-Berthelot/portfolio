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
    <section id="about" className="p-16">
      <Title title={t("profile.title")} />
      <div className="flex gap-4 justify-center">
        <HardSkills />
        <SoftSkills />
      </div>
      <Hobbies />
      <Link
        href={`/${locale}/background`}
        className="underline underline-offset-2"
      >
        {t("profile.link-to-background")}
      </Link>
    </section>
  );
}
