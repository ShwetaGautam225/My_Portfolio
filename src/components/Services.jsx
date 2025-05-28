import React from "react";
import IconBox from "./IconBox";
import {
  appDesignIcon,
  frontendIcon,
  uiuxIcon,
  wordpressIcon,
} from "../assets";

const Services = () => {
  return (
    <section
      aria-label="About Section"
      className="bg-black sm:px-10 sm:py-20 px-5 py-7"
      id="services"
    >
      <div className="max-w-[1366px] w-full mx-auto text-center">
        <div className="max-w-[600px] w-full mx-auto mb-10">
          <h2 className="text-center mb-4">
            <span className="sm:text-3xl text-2xl text-white font-bold pb-2 border-b-4 border-b-[#FD6F00]">
              Services
            </span>
          </h2>
          <p className="text-center">
            <small className="text-md text-gray-400">What I Love to do</small>
          </p>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          <IconBox
            icon={uiuxIcon}
            title={"UI/UX"}
            description={
              "UI/UX design focuses on intuitive, user-centered interfaces for optimal usability."
            }
          />
          <IconBox
            icon={appDesignIcon}
            title={"Web/App Design"}
            description={
              "App design merges usability with visual appeal for intuitive user experiences."
            }
          />
          <IconBox
            icon={frontendIcon}
            title={"Frontend Work"}
            description={
              "Developed a responsive and interactive UI using frontend techs and ensuring seamless functionality user experience."
            }
          />
          <IconBox
            icon={wordpressIcon}
            title={"WordPress"}
            description={
              "WordPress seamlessly blends design and functionality to create user-friendly websites."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
