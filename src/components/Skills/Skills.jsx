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

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-8 sm:grid-cols-8 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <div className="">
              <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            </div>
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={Redux} alt="HTML icon" />
            <p className="my-4">REDUX</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={Sequelize} alt="HTML icon" />
            <p className="my-4">SEQUELIZE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={Express} alt="HTML icon" />
            <p className="my-4">EXPRESS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={Figma} alt="HTML icon" />
            <p className="my-4">FIGMA</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={Express} alt="HTML icon" />
            <p className="my-4">EXPRESS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={PostgreSQL} alt="HTML icon" />
            <p className="my-4">POSTGRESQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={NextJS} alt="HTML icon" />
            <p className="my-4">NEXTJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={Git} alt="HTML icon" />
            <p className="my-4">GIT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={Auth0} alt="HTML icon" />
            <p className="my-4">AUTH0</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={Git} alt="HTML icon" />
            <p className="my-4">GIT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={AWS} alt="HTML icon" />
            <p className="my-4">AWS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={Stripe} alt="HTML icon" />
            <p className="my-4">STRIPE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-between flex flex-col">
            <img className="w-20 mx-auto" src={FireBase} alt="HTML icon" />
            <p className="my-4">FIREBASE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
