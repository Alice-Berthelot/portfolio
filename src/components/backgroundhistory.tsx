type HistoryProps = {
  background: {
    year: string;
    details: { [key: string]: string }[];
  }[];
};

export default function BackgroundHistory({ background }: HistoryProps) {
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
    </section>
  );
}
