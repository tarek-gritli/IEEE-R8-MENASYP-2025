"use client";

import Image from "next/image";
import Link from "next/link";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import ActionButton from "../ActionButton";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="relative">
      <nav className="w-full z-50 transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-4 absolute navbar-gradient text-white">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-horizontal-white.svg"
            alt="MenaSYP logo"
            width={160}
            height={80}
            className="w-32 sm:w-40 md:w-48 lg:w-52 h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center space-x-6 lg:space-x-8">
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

        <div className="hidden md:flex items-center">
          <ActionButton text="Registration coming soon" disabled={true} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 cursor-pointer" />
          ) : (
            <Menu className="w-6 h-6 cursor-pointer" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-dark bg-opacity-95 pt-20 px-4 md:hidden">
          <div className="flex flex-col items-center space-y-6">
            {navbarLinks.map((link) => (
              <Link
                key={link.route}
                href={link.route}
                className={`text-xl font-medium ${
                  pathname === link.route
                    ? "text-primary100"
                    : "text-white hover:text-primary100"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <ActionButton
                text="Registration coming soon"
                disabled={true}
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
