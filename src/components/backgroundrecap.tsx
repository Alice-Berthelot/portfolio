import Image from "next/image";
import diagramFr from "@/../public/background-diagram-fr.png"
import diagramEn from "@/../public/background-diagram-en.png"

type RecapProps = {
  locale: string;
};

export default function BackgroundRecap({locale} : RecapProps) {
  return (
    <section id="about" className="flex justify-center -mt-8">
      <Image src={locale === "en" ? diagramEn : diagramFr} alt="" width="800"/>
    </section>
  );
}
