import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { navbarLinks } from "@/constants";
import NavLink from "../navbar/NavLink";

const Footer = () => {
  return (
    <footer className="footer-gradient relative w-full p-4">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col items-center gap-8">
          <div className="w-24 md:w-32">
            <Image
              src="/logo-icon-white.svg"
              alt="MenaSYP logo"
              width={120}
              height={100}
            />
          </div>

          <nav className="w-full">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-x-8">
              {navbarLinks.map((link) => (
                <li key={link.route}>
                  <NavLink href={link.route}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-6">
            <Link
              href="https://www.facebook.com/menasyp2025"
              aria-label="Facebook"
              className="text-white hover:text-primary100 transition-colors duration-300"
              target="_blank"
            >
              <Facebook
                size={24}
                strokeWidth={1.5}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </Link>
            <Link
              href="https://www.instagram.com/menasyp2025"
              aria-label="Instagram"
              className="text-white hover:text-primary100 transition-colors duration-300"
              target="_blank"
            >
              <Instagram
                size={24}
                strokeWidth={1.5}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/ieee-mesyp-2023/"
              aria-label="LinkedIn"
              className="text-white hover:text-primary100 transition-colors duration-300"
              target="_blank"
            >
              <Linkedin
                size={24}
                strokeWidth={1.5}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </Link>
          </div>

          <p className="text-sm md:text-base text-center text-[#675973]">
            IEEE MENASYP Tunisia 2025 - All Rights Reserved
          </p>
        </div>
      </div>
      <div className="w-full bg-repeat-x h-12 md:h-20 red-pattern"></div>
    </footer>
  );
};

export default Footer;
