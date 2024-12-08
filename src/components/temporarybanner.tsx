import { useTranslations } from "next-intl";
import { MdOutlineConstruction } from "react-icons/md";

export default function TemporaryBanner() {
  const t = useTranslations("TemporaryBanner");
  return (
    <header className="flex gap-2 items-center p-1.5 pl-3">
      <MdOutlineConstruction className="w-5 h-5"/>
      <p> {t("content")}</p>
    </header>
  );
}
