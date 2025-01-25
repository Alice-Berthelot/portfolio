import { useLocale } from "next-intl";
import logo from "./../../public/logos/logo-navbar.png";
import Image from "next/image";
import Link from "next/link";

export default function LogoHeader() {
  const locale = useLocale();
  return (
    <>
      {/* prévoir traduction pour le alt */}
      <Link href={`/${locale}`}>
        <Image
          alt="Logo du portfolio pour retourner vers l'accueil"
          src={logo}
          width="35"
        />
      </Link>
    </>
  );
}
