import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="absolute w-full">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-7 pl-[5%] pr-10 bg-transparent">
        <div>
           <img src={Logo} className="w-32 h-16" />
        </div>
        <button
          onClick={toggleMenu}
          className="laptop:hidden w-12 h-10 p-2"
        >
          <span
            className={`block w-full h-1 bg-[#C46C4A] rounded transition-transform duration-300 ${
              isMenuOpen
                ? "transform rotate-45 translate-y-2"
                : "transform rotate-0"
            }`}
          ></span>
          <span
            className={`block w-full h-1 bg-[#C46C4A] rounded my-1 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-full h-1 bg-[#C46C4A] rounded transition-transform duration-300 ${
              isMenuOpen
                ? "transform -rotate-45 -translate-y-2"
                : "transform rotate-0"
            }`}
          ></span>
        </button>
        {/* Desktop Links */}
        <ul className="hidden laptop:flex space-x-6">
          <li><a href="#home" className="uppercase">Home</a></li>
          <li><a href="#home" className="uppercase">About us</a></li>
          <li><a href="#home" className="uppercase">Location</a></li>
          <li><a href="#home" className="uppercase">latest</a></li>
          <li><a href="#home" className="uppercase">virtual tour</a></li>
          <li><a href="#home" className="uppercase">contact us</a></li>
          <li><a href="#home" className="uppercase">floor plan</a></li>
        </ul>
      </nav>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#EFEADC] text-[#432a2b] transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <ul className="space-y-6 mt-7 text-xl px-6">
        <li><a href="#home" className="uppercase">Home</a></li>
          <li><a href="#home" className="uppercase">About us</a></li>
          <li><a href="#home" className="uppercase">Location</a></li>
          <li><a href="#home" className="uppercase">latest</a></li>
          <li><a href="#home" className="uppercase">virtual tour</a></li>
          <li><a href="#home" className="uppercase">contact us</a></li>
          <li><a href="#home" className="uppercase">floor plan</a></li>
        </ul>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default Navbar;
