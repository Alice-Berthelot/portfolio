// couleur pour le fond : #0f1d22

import Links from "./links";

// import { useTranslations } from "next-intl";

export default function Footer() {
  //   const t = useTranslations("HomePage");
  return (
    <footer className="flex justify-between">
      <Links />
    </footer>
  );
}
