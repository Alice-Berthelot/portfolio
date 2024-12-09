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
      <Title title={t("profile.title")} margin={"mt-0"} />
      <HardSkills />
      <SoftSkills />
      <Hobbies />
      <Link href={`/${locale}/background`}>
        {t("profile.link-to-background")}
      </Link>
    </section>
  );
}
