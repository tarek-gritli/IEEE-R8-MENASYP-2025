import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavLink({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-white hover:text-white transition-colors relative group",
        isActive && "text-primary100"
      )}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary100 transition-all group-hover:w-full" />
    </Link>
  );
}
