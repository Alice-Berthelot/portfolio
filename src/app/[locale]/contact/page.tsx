import {useTranslations} from 'next-intl';
 
export default function ContactPage() {
  const t = useTranslations('ContactPage');
  return (
    <>
      <h1 className={`font-title`}>{t("title")}</h1>
    </>
  );
}