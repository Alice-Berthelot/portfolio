import { useLocale } from "next-intl";
import { IoOpenOutline } from "react-icons/io5";

type DownloadButtonProp = {
  source: string;
  title: string;
};

export default function DownloadButton({ title, source }: DownloadButtonProp) {
  return (
    <a href={source} target="_blank" aria-label="Ouvrir le CV dans un nouvel onglet">
      {title} <IoOpenOutline />
    </a>
  );
}
