import Title from "@/components/title";
import { getLocalizedProjectSummary } from "@/../actions/server-actions";
import { LocaleValue } from "@/../models/models";
import { getTranslations } from "next-intl/server";
import Subtitle from "@/components/subtitle";
import ChangingImage from "@/components/changingimg";
import AnimatedLink from "@/components/animatedlink";

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
    <section className="px-16 pt-6">
      <Title title={t("title")} />
      <p className="text-xl">{t("description")} </p>
      <p className="text-lg italic pt-4">{t("upcoming")} </p>

      {/* prévoir des captures de bouts de code */}
      <section className="mt-20 mb-16 flex gap-x-28 justify-center w-full flex-wrap">
        {projects.map((project, index) => (
          <article
            key={project.key}
            className={`w-[37%] max-w-calc rounded-md border border-solid border-ghost-white/30 ${
              index % 2 !== 0 ? "mt-60" : "self-start"
            }`}
          >
            <ChangingImage images={project.images} url={url} alt={alt} />
            {/* <img
              alt=""
              src={`${url}${project.images[1]}.png`}
              className="w-full h-80 object-cover object-top rounded-tl-md rounded-tr-md"
            /> */}
            <article className="px-10 -pt-4 pb-8">
              <Subtitle title={project.title} />
              <p className="pb-6">{project.description}</p>
              <div className="flex justify-end">
                <AnimatedLink text={t("more-details")} link="" />
              </div>
            </article>
          </article>
        ))}
      </section>
    </section>
  );
}
