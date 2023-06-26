import React from "react";

import { techs } from "../../data/data.js";
const Skills = () => {


  return (
    <div name="skills" className="w-screen h-full md:h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#dea89f] ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 text-center py-4">
          {techs.map((tech) => {
            return (
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col items-center ">
                <div className="w-36 h-full flex justify-center items-center">
                  <img
                    className="mx-auto w-10 2xl:w-20 h-auto"
                    src={tech.image}
                    alt={tech.name}
                  />
                </div>
                <p className="my-4">{tech.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
