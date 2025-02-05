"use client";
import { useState } from "react";
import { Background } from "../../models/models";

type HistoryProps = {
  backgroundData: Background[];
  more: string;
  less: string;
};

export default function BackgroundHistory({
  backgroundData,
  more,
  less,
}: HistoryProps) {
  const [detailedItems, setDetailedItems] = useState<{ [key: number]: boolean }>({});

  const handleToggle = (descriptionIndex: number) => {
    setDetailedItems((prevState) => ({
      ...prevState,
      [descriptionIndex]: !prevState[descriptionIndex], 
    }));
  };

  return (
    <section className="pt-16 flex flex-col gap-8">
      {backgroundData.map((background) => (
        <article key={background.key}>
          <h4 className="font-title text-2xl tracking-wide mx-10 mb-3">
            {background.year}
          </h4>
          <ul className="px-20 flex flex-col gap-2">
            {background.descriptions.map((description, index) => (
              <li key={index} className="list-disc">
                {description.value}
                {Array.isArray(description.details) &&
                  description.details.length > 0 &&
                  description.details.every(
                    (item) => typeof item === "string"
                  ) && (
                    <>
          
                      {!detailedItems[index] && (
                        <button
                          className="ml-6 underline underline-offset-2"
                          onClick={() => handleToggle(index)} // Sending to handleToggle the description index corresponding to the description of which we WANT details
                        >
                          {more}
                        </button>
                      )}

                      {detailedItems[index] && (
                        <>
                          <ul className="mt-2">
                            {description.details.map((detail, index) => (
                              <li
                                key={index}
                                className="text-sm ml-4 list-disc"
                              >
                                {detail}
                              </li>
                            ))}
                          </ul>
                          <button
                            className="mt-2 underline underline-offset-2"
                            onClick={() => handleToggle(index)} // Sending to handleToggle the description index corresponding to the description of which we DON'T want details
                          >
                            {less}
                          </button>
                        </>
                      )}
                    </>
                  )}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}