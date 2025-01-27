import TemporaryPage from "@/components/temporarypage";
import Title from "@/components/title";
import { getLocalizedProjectSummary } from "../../../../../actions/server-actions";
import { LocaleValue } from "../../../../../models/models";
import { getTranslations } from "next-intl/server";

export default async function ProjectPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations("ProjectPage");
  const locale = params.locale as LocaleValue;
  const projects = await getLocalizedProjectSummary(locale);
  console.log(projects);
  return (
    <section className="px-16 pt-6">
      <Title title={t("title")} />
      <TemporaryPage />
      <p className="mt-8 mb-2">{t("temporary")}</p>
      <ul className="underline underline-offset-4 space-y-2 list-disc pl-8">
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
      {projects.map((project) => (
        <p key={project.key}>{project.title}</p>
      ))}
    </section>
  );
}
