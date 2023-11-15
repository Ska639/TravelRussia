import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://etu.ru/assets/cache/images/en/why-us/cultural-capital/1280x854-spb-view-bridges01.0cb.jpg"
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>Экскурсии по</p>
          <h1 className="font-bold text-5xl md:7xl drop-shadow-2xl">
            Городам России
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Россия (Российская Федерация) — самое большое государство в мире,
            которое занимает 1/6 часть площади всей суши Земли. Это страна с
            многовековой историей, богатой культурой и щедрой природой.
            Некоторые архитектурные и историко-культурные памятники на
            территории РФ внесены в список объектов Всемирного Наследия ЮНЕСКО.
          </p>
          <button className="bg-white text-black">Начать путешествие</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
