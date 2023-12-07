import React from "react";

const Plan = () => {
  const handleMore = () => {
    window.open("https://russiatourism.ru/tours/", "_self");
  };
  const handleCalculate = () => {
    window.open("https://www.aviasales.ru/map", "_self");
  };
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side*/}
      <div className="grid grid-cols-2 grid-rows-6 h-[120vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://img.freepik.com/premium-photo/vertical-photo-of-cityscape-of-au-pont-rouge-store-red-bridge-above-moyka-river-and-pink-cloudy-sunset-historical-city-center-of-saint-petersburg-russia-travel-destination-wanderlust-concept_549949-52.jpg?w=360"
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="http://static.tildacdn.com/tild3732-6636-4362-a264-383638643734/_7.jpg"
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://avatars.dzeninfra.ru/get-zen_doc/5262161/pub_60f5b3b143acbd32e37d2538_60febad7083df24ed69b2732/scale_1200"
          alt=""
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://yobte.ru/uploads/posts/2023-05/vladivostok-dostoprimechatelnosti-zolotoj-most-97-foto-63.webp"
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://yobte.ru/uploads/posts/2023-05/velikij-ustjug-dostoprimechatelnosti-145-foto-9.webp"
          alt=""
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">
          Планируй предстоящее путешествие
        </h3>
        <p className="text-2xl py-6">
          Открывайте Россию с нами: вдохновляющие города, богатство культуры,
          удивительные пейзажи.
        </p>
        <p className="pb-6">
          Присоединяйтесь к нам в этом увлекательном путешествии по России!
          Поднимайтесь на высоты Кремля, гуляйте по набережным Волги,
          погружайтесь в атмосферу культурных событий и наслаждайтесь
          великолепием российских городов. Готовы ли вы к незабываемым
          приключениям? Давайте начнем этот увлекательный путь вместе!
        </p>
        <div>
          <button
            className="border-black mr-4 hover:shadow-xl"
            onClick={handleMore}
          >
            Узнать больше
          </button>
          <button
            className="bg-black text-white border-black hover:shadow-xl"
            onClick={handleCalculate}
          >
            Рассчитай свою поездку
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
