"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  className?: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainNav = ({ className, setIsOpen }: MainNavProps) => {
  const pathname = usePathname();

  const handleClicked = () => {
    setIsOpen(false);
  };

  const routes = [
    {
      href: "#intro",
      label: "Intro",
      active: pathname === "/#intro",
    },
    {
      href: "#about-me",
      label: "About me",
      active: pathname === "/#about-me",
    },
    {
      href: "#projects",
      label: "My Projects",
      active: pathname === "/#projects",
    },
    {
      href: "#certifications",
      label: "Certifications",
      active: pathname === "/#certifications",
    },
    {
      href: "#skills",
      label: "Skills",
      active: pathname === "/#skills",
    },
    {
      href: "#experience",
      label: "Experience",
      active: pathname === "/#experience",
    },
    {
      href: "#contact-me",
      label: "Contact Me",
      active: pathname === "/#contact-me",
    },
  ];

  return (
    <nav className={cn("flex items-center", className)}>
      {routes.map((route) => (
        <Link
          onClick={handleClicked}
          key={route.href}
          href={route.href}
          className={cn(
            "font-medium transition-colors hover:text-primary",
            route.active ? "" : ""
          )}>
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
