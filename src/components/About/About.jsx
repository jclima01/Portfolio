import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="md:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About me
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4">
          <div className="md:text-right text-4xl font-bold">
            <p>Te invito a que conozcas un poco más sobre mí.</p>
          </div>
          <div>
            <p>
              Me considero una persona apasionada por el aprendizaje, adquirir
              conocimientos e interactuar con las personas. Me he formado a lo
              largo de los años muchas veces de forma autodidacta, así como
              también en el ambito formal, obteniendo el título de Profesor de
              matemática para el nivel secundario de la República Argentina,
              cursando 2 años para técnico superior en análisis en sistemas y
              obteniendo diferentes certificaciones de programación tanto en
              CoderHouse como en Henry. Por mi curiosidad, disfruto enfrentando
              nuevos desafíos y explorando diferentes enfoques para resolver
              problemas complejos, conformando sólidos equipos de trabajo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
