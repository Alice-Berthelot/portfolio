import { useLocale, useTranslations } from "next-intl";
import Title from "./title";
import Subtitle from "./subtitle";
import AnimatedLink from "./animatedlink";
import { ProjectSummary } from "../../models/models";
import { ScrollDownAnimation } from "./scrolldownanimation";

type LastProjectsProps = { projects: ProjectSummary[] };

export default function LastProjects({ projects }: LastProjectsProps) {
  const locale = useLocale();
  const t = useTranslations("HomePage");
  const text = t("lastprojects.link");

  const url = "/pictures/projects/";

  return (
    <section className="px-6 md:px-12 lg:px-16 pb-20 pt-4">
      <ScrollDownAnimation>
        <Title title={t("lastprojects.title")} />
      </ScrollDownAnimation>
      <ScrollDownAnimation>
        <section className="flex justify-center flex-wrap gap-6 mb-12 w-[80%] md:w-auto m-auto">
          {projects.map((project, index) => (
            <article
              key={project.key}
              style={{ backgroundImage: `url(${url}${project.images[0]}.png)` }}
              className={`w-[10rem] h-[10rem] lg:w-[25rem] lg:h-[20rem] rounded-md border border-solid border-ghost-white/30 bg-cover bg-center bg-clip-padding group ${
                index % 2 !== 0 ? "ml-auto md:ml-0" : "mr-auto md:mr-0"
              }`}
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
        <div className="relative flex justify-center md:justify-end md:pr-16">
          <AnimatedLink text={text} link={`/${locale}/projects`} />
        </div>
      </ScrollDownAnimation>
    </section>
  );
}
