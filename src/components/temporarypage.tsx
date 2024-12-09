import { useTranslations } from "next-intl";
import { MdOutlineConstruction } from "react-icons/md";

export default function TemporaryPage() {
  const t = useTranslations("Temporary");
  return (
    <section className="flex gap-3 mt-4 text-lg">
      <MdOutlineConstruction className="w-5 h-5" />
      <p>{t("page-content")}</p>
    </section>
  );
}
