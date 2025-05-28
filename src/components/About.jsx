import React from "react";

const About = () => {
  return (
    <section aria-label="About Section" className="bg-black sm:px-10 sm:py-20 px-5 py-7" id="aboutme">
      <div className="max-w-[1366px] w-full mx-auto">
        <div className="mb-6">
          <h2 className="text-center mb-4">
            <span className="sm:text-3xl text-2xl text-white font-bold pb-2 border-b-4 border-b-[#FD6F00]">
              About Me
            </span>
          </h2>
          <p className="text-center">
            <small className="text-md text-gray-400">My Introduction</small>
          </p>
        </div>
        <div className="mb-6">
        <p className="text-gray-400 text-center">
          Hello, My name is <strong>Sweta Gautam</strong>. I am a full time{" "}
          <strong>UI/UX Designer</strong> and
          <strong> Front End Developer</strong>. I make website Front End
          using set of technologies like <strong>Figma</strong>,<strong>React Js</strong>,<strong>Tailwind CSS</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,
          Bootstrap, Material UI, WordPress and Elementor.
        </p>
        </div>

        <div>
          <h2 className="text-center mb-4">
            <span className="sm:text-3xl text-2xl text-white font-bold pb-2 border-b-4 border-b-[#FD6F00]">
              Education & Experiences
            </span>
          </h2>
          <p className="text-gray-400 text-center">
            <small>My Personal Journey</small>
          </p>
          <h1 className="text-gray-400 pt-4 text-2xl text-center">
            BCA
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
