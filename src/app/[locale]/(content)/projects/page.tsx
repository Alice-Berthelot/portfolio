import TemporaryPage from "@/components/temporarypage";
import Title from "@/components/title";
import { useTranslations } from "next-intl";

export default function ProjectPage() {
  const t = useTranslations("ProjectPage");
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
          <a href="https://github.com/Alice-Berthelot/street-art-hunter">Street Art Hunter</a>
        </li>
        <li>
          <a href="https://github.com/Alice-Berthelot/checkpoint4">Girondin Avocats</a>
        </li>
        <li>
          Inclus'Event
        </li>
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
    </section>
  );
}
