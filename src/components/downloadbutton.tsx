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
      className="inline-block flex items-center justify-center gap-2 py-4 px-6 rounded-md border border-solid border-ghost-white/30 text-base md:text-sm lg:text-base font-bold download-button hover:dark-charcoal"
    >
      {title} <IoOpenOutline className="text-xl md:-ml-1 lg:ml-auto" />
    </a>
  );
}
