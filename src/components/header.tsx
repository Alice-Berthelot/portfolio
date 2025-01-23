import NavBar from "./navbar";
import LanguageSwitcher from "./languageswitcher";
import LogoHeader from "./logoheader";

export default function Header() {
  return (
    <header className="fixed w-11/12 flex justify-between items-center px-4 py-2 bg-dark-charcoal border-solid border-b border-ghost-white left-1/2 transform -translate-x-1/2">
      <LogoHeader />
      <div className="flex gap-7 items-center">
        <NavBar />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
