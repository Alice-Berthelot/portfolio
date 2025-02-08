"use client";
import { useTranslations } from "next-intl";
import DownloadButton from "./downloadbutton";
import { motion } from "framer-motion";

export default function Resumes() {
  const t = useTranslations("HomePage");
  return (
    <>
      <motion.ul
        className="flex gap-5 mr-2"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.5 }}
      >
        <li>
          <DownloadButton
            source={"/resumes/CV_Alice_Berthelot.pdf"}
            title={t("introduction.cv-fr")}
          />
        </li>
        <li>
          <DownloadButton
            source={"/resumes/CV_Alice_Berthelot_Detaille.pdf"}
            title={t("introduction.cv-fr-detailed")}
          />
        </li>
        <li>
          <DownloadButton
            source={"/resumes/Resume_Alice_Berthelot.pdf"}
            title={t("introduction.cv-eng")}
          />
        </li>
      </motion.ul>
    </>
  );
}
