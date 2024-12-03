import {useTranslations} from 'next-intl';
 
export default function ProjectPage() {
  const t = useTranslations('ProjectPage');
  return (
    <>
      <p>This is the project page!</p>
    </>
  );
}