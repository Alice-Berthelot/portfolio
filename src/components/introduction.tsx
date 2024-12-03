import { useTranslations } from "next-intl";
import Resumes from "./resumes";

export default function Introduction() {
  const t = useTranslations("HomePage");
  return (
    <section>
      <Resumes />
    </section>
  );
}
