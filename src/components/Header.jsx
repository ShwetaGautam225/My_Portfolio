import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { MdAddCall } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="sm:px-10 fixed top-0 left-0 w-full bg-transparent backdrop-blur-2xl px-5 z-50">
      <div className="relative max-w-[1366px] w-full mx-auto">
        <div className="h-18 flex justify-between items-center">
          <Link to="/">
            <h2 className="bg-gradient-to-r from-[#fd1100] to-[#FD6F00] bg-clip-text text-transparent font-bold text-3xl">
              SG
            </h2>
          </Link>
          <div className={isOpen ? "fixed top-0 left-0 w-full bg-[#FD6F00] sm:static sm:bg-transparent sm:w-auto" : "hidden sm:flex"}>
            <ul className="h-screen flex flex-col items-center justify-center gap-5 sm:h-auto sm:flex-row sm:space-y-0  md:space-x-10 lg:space-x-14">
              <li className="text-white text-md cursor-pointer transition-all duration-150 hover:text-[#FD6F00]">
                <ScrollLink to="home" smooth={true} duration={500}>
                  Home
                </ScrollLink>
              </li>
              <li className="text-white text-md cursor-pointer transition-all duration-150 hover:text-[#FD6F00]">
                <ScrollLink to="aboutme" smooth={true} duration={500}>
                  About Me
                </ScrollLink>
              </li>
              <li className="text-white text-md cursor-pointer transition-all duration-150 hover:text-[#FD6F00]">
                <ScrollLink to="services" smooth={true} duration={500}>
                  Services
                </ScrollLink>
              </li>
              <li className="text-white text-md cursor-pointer transition-all duration-150 hover:text-[#FD6F00]">
                <ScrollLink to="projects" smooth={true} duration={500}>
                  Projects
                </ScrollLink>
              </li>
              <li className="bg-gradient-to-r from-[#fd1100] to-[#FD6F00] bg-gradient-to-r-[#000] rounded-sm py-3 px-6">
                <Link
                  to="tel:+ 919793639655"
                  className="inline-flex items-center gap-2 text-md text-white font-medium"
                >
                  Contact <MdAddCall />
                </Link>
              </li>
            </ul>
          </div>

          <button className={`absolute top-[50%] right-0 -translate-y-[50%] h-10 w-10 flex justify-center items-center rounded-sm cursor-pointer z-50 sm:hidden ${isOpen ? "bg-black" : "bg-[#FD6F00]"}`} onClick={handleToggleMenu}>
            {isOpen ? (
              <IoMdClose className="text-2xl text-white" />
            ) : (
              <IoMdMenu className="text-2xl text-white" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
