import { useLocale, useTranslations } from "next-intl";
import Title from "./title";
import HardSkills from "./hardskills";
import SoftSkills from "./softskills";
import Hobbies from "./hobbies";
import AnimatedLink from "./animatedlink";

export default function About() {
  const locale = useLocale();
  const t = useTranslations("HomePage");
  return (
    <section id="about" className="px-16 pt-6">
      <Title title={t("profile.title")} />
      <div className="flex gap-12 justify-center">
        <HardSkills />
        <SoftSkills />
      </div>
      <div className="flex gap-12 justify-center mb-12">
        <div className="w-[45%]"></div>
        <Hobbies />
      </div>
      <div className="relative flex justify-end pr-16">
        <AnimatedLink
          text={t("profile.link-to-background")}
          link={`/${locale}/background`}
        />
      </div>
    </section>
  );
}
