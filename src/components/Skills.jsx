import React from "react";
import { FaHtml5, FaWordpress } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import Progress from "./Progress";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiPhotoshop } from "react-icons/di";

const Skills = () => {
  return (
    <section
      aria-label="About Section"
      className="bg-black sm:px-10 sm:py-20 px-5 py-7"
      id="aboutme"
    >
      <div className="max-w-[1366px] w-full mx-auto">
        <div className="mb-6">
          <h2 className="text-center mb-4">
            <span className="sm:text-3xl text-2xl text-white font-bold pb-2 border-b-4 border-b-[#FD6F00]">
              My Skills
            </span>
          </h2>
          <p className="text-center">
            <small className="text-md text-gray-400">My Technical Skills</small>
          </p>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full flex justify-center items-center md:w-5/12">
            <div className="w-full grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-6">
              <div className="h-32 w-full aspect-square rounded-md flex justify-center items-center bg-zinc-900">
                <FaFigma className="text-gray-400 text-4xl" title="Figma" />
              </div>
              <div className="h-32 w-full aspect-square rounded-md flex justify-center items-center bg-zinc-900">
                <FaHtml5 className="text-gray-400 text-4xl" title="HTML" />
              </div>
              <div className="h-32 w-full aspect-square rounded-md flex justify-center items-center bg-zinc-900">
                <FaCss3 className="text-gray-400 text-4xl" title="CSS" />
              </div>
              <div className="h-32 w-full aspect-square rounded-md flex justify-center items-center bg-zinc-900">
                <BiLogoTailwindCss className="text-gray-400 text-4xl" title="Tailwind CSS" />
              </div>
                <div className="h-32 w-full aspect-square rounded-md flex justify-center items-center bg-zinc-900">
                <FaWordpress className="text-gray-400 text-4xl" title="Wordpress" />
              </div>
               <div className="h-32 w-full aspect-square rounded-md flex justify-center items-center bg-zinc-900">
                <DiPhotoshop className="text-gray-400 text-4xl" title="Adobe Photoshop" />
              </div>
              <div className="h-32 w-full aspect-square rounded-md flex justify-center items-center bg-zinc-900">
                <IoLogoJavascript
                  className="text-gray-400 text-4xl"
                  title="JavaScript"
                />
              </div>
              <div className="h-32 w-full aspect-square rounded-md flex justify-center items-center bg-zinc-900">
                <FaBootstrap
                  className="text-gray-400 text-4xl"
                  title="Bootstrap"
                />
              </div>
              <div className="h-32 w-full aspect-square rounded-md flex justify-center items-center bg-zinc-900">
                <FaReact className="text-gray-400 text-4xl" title="React" />
              </div>
            </div>
          </div>
          <div className="sm:w-7/12 w-full flex justify-center items-center">
            <div className="w-full sm:p-5 sm:pr-0 sm:pt-0 pt-5">
              <Progress label={"Figma"} percentage={75} />
              <Progress label={"HTML"} percentage={75} />
              <Progress label={"CSS"} percentage={80} />
              <Progress label={"JavaScript"} percentage={65} />
              <Progress label={"Bootstrap"} percentage={70} />
              <Progress label={"React JS"} percentage={70} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
