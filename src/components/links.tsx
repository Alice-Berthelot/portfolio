import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export default function Links() {
  return (
    <nav className="order-first md:order-last">
      <ul className="flex gap-2">
        <li>
          <Link href="https://www.linkedin.com/in/alice-berthelot/" target="_blank">
          <IoLogoLinkedin className="text-ghost-white/75 hover:text-ghost-white w-8 h-8" />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Alice-Berthelot" target="_blank">
          <IoLogoGithub className="text-ghost-white/75 hover:text-ghost-white w-8 h-8 " />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
