import { useTranslations } from "next-intl";
import { MdOutlineConstruction } from "react-icons/md";

export default function TemporaryPage() {
  const t = useTranslations("Temporary");
  return (
    <section className="inline-flex gap-3 items-center text-lg bg-ghost-white text-dark-charcoal rounded-md p-3 border-box">
      <MdOutlineConstruction className="w-5 h-5" />
      <p>{t("page-content")}</p>
    </section>
  );
}
