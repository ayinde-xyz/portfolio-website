"use client";
import { useState, useEffect, useRef } from "react";
import { ModeToggle } from "./theme-toggle";

import MainNav from "./main-nav";
import { SidebarTrigger } from "./ui/sidebar";
import Logo from "@/public/svg/logo5.svg";
import SkillBadge from "./badge";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  // let lastScrollY = 0;
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed z-10 top-0 flex flex-row w-full items-center dark:bg-slate-900/30  bg-white/30 backdrop-blur-sm backdrop-grayscale  justify-between px-4 sm:px-10 pt-3 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
      {/* Logo section */}
      <div>
        {/* <Image className="" src={Logo} alt="Logo" /> */}
        {/* <Hexagon className="w-10 h-10" /> */}
        <SkillBadge src={Logo} alt="Logo" className="dark:invert " />
      </div>

      {/* Nav section */}
      <MainNav className="hidden md:block space-x-4 lg:space-x-6" />
      {/* <Navbar isOpen={isOpen} setIsOpen={setIsOpen} /> */}

      {/* Dark Mode and Nav Toggle for mobile */}
      <div className="flex items-center justify-start space-x-2">
        {/* Dark Mode */}
        <ModeToggle />

        {/* Nav Toggle */}
        <SidebarTrigger className="md:hidden block" />
        {/* <Button
          onClick={() => {
            setOpen(false);
          }}
          variant={"outline"}
          size={"icon"}
          className="">
          <AlignJustify className="" />
        </Button> */}
      </div>
    </header>
  );
};

export default Header;
