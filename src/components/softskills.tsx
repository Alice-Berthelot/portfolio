import { useTranslations } from "next-intl";
import Subtitle from "./subtitle";

export default function SoftSkills() {
  const t = useTranslations("HomePage");
  return (
      <section className="bg-dark-charcoal p-10 rounded-xl" >
      <Subtitle title={t("profile.softskills-title")} />
      </section>
  );
}
