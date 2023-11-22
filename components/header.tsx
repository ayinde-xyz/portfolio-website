"use client";
import { useState } from "react";
import { ModeToggle } from "./theme-toggle";
import { AlignJustify, Hexagon } from "lucide-react";
import { Button } from "./ui/button";
import MainNav from "./main-nav";
import Navbar from "./navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed z-10 top-0 flex flex-row w-full items-center justify-between px-4 sm:px-10 pt-3">
      {/* Logo section */}
      <div className="w-40 h-20">
        {/* <Image className="" src={Logo} alt="Logo" /> */}
        <Hexagon className="w-20 h-20" />
      </div>

      {/* Nav section */}
      <MainNav
        setIsOpen={setIsOpen}
        className="hidden md:block space-x-4 lg:space-x-6"
      />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Dark Mode and Nav Toggle for mobile */}
      <div className="flex items-center space-x-2">
        {/* Dark Mode */}
        <ModeToggle />

        {/* Nav Toggle */}
        <Button
          onClick={() => {
            setIsOpen(true);
            console.log("true");
          }}
          variant={"outline"}>
          <AlignJustify className="" />
        </Button>
      </div>
    </header>
  );
};

export default Header;

// <nav className="hidden sm:block">
//         <ul className="flex items-center justify-between space-x-5">
//           <li>
//             <a href="#">Intro</a>
//           </li>
//           <li>
//             <a href="#">About me</a>
//           </li>
//           <li>
//             <a href="#">My Projects</a>
//           </li>
//           <li>
//             <a href="#">Certifications</a>
//           </li>
//           <li>
//             <a href="#">Gigs</a>
//           </li>
//           <li>
//             <a href="#">Contact Me</a>
//           </li>
//         </ul>
//       </nav>
