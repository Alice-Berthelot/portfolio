import { useLocale, useMessages, useTranslations } from "next-intl";
import { FaArrowRightLong } from "react-icons/fa6";
import Title from "./title";
import HardSkills from "./hardskills";
import SoftSkills from "./softskills";
import Hobbies from "./hobbies";
import Link from "next/link";

export default function BackgroundContent() {
  const locale = useLocale();
  const t = useTranslations("BackgroundPage");
  const messages = useMessages() as Record<string, any>;
  // const data = messages.BackgroundPage.background;
  // const trying = data[0]
  const backgroundData = messages.BackgroundPage.background;

  const initialStory = t("story")
  const storyParts = initialStory.split("-->");

  return (
    <section id="about" className="p-16">
      <p>      {storyParts.map((part, index) => (
        <span key={index}>
          {part}
          {index < storyParts.length - 1 && <FaArrowRightLong />}
        </span>
      ))}</p>

      
    </section>
  );
}
