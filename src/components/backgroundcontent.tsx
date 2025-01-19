import { useLocale, useMessages, useTranslations } from "next-intl";
import { FaArrowRightLong } from "react-icons/fa6";
import backgroundDataFr from "../../messages/fr.json";
import backgroundDataEn from "../../messages/en.json";

export default function BackgroundContent() {
  const locale = useLocale();

  // Background overview, to review
  const t = useTranslations("BackgroundPage");
  const initialStory = t("story");
  const storyParts = initialStory.split("-->");

  const compareYears = (a, b) => {
    const yearA = a.year;
    const yearB = b.year;

    // Fonction pour convertir les années ou intervalles en une valeur numérique comparable
    const convertYear = (year) => {
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

  // const backgroundEnSorted = backgroundEn.sort(compareYears);

  // console.log(backgroundEnSorted);

  return (
    <>
      <section id="about" className="p-16 flex gap-10">
        {storyParts.map((part, index) => (
          <p key={index} className="flex gap-10 m-auto">
            {part}
            {index < storyParts.length - 1 && <FaArrowRightLong />}
          </p>
        ))}
      </section>

      {/* <p>
        {locale === "fr"
          ? `${backgroundFr[1].details[0].value}`
          : `${backgroundEn[1].details[0].value}`}
      </p> */}

      {locale === "fr"
        ? backgroundFr.map((backgroundDetail, index) => (
            <section key={index}>
              <h4>{backgroundDetail.year}</h4>
              <ul>
                {backgroundDetail.details.map((detailedData, detailedIndex) => (
                  <li key={detailedIndex}>{detailedData.value}</li>
                ))}
              </ul>
            </section>
          ))
        : backgroundEn.map((backgroundDetail, index) => (
            <section key={index} className="mb-5 mt-8">
              <h4 className="font-title text-2xl tracking-wide mx-10 mb-3">
                {backgroundDetail.year}
              </h4>
              <ul className="px-20">
                {backgroundDetail.details.map((detailedData, detailedIndex) => (
                  <li key={detailedIndex} className="list-disc">{detailedData.value}</li>
                ))}
              </ul>
            </section>
          ))}
    </>
  );
}
