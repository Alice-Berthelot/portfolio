import { useTranslations } from "next-intl";
import Subtitle from "./subtitle";
import aws from "../../public/logos/aws.svg"
import js from "../../public/logos/js.svg"
import css from "../../public/logos/css.svg"
import dynamodb from "../../public/logos/dynamodb.svg"
import express from "../../public/logos/express.svg"
import figma from "../../public/logos/figma.svg"
import git from "../../public/logos/git.svg"
import github from "../../public/logos/github.svg"
import html from "../../public/logos/html.svg"
import jest from "../../public/logos/jest.svg"
import nextjs from "../../public/logos/nextjs.svg"
import nodejs from "../../public/logos/node.svg"
import react from "../../public/logos/react.svg"
import python from "../../public/logos/python.svg"
import tailwind from "../../public/logos/tailwind.svg"
import typescript from "../../public/logos/typescript.svg"
import Image from "next/image";

export default function HardSkills() {
  const t = useTranslations("HomePage");

  return (
    <section>
{/* STOCKER EN BDD ET FAIRE UN MAP */}
      <Subtitle title={t("profile.hardskills-title")} />
      <section className="bg-dark-charcoal w-3/4 mx-auto mt-6 flex flex-col gap-4 p-10">
        <div className="flex gap-4 justify-center">
          <Image src={js} width="48" alt="JavaScript" title="JavaScript" unoptimized />
          <Image src={typescript} width="48" alt="TypeScript" title="TypeScript" unoptimized />
          <Image src={react} width="48" alt="ReactJS" title="ReactJS" unoptimized />
          <Image src={nextjs} width="48" alt="Next.js" title="Next.js" unoptimized />
          <Image src={html} width="48" alt="HTML" title="HTML" unoptimized />
          <Image src={css} width="48" alt="CSS" title="CSS" unoptimized />
          <Image src={tailwind} width="48" alt="Tailwind" title="Tailwind" unoptimized />
        </div>
        <div className="flex gap-4 justify-center">
          <Image src={python} width="48" alt="Python" title="Python" unoptimized />
          <Image src={nodejs} width="48" alt="Node.js" title="Node.js" unoptimized />
          <Image src={express} width="48" alt="Express" title="Express" unoptimized />
          <Image src={aws} width="48" alt="Amazon Web Services" title="AWS" unoptimized />
          <Image src={dynamodb} width="48" alt="DynamoDB" title="DynamoDB" unoptimized />
          </div>
          <div className="flex gap-4 justify-center">
          <Image src={jest} width="48" alt="Jest" title="Jest" unoptimized />
          </div>
        <div className="flex gap-4 justify-center">
          <Image src={git} width="48" alt="Git" title="Git" unoptimized />
          <Image src={github} width="48" alt="GitHub" title="GitHub" unoptimized />
          <Image src={figma} width="48" alt="Figma" title="Figma" unoptimized />
        </div>
       
      </section>
    </section>
  );
}
