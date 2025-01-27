import TemporaryPage from "@/components/temporarypage";
import Title from "@/components/title";
import { getLocalizedProjectSummary } from "@/../actions/server-actions";
import { LocaleValue } from "@/../models/models";
import { getTranslations } from "next-intl/server";
import Subtitle from "@/components/subtitle";
import Image from "next/image";

type ProjectPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale } = await params;
  const t = await getTranslations("ProjectPage");
  const projects = await getLocalizedProjectSummary(locale as LocaleValue);

  const url = "/pictures/projects/";
  return (
    <section className="px-16 pt-6">
      <Title title={t("title")} />
      <TemporaryPage />
      <p className="mt-8 mb-2">{t("temporary")}</p>
      <ul className="underline underline-offset-4 space-y-2 list-disc pl-8 mb-14">
        <li>
          <a href="https://github.com/Alice-Berthelot/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="https://app.dev.matchn-go.com/">MatchnGo</a>
        </li>
        <li>
          <a href="https://github.com/Alice-Berthelot/street-art-hunter">
            Street Art Hunter
          </a>
        </li>
        <li>
          <a href="https://github.com/Alice-Berthelot/checkpoint4">
            Girondin Avocats
          </a>
        </li>
        <li>Inclus&apos;Event</li>
        <li>
          <a href="https://github.com/Alice-Berthelot/preflix">Preflix</a>
        </li>
        <li>
          <a href="https://github.com/Alice-Berthelot/grow-easy">GrowEasy</a>
        </li>
        <li>
          <a href="https://github.com/Alice-Berthelot/wildcards">WildCards</a>
        </li>
      </ul>
      {/* prévoir des captures de bouts de code */}
      <section className="flex gap-24 justify-center mb-5 w-full flex-wrap">
        {projects.map((project, index) => (
          <article
            key={project.key}
            className={`w-[40%] rounded-md border border-solid border-ghost-white/30 ${
              index % 2 !== 0 ? "mt-60 " : ""
            }`}
          >
            <img
              alt=""
              src={`${url}${project.images[1]}.png`}
              className="w-full h-80 object-cover object-top rounded-tl-md rounded-tr-md"
            />
            <article className=" px-10 py-8">
              <Subtitle title={project.title} />
              <p>{project.description}</p>
            </article>
          </article>
        ))}
      </section>
    </section>
  );
}
