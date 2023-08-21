import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Avatar1 from "../../assets/avatar1.webp";
import Avatar2 from "../../assets/avatar2.png";
import Avatar3 from "../../assets/avatar3.webp";
import TypeWriter from "../TypeWriter/TypeWriter";
const Home = () => {
  return (
    <div
      name="home"
      className="flex w-screen h-full lg:h-screen items-center justify-center bg-[#0a192f]"
    >
      <div className="flex max-w-[1000px] flex-col lg:flex-row items-center justify-center pt-24 ">
        {/* avatar */}
        <div className="w-96 border-2 shadow-md-[#dea89f] border-[#dea89f] rounded-full border-b-0  mx-auto px-8 flex flex-col justify-center ">
          <img src={Avatar1} alt="" className="w-full h-full " />
        </div>

        {/* Container */}
        <div className="mx-auto px-8 lg:flex lg:flex-col justify-center h-full">
          <p className="text-[#dea89f] text-3xl">{"<> Hello world! </>"}</p>

          <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
            JUAN CRUZ <span>LIMA CARAMICO</span>
          </h1>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">
            <TypeWriter />
          </h2>

          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I professionally develop by building modern digital solutions and
            experiences.
          </p>

          <div>
            <Link to="work" smooth={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#dea89f] hover:border-[#ccd6f6]">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
