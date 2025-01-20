import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export default function Links() {
  return (
    <nav>
      <ul className="flex gap-1">
        <li>
          <Link href="https://www.linkedin.com/in/alice-berthelot/" target="_blank">
          <IoLogoLinkedin className="text-ghost-white hover:text-charcoal w-8 h-8" />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Alice-Berthelot" target="_blank">
          <IoLogoGithub className="text-ghost-white hover:text-charcoal w-8 h-8 " />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
