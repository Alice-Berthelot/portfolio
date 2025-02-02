import { useLocale, useTranslations } from "next-intl";
import Title from "./title";
import Subtitle from "./subtitle";
import AnimatedLink from "./animatedlink";
import { ProjectSummary } from "../../models/models";

type LastProjectsProps = { projects: ProjectSummary[] };

export default function LastProjects({ projects }: LastProjectsProps) {
  const locale = useLocale();
  const t = useTranslations("HomePage");
  const text = t("lastprojects.link");

  console.log(projects);

  const url = "/pictures/projects/";

  return (
    <section className="px-16 pb-16 pt-4">
      <Title title={t("lastprojects.title")} />
      <section className="flex justify-center flex-wrap gap-6 mb-8">
        {projects.map((project) => (
          <article
            key={project.key}
            style={{ backgroundImage: `url(${url}${project.images[0]}.png)` }}
            className="w-[25rem] h-[20rem] rounded-md border border-solid border-ghost-white/30 bg-cover bg-center bg-clip-padding group"
          >
            <div className="h-full px-10 py-4 bg-dark-charcoal/95 rounded-md flex justify-center items-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out">
              <div className="text-center">
                <Subtitle title={project.title} />
                <p>{project.description}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
      <div className="relative flex justify-end pr-16">
        <AnimatedLink text={text} link={`/${locale}/projects`} />
      </div>
    </section>
  );
}
