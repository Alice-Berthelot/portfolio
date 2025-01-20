import { IoOpenOutline } from "react-icons/io5";

type DownloadButtonProp = {
  source: string;
  title: string;
};

export default function DownloadButton({ title, source }: DownloadButtonProp) {
  return (
    <a
      href={source}
      target="_blank"
      aria-label="Ouvrir le CV dans un nouvel onglet"
      className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-ghost-white rounded-full cursor-pointer shadow-[0_2px_4px_rgba(0,0,0,1),0_10px_20px_rgba(0,0,0,0.4)] transition-all duration-200 ease-out bg-gradient-to-b from-[#171717] to-[#242424] border border-[#292929] active:translate-y-0.5 active:shadow-[0_1px_2px_rgba(0,0,0,1),0_5px_10px_rgba(0,0,0,0.4)] before:absolute before:top-[-2px] before:right-[-1px] before:bottom-[-1px] before:left-[-1px] before:bg-gradient-to-b before:from-[#292929] before:to-[#000000] before:rounded-full before:z-[-1] before:transition-all before:duration-200"
    >
      {title} <IoOpenOutline className="text-xl" />
    </a>
  );
}
