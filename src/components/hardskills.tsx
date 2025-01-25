import { useTranslations } from "next-intl";
import Subtitle from "./subtitle";
import aws from "../../public/logos/aws.svg";
import js from "../../public/logos/js.svg";
import css from "../../public/logos/css.svg";
import dynamodb from "../../public/logos/dynamodb.svg";
import express from "../../public/logos/express.svg";
import figma from "../../public/logos/figma.svg";
import git from "../../public/logos/git.svg";
import github from "../../public/logos/github.svg";
import html from "../../public/logos/html.svg";
import jest from "../../public/logos/jest.svg";
import nextjs from "../../public/logos/nextjs.svg";
import nodejs from "../../public/logos/node.svg";
import react from "../../public/logos/react.svg";
import python from "../../public/logos/python.svg";
import tailwind from "../../public/logos/tailwind.svg";
import typescript from "../../public/logos/typescript.svg";
import Image from "next/image";

export default function HardSkills() {
  const t = useTranslations("HomePage");

  return (
    <section className="bg-dark-charcoal flex flex-col gap-4 px-10 py-8 rounded-md border border-solid border-ghost-white/30">
      <Subtitle title={t("profile.hardskills-title")} />
      <p>Front-end</p>
      <div className="flex gap-4">
        <figure className="relative group">
          <Image src={js} width="48" alt="JavaScript" unoptimized />
          <figcaption className="figcaption-css opacity-0 rounded-md font-bold px-2 py-1.5 mt-2 text-sm transition-all duration-300  ease-[cubic-bezier(0.68,_-0.55,_0.265,_1.55)] text-dark-charcoal bg-ghost-white absolute z-50 left-1/2 top-full transform -translate-x-1/2 translate-y-[-1%] group-hover:opacity-100 group-hover:translate-y-0">
            JavaScript
          </figcaption>
        </figure>
        <figure className="relative group">
          <Image src={typescript} width="48" alt="TypeScript" unoptimized />
          <figcaption className="figcaption-css opacity-0 rounded-md font-bold px-2 py-1.5 mt-2 text-sm transition-all duration-300  ease-[cubic-bezier(0.68,_-0.55,_0.265,_1.55)] text-dark-charcoal bg-ghost-white absolute z-50 left-1/2 top-full transform -translate-x-1/2 translate-y-[-1%] group-hover:opacity-100 group-hover:translate-y-0">
            TypeScript
          </figcaption>
        </figure>
        <figure className="relative group">
          <Image src={react} width="48" alt="ReactJS" unoptimized />
          <figcaption className="figcaption-css opacity-0 rounded-md font-bold px-2 py-1.5 mt-2 text-sm transition-all duration-300  ease-[cubic-bezier(0.68,_-0.55,_0.265,_1.55)] text-dark-charcoal bg-ghost-white absolute z-50 left-1/2 top-full transform -translate-x-1/2 translate-y-[-1%] group-hover:opacity-100 group-hover:translate-y-0">
            ReactJS
          </figcaption>
        </figure>
        <figure className="relative group">
          <Image src={nextjs} width="48" alt="Next.js" unoptimized />
          <figcaption className="figcaption-css opacity-0 rounded-md font-bold px-2 py-1.5 mt-2 text-sm transition-all duration-300  ease-[cubic-bezier(0.68,_-0.55,_0.265,_1.55)] text-dark-charcoal bg-ghost-white absolute z-50 left-1/2 top-full transform -translate-x-1/2 translate-y-[-1%] group-hover:opacity-100 group-hover:translate-y-0">
            Next.js
          </figcaption>
        </figure>
        <figure className="relative group">
          <Image src={html} width="48" alt="HTML" title="HTML" unoptimized />
          <figcaption className="figcaption-css opacity-0 rounded-md font-bold px-2 py-1.5 mt-2 text-sm transition-all duration-300  ease-[cubic-bezier(0.68,_-0.55,_0.265,_1.55)] text-dark-charcoal bg-ghost-white absolute z-50 left-1/2 top-full transform -translate-x-1/2 translate-y-[-1%] group-hover:opacity-100 group-hover:translate-y-0">
            HTML
          </figcaption>
        </figure>
        <figure className="relative group">
          <Image src={css} width="48" alt="CSS" title="CSS" unoptimized />
          <figcaption className="figcaption-css opacity-0 rounded-md font-bold px-2 py-1.5 mt-2 text-sm transition-all duration-300  ease-[cubic-bezier(0.68,_-0.55,_0.265,_1.55)] text-dark-charcoal bg-ghost-white absolute z-50 left-1/2 top-full transform -translate-x-1/2 translate-y-[-1%] group-hover:opacity-100 group-hover:translate-y-0">
            CSS
          </figcaption>
        </figure>
        <figure className="relative group">
          <Image
            src={tailwind}
            width="48"
            alt="Tailwind"
            title="Tailwind"
            unoptimized
          />
          <figcaption className="figcaption-css opacity-0 rounded-md font-bold px-2 py-1.5 mt-2 text-sm transition-all duration-300  ease-[cubic-bezier(0.68,_-0.55,_0.265,_1.55)] text-dark-charcoal bg-ghost-white absolute z-50 left-1/2 top-full transform -translate-x-1/2 translate-y-[-1%] group-hover:opacity-100 group-hover:translate-y-0">
            TailwindCSS
          </figcaption>
        </figure>
      </div>
      <p className="mt-6">Back-end / Data</p>
      <div className="flex gap-4 mb-6">
        <figure className="relative group">
          <Image
            src={python}
            width="48"
            alt="Python"
            title="Python"
            unoptimized
          />

          <figcaption className="figcaption-css opacity-0 rounded-md font-bold px-2 py-1.5 mt-2 text-sm transition-all duration-300  ease-[cubic-bezier(0.68,_-0.55,_0.265,_1.55)] text-dark-charcoal bg-ghost-white absolute z-50 left-1/2 top-full transform -translate-x-1/2 translate-y-[-1%] group-hover:opacity-100 group-hover:translate-y-0">
            Python
          </figcaption>
        </figure>
        <figure className="relative group">
          <Image
            src={nodejs}
            width="48"
            alt="Node.js"
            title="Node.js"
            unoptimized
          />

          <figcaption className="figcaption-css opacity-0 rounded-md font-bold px-2 py-1.5 mt-2 text-sm transition-all duration-300  ease-[cubic-bezier(0.68,_-0.55,_0.265,_1.55)] text-dark-charcoal bg-ghost-white absolute z-50 left-1/2 top-full transform -translate-x-1/2 translate-y-[-1%] group-hover:opacity-100 group-hover:translate-y-0">
            Node.js
          </figcaption>
        </figure>
        <figure className="relative group">
          <Image
            src={express}
            width="48"
            alt="Express"
            title="Express"
            unoptimized
          />
          <figcaption className="figcaption-css opacity-0 rounded-md font-bold px-2 py-1.5 mt-2 text-sm transition-all duration-300  ease-[cubic-bezier(0.68,_-0.55,_0.265,_1.55)] text-dark-charcoal bg-ghost-white absolute z-50 left-1/2 top-full transform -translate-x-1/2 translate-y-[-1%] group-hover:opacity-100 group-hover:translate-y-0">
            Express
          </figcaption>
        </figure>
        <figure className="relative group">
          <Image
            src={aws}
            width="48"
            alt="Amazon Web Services"
            title="AWS"
            unoptimized
          />
          <figcaption className="figcaption-css opacity-0 rounded-md font-bold px-2 py-1.5 mt-2 text-sm transition-all duration-300  ease-[cubic-bezier(0.68,_-0.55,_0.265,_1.55)] text-dark-charcoal bg-ghost-white absolute z-50 left-1/2 top-full transform -translate-x-1/2 translate-y-[-1%] group-hover:opacity-100 group-hover:translate-y-0">
            AWS
          </figcaption>
        </figure>
        <figure className="relative group">
          <Image
            src={dynamodb}
            width="48"
            alt="DynamoDB"
            title="DynamoDB"
            unoptimized
          />
          <figcaption className="figcaption-css opacity-0 rounded-md font-bold px-2 py-1.5 mt-2 text-sm transition-all duration-300  ease-[cubic-bezier(0.68,_-0.55,_0.265,_1.55)] text-dark-charcoal bg-ghost-white absolute z-50 left-1/2 top-full transform -translate-x-1/2 translate-y-[-1%] group-hover:opacity-100 group-hover:translate-y-0">
            DynamoDB
          </figcaption>
        </figure>
      </div>
      <p>Tests</p>
      <div className="flex gap-4 mb-6">
        <figure className="relative group">
          <Image src={jest} width="48" alt="Jest" title="Jest" unoptimized />

          <figcaption className="figcaption-css opacity-0 rounded-md font-bold px-2 py-1.5 mt-2 text-sm transition-all duration-300  ease-[cubic-bezier(0.68,_-0.55,_0.265,_1.55)] text-dark-charcoal bg-ghost-white absolute z-50 left-1/2 top-full transform -translate-x-1/2 translate-y-[-1%] group-hover:opacity-100 group-hover:translate-y-0">
            Jest
          </figcaption>
        </figure>
      </div>
      <p>Gestion de projet</p>
      <div className="flex gap-4">
        <figure className="relative group">
          <Image src={git} width="48" alt="Git" title="Git" unoptimized />
          <figcaption className="figcaption-css opacity-0 rounded-md font-bold px-2 py-1.5 mt-2 text-sm transition-all duration-300  ease-[cubic-bezier(0.68,_-0.55,_0.265,_1.55)] text-dark-charcoal bg-ghost-white absolute z-50 left-1/2 top-full transform -translate-x-1/2 translate-y-[-1%] group-hover:opacity-100 group-hover:translate-y-0">
            Git
          </figcaption>
        </figure>
        <figure className="relative group">
          <Image
            src={github}
            width="48"
            alt="GitHub"
            title="GitHub"
            unoptimized
          />
          <figcaption className="figcaption-css opacity-0 rounded-md font-bold px-2 py-1.5 mt-2 text-sm transition-all duration-300  ease-[cubic-bezier(0.68,_-0.55,_0.265,_1.55)] text-dark-charcoal bg-ghost-white absolute z-50 left-1/2 top-full transform -translate-x-1/2 translate-y-[-1%] group-hover:opacity-100 group-hover:translate-y-0">
            GitHub
          </figcaption>
        </figure>
        <figure className="relative group">
          <Image src={figma} width="48" alt="Figma" title="Figma" unoptimized />
          <figcaption className="figcaption-css opacity-0 rounded-md font-bold px-2 py-1.5 mt-2 text-sm transition-all duration-300  ease-[cubic-bezier(0.68,_-0.55,_0.265,_1.55)] text-dark-charcoal bg-ghost-white absolute z-50 left-1/2 top-full transform -translate-x-1/2 translate-y-[-1%] group-hover:opacity-100 group-hover:translate-y-0">
            Figma
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
