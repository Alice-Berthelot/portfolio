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
  const [detailedItems, setDetailedItems] = useState<{ [key: string]: { [index: number]: boolean } }>({});

  const handleToggle = (backgroundKey: string, descriptionIndex: number) => {
    setDetailedItems((prevState) => {
      const backgroundDetails = prevState[backgroundKey] || {}; // get details for this background or {}
      return {
        ...prevState,
        [backgroundKey]: {
          ...backgroundDetails,
          [descriptionIndex]: !backgroundDetails[descriptionIndex], // Toggle only for the index of this background
        },
      };
    });
  };

  return (
    <section className="pt-16 pb-16 flex flex-col gap-8">
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
                  description.details.every((item) => typeof item === "string") && (
                    <>
                      {!detailedItems[background.key]?.[index] ? (
                        <button
                          className="ml-6 underline underline-offset-2"
                          onClick={() => handleToggle(background.key, index)} // Sending both background.key and details index to ensure the button corresponds to the right li
                        >
                          {more}
                        </button>
                      ) : (
                        <>
                          <ul className="mt-2">
                            {description.details.map((detail, i) => (
                              <li key={i} className="text-sm ml-4 list-disc">
                                {detail}
                              </li>
                            ))}
                          </ul>
                          <button
                            className="mt-2 underline underline-offset-2"
                            onClick={() => handleToggle(background.key, index)} // Sending both background.key and details index to ensure the button corresponds to the right li
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
