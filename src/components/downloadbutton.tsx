import { useLocale } from "next-intl";
import { IoOpenOutline } from "react-icons/io5";

type DownloadButtonProp = {
  source: string;
  title: string;
};

export default function DownloadButton({ title, source }: DownloadButtonProp) {
  return (
    <a href={source} target="_blank" aria-label="Ouvrir le CV dans un nouvel onglet" className="flex items-center gap-1.5 bg-ghost-white hover:bg-transparent text-charcoal hover:text-ghost-white border-solid border-1 border-transparent hover:border-ghost-white font-bold px-5 py-1.5 rounded-2xl">
      {title} <IoOpenOutline className="text-xl"/>
    </a>
  );
}
