import BackgroundRecap from "@/components/backgroundrecap";
import TemporaryPage from "@/components/temporarypage";
import Title from "@/components/title";
import { useTranslations } from "next-intl";

export default function BackgroundPage() {
  const t = useTranslations("BackgroundPage");

  // when the appearance the story is changed, this two lines of code below shall be removed
  // need to change the disability of any types
  const initialStory = t("story");
  const storyParts = initialStory.split("-->");



  return (
    <section className="px-16 pt-6">
      <Title title={t("title")} />
      <TemporaryPage />
      <BackgroundRecap storyParts={storyParts} />
    </section>
  );
}
