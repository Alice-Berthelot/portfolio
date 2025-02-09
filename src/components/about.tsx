import { useLocale, useTranslations } from "next-intl";
import Title from "./title";
import HardSkills from "./hardskills";
import SoftSkills from "./softskills";
import Hobbies from "./hobbies";
import AnimatedLink from "./animatedlink";
import { ScrollDownAnimation } from "./scrolldownanimation";

export default function About() {
  const locale = useLocale();
  const t = useTranslations("HomePage");
  return (
    <section id="about" className="px-6 md:px-12 lg:px-16 pt-2 md:pt-6">
      <ScrollDownAnimation>
        <Title title={t("profile.title")} />
      </ScrollDownAnimation>
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 justify-center items-center lg:items-start">
        <HardSkills />
        <SoftSkills />
      </div>
      <div className="mt-8 md:mt-12 lg:mt-auto flex gap-12 justify-center mb-12">
        <div className="w-[45%] hidden lg:block"></div>
        <Hobbies />
      </div>
      <div className="relative flex justify-center md:justify-end md:pr-16">
        <AnimatedLink
          text={t("profile.link-to-background")}
          link={`/${locale}/background`}
        />
      </div>
    </section>
  );
}
