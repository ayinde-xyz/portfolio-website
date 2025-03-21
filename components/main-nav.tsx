"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "./ui/sidebar";

interface MainNavProps {
  className?: string;
}

const MainNav = ({ className }: MainNavProps) => {
  const pathname = usePathname();
  const { setOpen } = useSidebar();

  const routes = [
    {
      href: "/#intro",
      label: "Intro",
      active: pathname === "/#intro",
    },
    {
      href: "/#about-me",
      label: "About me",
      active: pathname === "/#about-me",
    },
    {
      href: "/#projects",
      label: "Projects",
      active: pathname === "/#projects",
    },
    {
      href: "/#certifications",
      label: "Certifications",
      active: pathname === "/#certifications",
    },
    {
      href: "/#skills",
      label: "Skills",
      active: pathname === "/#skills",
    },
    {
      href: "/#experience",
      label: "Experience",
      active: pathname === "/#experience",
    },
    {
      href: "/studio",
      label: "Admin",
      active: pathname === "/studio",
    },
    {
      href: "/#contact-me",
      label: "Contact Me",
      active: pathname === "/#contact-me",
    },
  ];

  return (
    <nav className={cn("flex items-center", className)}>
      {routes.map((route) => (
        <Link
          onClick={() => {
            setOpen(false);
          }}
          key={route.href}
          href={route.href}
          className={cn(
            "font-medium transition-colors hover:text-primary",
            route.active && "text-red"
          )}>
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
