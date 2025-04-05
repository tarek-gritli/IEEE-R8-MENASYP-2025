import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { navbarLinks } from "@/constants";
import NavLink from "../navbar/NavLink";

const Footer = () => {
  return (
    <footer className="footer-gradient relative p-4 w-full">
      <div className="flex flex-col md:flex-col justify-between items-start md:items-center gap-4">
        <Image
          src="/logo-icon-white.svg"
          alt="MenaSYP logo"
          width={120}
          height={100}
        />
        <div>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {navbarLinks.map((link) => (
              <NavLink key={link.route} href={link.route}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex flex-row gap-6 justify-center">
          <Link
            href="#"
            aria-label="Facebook"
            className="text-white hover:text-primary100 transition-colors duration-300"
          >
            <Facebook size={30} strokeWidth={1.5} />
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            className="text-white hover:text-primary100 transition-colors duration-300"
          >
            <Instagram size={30} strokeWidth={1.5} />
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            className="text-white hover:text-primary100 transition-colors duration-300"
          >
            <Linkedin size={30} strokeWidth={1.5} />
          </Link>
        </div>
        <p className="font-normal text-[#675973]">
          IEEE MENASYP Tunisia 2025 - All Rights Reserved
        </p>
      </div>
      <div className="w-full bg-repeat-x h-20 red-pattern"></div>
    </footer>
  );
};

export default Footer;
