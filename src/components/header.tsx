import { useTranslations } from "next-intl";
import NavBar from "./navbar";
import LanguageSwitcher from "./languageswitcher";
import LogoHeader from "./logoheader";

export default function Header() {
  const t = useTranslations("HomePage");
  return (
    <header className="flex justify-between">
      <LogoHeader />
      <NavBar />
      <LanguageSwitcher />
    </header>
  );
}
