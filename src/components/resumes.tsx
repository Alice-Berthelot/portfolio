import { useTranslations } from "next-intl";
import DownloadButton from "./downloadbutton";

export default function Resumes() {
  const t = useTranslations("HomePage");
  return (
    <>
      <ul>
        <li><DownloadButton source={"/resumes/CV_Alice_Berthelot.pdf"} title={t("introduction.cv-fr")}/></li>
        <li><DownloadButton source={"/resumes/CV_Alice_Berthelot_Detaille.pdf"} title={t("introduction.cv-fr-detailed")}/></li>
        <li><DownloadButton source={"/resumes/Resume_Alice_Berthelot.pdf"} title={t("introduction.cv-eng")}/></li>
      </ul>
    </>
  );
}
