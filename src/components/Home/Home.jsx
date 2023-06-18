import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Avatar1 from "../../assets/avatar1.webp";
import Avatar2 from "../../assets/avatar2.png";
import Avatar3 from "../../assets/avatar3.webp";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen flex bg-[#0a192f] items-center">
      {/* avatar */}
      <div className="flex flex-grow w-[400px] h-auto">
        <img src={Avatar1} alt="" className="w-full h-full"/>
      </div>

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-3xl">{"<> Hello world! </>"}</p>

        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          JUAN CRUZ <span>LIMA CARAMICO</span>
        </h1>

        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">
          Full Stack Web Developer.
        </h2>

        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Me desarrollo profesionalmente construyendo soluciones y experiencias
          digitales modernas.
        </p>

        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
