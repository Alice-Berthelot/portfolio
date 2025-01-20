import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function NavBar() {
  const t = useTranslations("NavBar");
  const locale = useLocale();
  return (
    <nav>
      <ul className="flex items-center gap-4 font-semibold tracking-wide	">
      <li>
      <Link href={`/${locale}/#about`} className="test">{t("about")}</Link>
        </li>
        <li>
          <Link href={`/${locale}/projects`}>{t("projects")}</Link>
        </li>
        <li>
          <Link href={`/${locale}/background`}>{t("background")}</Link>
        </li>
        <li>
          <Link href={`/${locale}/contact`}>{t("contact")}</Link>
        </li>
      </ul>
    </nav>
  );
}
