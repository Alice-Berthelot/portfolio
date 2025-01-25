import { useTranslations } from "next-intl";
import Subtitle from "./subtitle";

export default function SoftSkills() {
  const t = useTranslations("HomePage");
  return (
      <section className="bg-dark-charcoal px-10 py-8 rounded-md border border-solid border-ghost-white/30" >
      <Subtitle title={t("profile.softskills-title")} />
      </section>
  );
}
