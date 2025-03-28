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
    <nav
      className={`flex items-center justify-around px-6 py-4 backdrop-blur-sm border-b border-white/10 ${
        isHomePage ? "navbar-dark" : "navbar-light"
      }`}
    >
      <Link href="/" className="flex items-center gap-3">
        {isHomePage ? (
          <Image
            src="/logo-horizontal-white.svg"
            alt="MenaSYP logo"
            width={200}
            height={100}
          />
        ) : (
          <>
            <Image
              src="/logo-icon-black.svg"
              alt="MenaSYP logo"
              width={60}
              height={60}
            />
            <span className="text-primary100 font-semibold text-xl">MenaSYP</span>
          </>
        )}
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
        <Button className="bg-primary100 cursor-pointer hover:bg-[#ff2040] text-white">
          Register Now!
        </Button>
      </div>
    </nav>
  );
}
