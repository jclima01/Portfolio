import React from "react";

const Home = () => {
  return (
    <section id="home" className=" h-screen flex flex-row items-evenly xs:flex-col ">
      <div className="flex flex-col items-center m-auto text-orange-300 ">
        <h3 className="text-3xl">Hola 👋🏾, Soy:</h3> 
        <h1 className="font-extrabold text-6xl">Juan Cruz Lima Caramico,</h1>
        <h2 className="text-2xl">Full-Stack Web Developer.</h2>
      </div>
      <div className="flex self-center border ">
      </div>
    </section>
  );
};

export default Home;
