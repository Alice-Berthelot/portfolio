import { useTranslations } from "next-intl";

type HistoryProps = {
  background: {
    year: string;
    details: { [key: string]: string }[];
  }[];
};

export default function BackgroundHistory({ background }: HistoryProps) {
  const t = useTranslations("BackgroundPageBis")
  const bgBis = t.raw("background")
  console.log(bgBis);
  return (
    <section>
      {background.map((backgroundDetail, index) => (
        <section key={index} className="mb-5 mt-8">
          <h4 className="font-title text-2xl tracking-wide mx-10 mb-3">
            {backgroundDetail.year}
          </h4>
          <ul className="px-20">
            {backgroundDetail.details.map((detailedData, detailedIndex) => (
              <li key={detailedIndex} className="list-disc">
                {detailedData.value}
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* <ul className="pt-4 space-y-10 text-center">
{Object.entries(bgBis.map(([key, value]) => (
    <li key={key} className="text-md">
      {value}
    </li>
  ))}
  </ul> */}

<div>
      {Object.keys(bgBis).map(year => {
        const yearData = bgBis[year];

        return (
          <div key={year}>
            <h4>{year}</h4>
            <ul>
              {Object.keys(yearData).map(subProperty => {
                const value = yearData[subProperty];

                // Si la valeur est un objet avec une clé 'title'
                if (typeof value === 'object' && value.title) {
                  return (
                    <section key={subProperty}>
                      <li>{value.title}</li>
                      {/* Si l'objet contient aussi 'details', l'afficher dans un autre <li> */}
                      {value.details && <li>{value.details}</li>}
                    </section>
                  );
                }

                // Sinon, afficher simplement la valeur de la sous-propriété
                return <li key={subProperty}>{value}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>

    </section>
  );
}
