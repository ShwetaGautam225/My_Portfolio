import React from "react";

const About = () => {
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
            using set of technologies like <strong>Figma</strong>,
            <strong>React Js</strong>,<strong>Tailwind CSS</strong>,{" "}
            <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>JavaScript</strong>, Bootstrap, Material UI, WordPress and
            Elementor.
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
         <div class="bg-black text-white p-6 md:p-12">
  <div class="grid md:grid-cols-2 gap-12">
    
    <div class="relative">
      <h2 class="text-2xl font-bold mb-6 text-[#FD6F00]">Education</h2>
      <div class="border-l-2 border-[#FD6F00] pl-6 space-y-10 relative">
        
  
        <div class="relative border border-gray-700 rounded-sm p-4">
          <span class="absolute -left-9 top-5 w-5 h-5 bg-[#FD6F00] border-2 border-black rounded-full"></span>
          <h3 class="text-lg font-semibold">Bachelor's of Computer Application</h3>
          <p class="text-sm text-gray-300">Lucknow University<br/>Lucknow, India</p>
          <p class="text-xs italic text-gray-400 mt-1">2018 – 2021</p>
        </div>
        
      
        <div class="relative border border-gray-700 rounded-sm p-4">
          <span class="absolute -left-9 top-5 w-5 h-5 bg-[#FD6F00] border-2 border-black rounded-full"></span>
          <h3 class="text-lg font-semibold">Intermediate (PCM)</h3>
          <p class="text-sm text-gray-300">MBM Inter College<br/>Lucknow, India</p>
          <p class="text-xs italic text-gray-400 mt-1">2015 – 2017</p>
        </div>
   
        <div class="relative border border-gray-700 rounded-sm p-4">
          <span class="absolute -left-9 top-5 w-5 h-5 bg-[#FD6F00] border-2 border-black rounded-full"></span>
          <h3 class="text-lg font-semibold">High School</h3>
          <p class="text-sm text-gray-300">Green Way Inter College<br/>Lucknow, India</p>
          <p class="text-xs italic text-gray-400 mt-1">2015</p>
        </div>

      </div>
    </div>

    <div class="relative">
      <h2 class="text-2xl font-bold mb-6 text-[#FD6F00]">Experience</h2>
      <div class="border-l-2 border-[#FD6F00] pl-6 space-y-10 relative">
        
         <div class="relative border border-gray-700 rounded-sm p-4">
          <span class="absolute -left-9 top-5 w-5 h-5 bg-[#FD6F00] border-2 border-black rounded-full"></span>
          <h3 class="text-lg font-semibold">SDE | Front End Developer</h3>
          <p class="text-sm text-gray-300">Hashtag Labs Pt. Ltd.<br/>Lucknow, India</p>
          <p class="text-xs italic text-gray-400 mt-1">Jul 2023 – Jan 2025</p>
        </div>

        <div class="relative border border-gray-700 rounded-sm p-4">
          <span class="absolute -left-9 top-5 w-5 h-5 bg-[#FD6F00] border-2 border-black rounded-full"></span>
          <h3 class="text-lg font-semibold">Software Developer</h3>
          <p class="text-sm text-gray-300">Singsys Pte. Ltd.<br/>Lucknow, India</p>
          <p class="text-xs italic text-gray-400 mt-1">Jun 2022 – Jun 2023</p>
        </div>

 
        <div class="relative border border-gray-700 rounded-sm p-4">
          <span class="absolute -left-9 top-5 w-5 h-5 bg-[#FD6F00] border-2 border-black rounded-full"></span>
          <h3 class="text-lg font-semibold">Web Developer – Intern</h3>
          <p class="text-sm text-gray-300">Digicoders Technology Pvt. Ltd.<br/>Lucknow, India</p>
          <p class="text-xs italic text-gray-400 mt-1">Dec 2021 – May 2022</p>
        </div>

      </div>
    </div>

  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default About;
