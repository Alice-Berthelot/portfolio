import { useTranslations } from "next-intl";
import Subtitle from "./subtitle";
import { ScrollDownAnimation } from "./scrolldownanimation";

export default function SoftSkills() {
  const t = useTranslations("HomePage");
  const softSkills = t.raw("profile.softskills-content") as Record<
    string,
    string
  >;
  return (
    <div className="w-[75%] md:w-[60%] lg:w-[45%]">
      <ScrollDownAnimation>
        <section className="bg-dark-charcoal mt-auto lg:mt-56 px-10 py-8 rounded-md border border-solid border-ghost-white/30 self-start">
          <Subtitle title={t("profile.softskills-title")} />
          <ul className="pt-4 space-y-2 text-center text-ghost-white/75">
            {Object.entries(softSkills).map(([key, value], index, array) => (
              <ScrollDownAnimation key={key}>
                <li className="text-lg">{value}</li>
                {index < array.length - 1 && (
                  <li key={`${key} - separator`} className="text-joyful"> ~ </li>
                )}
              </ScrollDownAnimation>
            ))}
          </ul>
        </section>
      </ScrollDownAnimation>
    </div>
  );
}
