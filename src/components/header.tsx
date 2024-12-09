import { useTranslations } from "next-intl";
import NavBar from "./navbar";
import LanguageSwitcher from "./languageswitcher";
import LogoHeader from "./logoheader";

export default function Header() {
  const t = useTranslations("HomePage");
  return (
    <header className="fixed w-full flex justify-between items-center px-4 bg-charcoal">
      <LogoHeader />
      <div className="flex gap-7 items-center">
        <NavBar />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
