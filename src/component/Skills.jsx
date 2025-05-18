import React from "react";
import { getSkills } from "../content";

function Skills() {
  const skill = getSkills();
  return (
    <section className="m-10 lg:mx-40 my-20">
      <h1 className="text-center text-4xl mb-10">Skills</h1>
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="20"
        className="text-4xl font-bold text-gray-400"
      >
        <div className="grid grid-flow-col grid-rows-1 gap-4">
          {skill.map((skills, index) => (
            <div key={index} className="text-center border-2 p-4 rounded-lg w-40  ">
              <img className="p-3" src={skills.image}></img>
              <h3 className="text-xl font-bold ">{skills.name}</h3>
        </div>
          ))}
        </div>
      </marquee>
    </section>
  );
}

export default Skills;
