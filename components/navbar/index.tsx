"use client";

import Image from "next/image";
import Link from "next/link";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import ActionButton from "../ActionButton";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="relative">
      <nav className="w-full z-50 transition-all duration-300 flex items-center justify-around px-6 py-4 absolute navbar-gradient text-white">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-horizontal-white.svg"
            alt="MenaSYP logo"
            width={200}
            height={100}
          />
        </Link>

        <div className="flex justify-center items-center space-x-8">
          {navbarLinks.map((link) => (
            <NavLink
              key={link.route}
              href={link.route}
              isActive={pathname === link.route}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ActionButton text="Register Now" />
        </div>
      </nav>
    </div>
  );
}
