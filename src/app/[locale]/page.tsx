import About from "@/components/about";
import Introduction from "@/components/introduction";
import LastProjects from "@/components/lastprojects";
import { getLocalizedProjectHome } from "../../../actions/server-actions";
import { LocaleValue } from "../../../models/models";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const projectsFiltered = await getLocalizedProjectHome(locale as LocaleValue);

  return (
    <>
      <Introduction />
      <About />
      <LastProjects projects={projectsFiltered} />
    </>
  );
}
