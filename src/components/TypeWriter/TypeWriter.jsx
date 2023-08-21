import React from "react";
import Typewriter from "typewriter-effect";
const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Open Source Contributor",
          "Front End Developer",
          "Freelancer",
          "Back End Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default TypeWriter;
