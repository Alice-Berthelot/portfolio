import { useTranslations } from "next-intl";

export default function Resumes() {
  const t = useTranslations("HomePage");
  return (
    <>
      <ul>
        <li>cv 1</li>
        <li>cv 2</li>
        <li>cv 3</li>
      </ul>
    </>
  );
}
