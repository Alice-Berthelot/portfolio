"use client";
import { useTranslations } from "next-intl";
import DownloadButton from "./downloadbutton";
import { motion } from "framer-motion";

type ResumesProps = {
  locale: string;
}

export default function Resumes({locale}: ResumesProps) {
  const t = useTranslations("HomePage");
  return (
    <>
      <motion.ul
        className={`flex gap-5 flex-col md:flex-row md:w-[135%] md:mr-2 lg:w-auto  ${locale === "en" ? " md:w-[135%]" : " md:w-[110%]"}`}
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.5 }}
      >
        <li className={locale === "en" ? "order-2" : "order-1"}>
          <DownloadButton
            source={"/resumes/CV_Alice_Berthelot.pdf"}
            title={t("introduction.cv-fr")}
          />
        </li>
        <li className={locale === "en" ? "order-3" : "order-2"}>
          <DownloadButton
            source={"/resumes/CV_Alice_Berthelot_Detaille.pdf"}
            title={t("introduction.cv-fr-detailed")}
          />
        </li>
        <li className={locale === "en" ? "order-1" : "order-3"}>
          <DownloadButton
            source={"/resumes/Resume_Alice_Berthelot.pdf"}
            title={t("introduction.cv-eng")}
          />
        </li>
      </motion.ul>
    </>
  );
}
