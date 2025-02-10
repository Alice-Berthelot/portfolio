import Image from "next/image";
import diagramFr from "@/../public/diagrams/background-diagram-fr.svg"
import diagramEn from "@/../public/diagrams/background-diagram-en.svg"
import { ScrollDownAnimation } from "./scrolldownanimation";

type RecapProps = {
  locale: string;
};

export default function BackgroundRecap({locale} : RecapProps) {
  return (
    <ScrollDownAnimation>
    <section id="about" className="flex justify-center -mt-8">
      <Image src={locale === "en" ? diagramEn : diagramFr} alt="" width="400" className="md:w-[500px] lg:w-[700px]"/>
    </section>
    </ScrollDownAnimation>
  );
}
