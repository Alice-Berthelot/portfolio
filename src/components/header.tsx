import {useTranslations} from 'next-intl';
import NavBar from './navbar';
import LanguageSwitcher from './languageswitcher';
 
export default function Header() {
  const t = useTranslations('HomePage');
  return (
    <>
      <NavBar />
      <LanguageSwitcher />
    </>
  );
}