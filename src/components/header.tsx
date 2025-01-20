import NavBar from "./navbar";
import LanguageSwitcher from "./languageswitcher";
import LogoHeader from "./logoheader";

export default function Header() {
  return (
    <header className="fixed w-full flex justify-between items-center px-4 bg-charcoal shadow-header">
      <LogoHeader />
      <div className="flex gap-7 items-center">
        <NavBar />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
