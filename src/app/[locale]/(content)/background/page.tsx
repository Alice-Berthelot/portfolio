import BackgroundHistory from "@/components/backgroundhistory";
import BackgroundRecap from "@/components/backgroundrecap";
import TemporaryPage from "@/components/temporarypage";
import Title from "@/components/title";
import { useLocale, useTranslations } from "next-intl";
import backgroundDataFr from "../../../../../messages/fr.json";
import backgroundDataEn from "../../../../../messages/en.json";

export default function BackgroundPage() {
  const locale = useLocale();
  const t = useTranslations("BackgroundPage");

  // when the appearance the story is changed, this two lines of code below shall be removed
  // need to change the disability of any types
  const initialStory = t("story");
  const storyParts = initialStory.split("-->");

  const compareYears = (a: any, b: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    const yearA = a.year;
    const yearB = b.year;
    // Fonction pour convertir les années ou intervalles en une valeur numérique comparable
    const convertYear = (year: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
      if (year.includes("-")) {
        const [start, end] = year.split("-").map(Number);
        return start + end / 10000; // Créer une valeur unique pour les intervalles
      }
      return Number(year); // Si c'est une année simple, simplement la convertir en nombre
    };
    const convertedA = convertYear(yearA);
    const convertedB = convertYear(yearB);
    // Comparer les valeurs converties (les intervalles seront traités correctement)
    return convertedB - convertedA;
  };

  const backgroundFr = Object.entries(
    backgroundDataFr.BackgroundPage.background
  )
    .map(([year, details]) => {
      return {
        year,
        details: Object.entries(details).map(([key, value]) => ({
          key,
          value,
        })),
      };
    })
    .sort(compareYears);

  const backgroundEn = Object.entries(
    backgroundDataEn.BackgroundPage.background
  )
    .map(([year, details]) => {
      return {
        year,
        details: Object.entries(details).map(([key, value]) => ({
          key,
          value,
        })),
      };
    })
    .sort(compareYears);


  return (
    <section className="px-16 pt-6">
      <Title title={t("title")} />
      <TemporaryPage />
      <BackgroundRecap storyParts={storyParts} />
      <BackgroundHistory background={locale === 'fr' ? backgroundFr : backgroundEn}/>
    </section>
  );
}
