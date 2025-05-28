import React, { useState } from "react";
import projects from "../utils/projects";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [myProjects, setMyProjects] = useState(projects);

  return (
    <section
      aria-label="Projects Section"
      className="bg-black sm:px-10 sm:py-20 px-5 py-7"
      id="projects"
    >
      <div className="max-w-[1366px] w-full mx-auto text-center">
        <div className="sm:mb-10max-w-[600px] w-full mx-auto mb-5">
          <h2 className="text-center mb-4">
            <span className="sm:text-3xl text-2xl text-white font-bold pb-2 border-b-4 border-b-[#FD6F00]">
              My Projects
            </span>
          </h2>
          <p className="text-center">
            <small className="text-md text-gray-400">My Sample Works</small>
          </p>
        </div>
        <div className="flex">
          <div className="w-full">
            {myProjects?.map((myProject, index) => {
              return (
                <div className="text-left" key={index}>
                  <div className="flex items-center sm:gap-4 gap-2 mb-4">
                    <div className="sm:h-14 sm:w-14 h-10 w-10 rounded-full bg-[#FD6F00] flex justify-center items-center text-center text-white text-lg font-bold">
                      {index + 1}
                    </div>
                    <h2 className="sm:text-2xl text-xl text-white font-bold">
                      {myProject.title}
                    </h2>
                  </div>
                  {myProject?.data && (
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-10">
                      {myProject?.data?.map((data, index) => {
                        const { link, thumbnail, category, name, excerpt } =
                          data;
                        return (
                          <article
                            className="border border-gray-700 rounded-sm p-4"
                            key={index}
                          >
                            <div className="flex justify-center items-center bg-[#FFEBDB] rounded-sm overflow-hidden p-4 mb-4">
                              <img src={thumbnail} alt={name} />
                            </div>
                            <p className="text-gray-400">{category}</p>
                            <h3 className="bg-gradient-to-r from-[#fd1100] to-[#FD6F00] bg-clip-text text-transparent font-bold text-2xl mb-2">
                              {name}
                            </h3>
                            <p className="text-gray-200 text-md mb-4">
                              {excerpt}
                            </p>
                            <Link
                              to={link || "#"}
                              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fd1100] to-[#FD6F00] text-white text-md font-medium py-3 px-6 rounded-sm"
                            >
                              Project URL <FaExternalLinkAlt />
                            </Link>
                          </article>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
