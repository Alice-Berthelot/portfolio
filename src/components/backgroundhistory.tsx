"use client";
import { useState } from "react";
import { Background } from "../../models/models";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { ScrollDownAnimation } from "./scrolldownanimation";

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
  const [detailedItems, setDetailedItems] = useState<{
    [key: string]: { [index: number]: boolean };
  }>({});

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
    <section className="pt-4 pb-16 flex flex-col gap-10">
      {backgroundData.map((background) => (
        <ScrollDownAnimation key={background.key}>
          <article>
            <h4 className="font-title text-3xl font-bold tracking-wide mx-10 mb-3 tracking-wider">
              {background.year}
            </h4>
            <ul className="px-20 flex flex-col gap-2 text-lg pt-2">
              {background.descriptions.map((description, index) => (
                <li key={index} className="list-disc">
                  {description.value}
                  {Array.isArray(description.details) &&
                    description.details.length > 0 &&
                    description.details.every(
                      (item) => typeof item === "string"
                    ) && (
                      <>
                        {!detailedItems[background.key]?.[index] ? (
                          <button
                            className="ml-4 flex gap items-center underline underline-offset-2 text-sm text-ghost-white/60"
                            onClick={() => handleToggle(background.key, index)} // Sending both background.key and details index to ensure the button corresponds to the right li
                          >
                            <IoMdArrowDropdown className="text-lg" />
                            {more}
                          </button>
                        ) : (
                          <>
                            <ul className="mt-2">
                              {description.details.map((detail, i) => (
                                <li
                                  key={i}
                                  className="text-base ml-4 list-none"
                                >
                                  - {detail}
                                </li>
                              ))}
                            </ul>
                            <button
                              className="mt-2 flex gap items-center underline underline-offset-2 text-sm text-ghost-white/60"
                              onClick={() =>
                                handleToggle(background.key, index)
                              } // Sending both background.key and details index to ensure the button corresponds to the right li
                            >
                              <IoMdArrowDropup className="text-lg" />
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
        </ScrollDownAnimation>
      ))}
    </section>
  );
}
