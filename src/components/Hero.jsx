import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import {
  graphicsGrid,
  graphicsOrange,
  graphisPurple,
  swetaImage,
} from "../assets";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["UI/UX Designer", "Frontend Developer"],
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section aria-label="Hero Section" className="sm:px-10 relative bg-black px-5">
      <img
        src={graphicsGrid}
        alt="graphicsGrid"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-10"
      />
      <img
        src={graphicsOrange}
        alt="graphicsOrange"
        className="absolute bottom-0 left-0 pointer-events-none max-w-2xs"
      />
      <img
        src={graphisPurple}
        alt="graphicsPurple"
        className="absolute top-0 right-0 pointer-events-none max-w-2xs"
      />
      <div className="max-w-[1366px] w-full mx-auto">
        <div className="min-h-screen flex justify-between items-center flex-wrap">
          <div className="sm:max-w-[540px] w-full">
            <p className="sm:text-lg text-md text-white mb-2">Hi, I am</p>
            <div className="flex items-stretch gap-4 mb-2">
              <div className="sm:h-24 h-20 w-1 rounded-full bg-gradient-to-b from-[#FD6F00] to-transparent"></div>
              <div>
                <p className="sm:mb-2 text-lg text-[#FD6F00] font-medium uppercase mb-0">
                  Sweta
                </p>
                <h1
                  ref={el}
                  className="sm:text-3xl min-h-10 text-white text-2xl font-bold "
                ></h1>
              </div>
            </div>
            <p className="text-md text-gray-400 font-medium mb-5 sm:text-lg">
              As a UI/UX & Frontend Developer, my passion for this field has
              been a driving force throughout my career.
            </p>
            <Link
              to=""
              className="inline-flex items-center gap-2 text-md text-white font-medium bg-gradient-to-r from-[#fd1100] to-[#FD6F00] bg-gradient-to-r-[#000] rounded-sm py-3 px-6 cursor-pointer"
            >
              Download Resume <FaDownload />
            </Link>
          </div>
          <div className="sm:w-auto w-full">
            <div className="flex items-center justify-center flex-wrap gap-4 sm:justify-start">
              <img src={swetaImage} alt="Sweta's Pic" className="relative z-20" />
              <div>
                <div className="flex justify-center items-center space-x-1">
                  <FaStar className="text-[#FD6F00]" />
                  <FaStar className="text-[#FD6F00]" />
                  <FaStar className="text-[#FD6F00]" />
                  <FaStar className="text-[#FD6F00]" />
                  <FaStar className="text-[#FD6F00]" />
                </div>
                <h3 className="text-white text-center text-2xl font-bold">
                  2+ Years
                </h3>
                <p className="text-white text-center opacity-70">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
