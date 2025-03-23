"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-around px-6 py-4 backdrop-blur-sm border-b border-white/10">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/logo-dark.png"
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

function NavLink({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={`${
        isActive ? "text-primary100" : "text-white"
      } hover:text-white transition-colors relative group`}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary100 transition-all group-hover:w-full" />
    </Link>
  );
}
