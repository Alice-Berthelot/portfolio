import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import logoLinkedin from "../../public/logos/linkedin.png";
import logoGitHub from "../../public/logos/github.png";

export default function NavBar() {
  const t = useTranslations("NavBar");
  const locale = useLocale();
  return (
    <nav>
      <ul className="flex items-center">
      <li>
          {t("about")}
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
