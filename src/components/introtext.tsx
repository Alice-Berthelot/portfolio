"use client";
import { motion } from "framer-motion";

type IntroTextProps = {
  title: string;
  subtitle: string;
  descriptionFirst: React.ReactNode;
  descriptionSecond: string;
  descriptionThird: React.ReactNode;
  
};

export default function IntroText({ title, subtitle, descriptionFirst, descriptionSecond, descriptionThird }: IntroTextProps) {
  return (
    <motion.article
    className="flex flex-col items-end"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
    >
      <h1 className={`font-title text-7xl tracking-wide`}>
        {title.toUpperCase()}
      </h1>
      <h2 className={`font-title text-3xl tracking-widest mb-10`}>{subtitle.toUpperCase()}</h2>
      <div className="flex flex-col gap-6 w-10/12 text-xl text-right">
        <p>
          {descriptionFirst}
        </p>
        <p className="text-ghost-white/75 text-lg">
          {descriptionSecond}
        </p>
        <p className="text-ghost-white/75 italic text-lg">
          {descriptionThird}
        </p>
      </div>
    </motion.article>
  );
}
