import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import logoLinkedin from "../../public/logos/linkedin.png";
import logoGitHub from "../../public/logos/github.png";

export default function Links() {
  const t = useTranslations("NavBar");
  const locale = useLocale();
  return (
    <nav>
      <ul className="flex">
        <li>
          <Link href="https://www.linkedin.com/in/alice-berthelot/">
            <Image
              src={logoLinkedin}
              width={50}
              height={50}
              alt="LinkedIn logo"
            />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Alice-Berthelot">
            <Image src={logoGitHub} width={50} height={50} alt="GitHub logo" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
