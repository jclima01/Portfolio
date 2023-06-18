import React from "react";

import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JavaScript from "../../assets/javascript.png";
import ReactImg from "../../assets/react.png";
import Node from "../../assets/node.png";
import FireBase from "../../assets/firebase.png";
import GitHub from "../../assets/github.png";
import Tailwind from "../../assets/tailwind.png";
import Mongo from "../../assets/mongo.png";
import Redux from "../../assets/redux.png";
import Sequelize from "../../assets/sequelize.png";
import Express from "../../assets/express.png";
import PostgreSQL from "../../assets/postgresql.png";
import NextJS from "../../assets/nextjs.png";
import Git from "../../assets/git.png";
import Figma from "../../assets/figma.png";
import Auth0 from "../../assets/auth0.png";
import AWS from "../../assets/aws.png";
import Stripe from "../../assets/stripe.png";
import { techs } from "../../data/data.js";
const Skills = () => {
  return (
    <div name="skills" className="w-screen h-full sm:h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1300px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#dea89f] ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-7 gap-4 text-center py-8">
          {techs.map((tech) => {
            return (
              <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col items-center">
                <div className="w-36 h-full flex justify-center items-center">
                  <img
                    className="mx-auto w-20 h-auto"
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
