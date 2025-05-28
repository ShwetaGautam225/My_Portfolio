import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 relative">
      <div className="max-w-[1366px] w-full sm:px-15 px-5 mx-auto pt-10">
        <div className="flex justify-center">
          <Link
            to="/"
            className="bg-gradient-to-r from-[#fd1100] to-[#FD6F00] bg-clip-text text-transparent font-bold text-3xl pb-2 border-b-4 border-b-white"
          >
           Sweta Gautam
          </Link>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 py-10">
          <Link
            to="mailto:gautamsweta225@gmail.com"
            className="text-white flex justify-center items-center gap-2"
          >
            <div className="h-10 w-10 aspect-square rounded-full flex justify-center items-center bg-gradient-to-r from-[#fd1100] to-[#FD6F00]">
              <FaEnvelope className="text-lg" />
            </div>
           gautamsweta225@gmail.com
          </Link>
          <Link
            to="https://wa.me/+919793639655?text=Hi%20Sweta"
            className="text-white flex justify-center items-center gap-2"
          >
            <div className="h-10 w-10 aspect-square rounded-full flex justify-center items-center bg-gradient-to-r from-[#fd1100] to-[#FD6F00]">
              <FaWhatsapp />
            </div>
            + 91 9793639655
          </Link>
          <Link
            to="https://www.linkedin.com/in/sweta-gautam/"
            className="text-white flex justify-center items-center gap-2"
          >
            <div className="h-10 w-10 aspect-square rounded-full flex justify-center items-center bg-gradient-to-r from-[#fd1100] to-[#FD6F00]">
              <FaLinkedin />
            </div>
          Sweta Gautam
          </Link>
        </div>
      </div>
      <div className="w-full px-5 py-4 bg-gradient-to-r from-[#fd1100] to-[#FD6F00] text-center">
        <p className="text-white">&copy; <strong>2025</strong> All rights reserved. Made with heart by <strong>Sweta Gautam</strong>.</p>
      </div>
    </footer>
  );
};

export default Footer;
