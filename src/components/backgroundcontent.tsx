import { useLocale, useMessages, useTranslations } from "next-intl";
import { FaArrowRightLong } from "react-icons/fa6";

export default function BackgroundContent() {
  const locale = useLocale();
  const t = useTranslations("BackgroundPage");
  // const messages = useMessages() as Record<string, any>;
  // // const data = messages.BackgroundPage.background;
  // // const trying = data[0]
  // const backgroundData = messages.BackgroundPage.background;

  const data = t("title");
  console.log(data);

  const initialStory = t("story");
  const storyParts = initialStory.split("-->");

  return (
    <section id="about" className="p-16">
      {storyParts.map((part, index) => (
        <p key={index}>
          {part}
          {index < storyParts.length - 1 && <FaArrowRightLong />}
        </p>
      ))}


    </section>
  );
}
