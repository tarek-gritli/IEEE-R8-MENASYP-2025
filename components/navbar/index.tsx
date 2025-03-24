"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <nav className="flex items-center justify-around px-6 py-4 backdrop-blur-sm border-b border-white/10">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src={isHomePage ? "/images/logo-dark.png" : "/images/logo-light.png"}
          alt="MenaSYP logo"
          width={60}
          height={60}
        />
        <span className="text-primary100 font-medium text-xl mt-3">
          MenaSYP
        </span>
      </Link>

      <div className="flex justify-center items-center space-x-8">
        {navbarLinks.map((link) => (
          <NavLink
            key={link.route}
            href={link.route}
            isActive={pathname === link.route}
            isHomePage={isHomePage}
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Button className="bg-gradient-custom cursor-pointer text-black">
          Register Now!
        </Button>
      </div>
    </nav>
  );
}
