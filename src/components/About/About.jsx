import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-screen h-screen flex flex-col flex-grow  bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="md:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#dea89f]">
              About me
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4">
          <div className="md:text-right text-4xl font-bold">
            <p>I invite you to get to know a bit more about me and my goals</p>
          </div>
          <div>
            <p>
              To progress in my career within an organization that prioritizes
              personal growth and fosters diverse team collaboration. Over time,
              my aspiration is to lead these teams, nurture the company's
              culture, and drive the creation of innovative technological
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
