import Title from "@/components/title";
import { getLocalizedProjectSummary } from "@/../actions/server-actions";
import { LocaleValue } from "@/../models/models";
import { getTranslations } from "next-intl/server";
import Subtitle from "@/components/subtitle";
import ChangingImage from "@/components/changingimg";
import AnimatedLink from "@/components/animatedlink";
import { ScrollDownAnimation } from "@/components/scrolldownanimation";

type ProjectPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale } = await params;
  const t = await getTranslations("ProjectPage");
  const projects = await getLocalizedProjectSummary(locale as LocaleValue);
  const url = "/pictures/projects/";
  const alt = t("alt");

  return (
    <section className="px-6 md:px-12 lg:px-16 pt-6">
      <ScrollDownAnimation>
        <Title title={t("title")} />
      </ScrollDownAnimation>

      <ScrollDownAnimation>
        <p className="text-lg text-ghost-white/75">{t("description")} </p>
      </ScrollDownAnimation>

      <section className="mt-6 mb-20 flex flex-col md:flex-row gap-8 lg:gap-0 md:gap-x-12 lg:gap-x-28 justify-center items-center lg:items-auto w-full flex-wrap">
        {projects.map((project, index) => (
          <div key={project.key} className="w-80 lg:w-[37%]">
            <ScrollDownAnimation>
              <article
                className={`rounded-md border border-solid border-ghost-white/30 ${
                  index % 2 !== 0 ? "md:mt-60" : "md:self-start"
                }`}
              >
                <ChangingImage images={project.images} url={url} alt={alt} />
                <article className="px-10 pt-8 lg:pt-[-4rem] pb-8">
                <ScrollDownAnimation>
                  <Subtitle title={project.title} />
                  </ScrollDownAnimation>
                  <ScrollDownAnimation>
                  <p className="pb-6">{project.description}</p>
                  </ScrollDownAnimation>
                  <ScrollDownAnimation>
                  <div className="flex justify-end">
                    <AnimatedLink text={t("more-details")} link={project.url} target={"_blank"}/>
                  </div>
                  </ScrollDownAnimation>
                </article>
              </article>
            </ScrollDownAnimation>
          </div>
        ))}
      </section>
    </section>
  );
}
