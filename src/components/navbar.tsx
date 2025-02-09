import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function NavBar() {
  const t = useTranslations("NavBar");
  const locale = useLocale();

  const classLi =
    "relative transform transition-all ease-in-out duration-300 lg:hover:rotate-[-10deg] ";

  return (
    <nav>
      <ul className="flex items-center gap-4 font-semibold tracking-wide">
        <li className={classLi}>
          <Link href={`/${locale}/#about`}>{t("about")}</Link>
        </li>
        <li className={classLi}>
          <Link href={`/${locale}/projects`}>{t("projects")}</Link>
        </li>
        <li className={classLi}>
          <Link href={`/${locale}/background`}>{t("background")}</Link>
        </li>
        <li className={classLi}>
          <Link href={`/${locale}/contact`}>{t("contact")}</Link>
        </li>
      </ul>
    </nav>
  );
}
