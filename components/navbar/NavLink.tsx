import Link from "next/link";

export default function NavLink({
  href,
  children,
  isActive,
  isHomePage,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  isHomePage: boolean;
}) {
  return (
    <Link
      href={href}
      className={`${isActive ? "text-primary100" : ""} ${
        isHomePage
          ? "text-white hover:text-white"
          : "text-black hover:text-black"
      } transition-colors relative group`}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary100 transition-all group-hover:w-full" />
    </Link>
  );
}
