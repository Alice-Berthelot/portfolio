import { useTranslations } from "next-intl";
import Subtitle from "./subtitle";

export default function SoftSkills() {
  const t = useTranslations("HomePage");
  const softSkills = t.raw("profile.softskills-content") as Record<string, string>;
  console.log(softSkills);
  return (
      <section className="bg-dark-charcoal w-[45%] mt-56 px-10 py-8 rounded-md border border-solid border-ghost-white/30 self-start" >
      <Subtitle title={t("profile.softskills-title")} />
      <ul className="pt-10 space-y-10 text-center">
        {Object.entries(softSkills).map(([key, value]) => (
          <li key={key} className="text-md">
            {value}
          </li>
        ))}
      </ul>
      </section>
  );
}
