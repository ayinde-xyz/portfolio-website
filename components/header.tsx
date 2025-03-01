"use client";
import { useState, useEffect, useRef } from "react";
import { ModeToggle } from "./theme-toggle";
import { Hexagon } from "lucide-react";

import MainNav from "./main-nav";
import { SidebarTrigger } from "./ui/sidebar";

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
      className={`fixed z-10 top-0 flex flex-row w-full items-center justify-between px-4 sm:px-10 pt-3 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
      {/* Logo section */}
      <div className="w-40 h-20">
        {/* <Image className="" src={Logo} alt="Logo" /> */}
        <Hexagon className="w-10 h-10" />
      </div>

      {/* Nav section */}
      <MainNav className="hidden md:block space-x-4 lg:space-x-6" />
      {/* <Navbar isOpen={isOpen} setIsOpen={setIsOpen} /> */}

      {/* Dark Mode and Nav Toggle for mobile */}
      <div className="flex justify-start space-x-2">
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
