import { FaArrowRightLong } from "react-icons/fa6";

type RecapProps = {
  storyParts: string[];
};

export default function BackgroundRecap({storyParts}: RecapProps) {
  return (
    <section id="about" className="p-16 flex gap-10">
      {storyParts.map((part, index) => (
        <p key={index} className="flex gap-10 m-auto">
          {part}
          {index < storyParts.length - 1 && <FaArrowRightLong />}
        </p>
      ))}
    </section>
  );
}
