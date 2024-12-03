import { useLocale } from "next-intl";

type DownloadButtonProp = {
  source: string,
  title: string
}

export default function DownloadButton({title, source}: DownloadButtonProp) {
  const locale = useLocale();
  return (
    <>
   <button><a href={source} target='_blank'>{title}</a></button>
    </>
  );
}
