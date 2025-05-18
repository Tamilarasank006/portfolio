import React from "react";
import { getProjects } from "../content"
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = getProjects();

  return (
    <section>
      <div className="flex justify-center">
        <h1 className="text-4xl">Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 max-w-7xl mx-auto px-5 ">
        {projects.map((project) => (
          <div key={project.title} className="flex justify-center  bg-gray-900 text-center p-4 hover:scale-90 border-gray-300 border-2 w-auto ">
            <div className="  ">
              <img src={project.image} alt={project.title} className="h-75 mx-auto"/>
              <h1 className="text-2xl  font-semibold mt-5">{project.title}</h1>
              <p className="text-2 text-gray-500 p-4 ">{project.description}</p>
              <a href={project.git} ><FaGithub className="size-6 mx-auto "/></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
