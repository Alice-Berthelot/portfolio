import { useTranslations } from "next-intl";
import Subtitle from "./subtitle";

export default function Hobbies() {
  const t = useTranslations("HomePage");
  return (
    <section className="mt-4">
      <Subtitle title={t("profile.hobbies.title")} />
      <section className="bg-dark-charcoal w-3/4 mx-auto mt-6 p-10"></section>
    </section>
  );
}
