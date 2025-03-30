"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <div className={cn("relative", isHomePage ? "" : "bg-white")}>
      <nav
        className={cn(
          "w-full z-50 transition-all duration-300 flex items-center justify-around px-6 py-4",
          isHomePage
            ? "absolute navbar-gradient text-white"
            : "relative bg-white"
        )}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={
              isHomePage
                ? "/logo-horizontal-white.svg"
                : "/logo-horizontal-black.svg"
            }
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
              isHomePage={isHomePage}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button className="bg-primary100 cursor-pointer hover:bg-[#ff2040] text-white">
            Register Now
          </Button>
        </div>
      </nav>
    </div>
  );
}
