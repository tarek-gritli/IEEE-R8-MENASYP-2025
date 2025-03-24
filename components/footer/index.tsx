"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { navbarLinks } from "@/constants";
import NavLink from "../navbar/NavLink";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-dark border-custom">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo and description */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 max-w-lg">
            {/* Logo */}
            <Image
              src="/images/logo-dark.png"
              alt="menasyp logo"
              width={120}
              height={100}
            />

            {/* Description */}
            <div className="text-sm text-description max-w-xs max-h-xs">
              MENASYP 2025 brings together students, young professionals, and
              industry leaders for a unique blend of professional growth,
              networking, and cultural immersion in Tunisia.
            </div>
          </div>

          {/* Social media */}
          <div className="text-right flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-dark">Stay </span>
              <span className="text-primary100">In Touch</span>
            </h3>
            <div className="flex gap-6 justify-center">
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
                className="text-white hover:text-[#ff3a5c] transition-colors duration-300"
              >
                <Linkedin size={30} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {navbarLinks.map((link) => (
            <NavLink
              key={link.route}
              href={link.route}
              isHomePage={true}
              isActive={pathname === link.route}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="relative w-full h-80">
        <Image
          src="/images/footer.png"
          alt="Decorative footer pattern"
          fill
          className="object-cover"
        />

        {/* Copyright overlay */}
        <div className="absolute bottom-0 left-0 right-0 py-4">
          <div className="text-center text-xl font-bold text-description">
            © 2025 MENASYP. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
