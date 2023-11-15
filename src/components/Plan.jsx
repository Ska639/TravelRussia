import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side*/}
      <div className="grid grid-cols-2 grid-rows-6 h-[120vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="http://rasfokus.ru/images/photos/medium/d900838c268b320fbaaea13ba06f7f5f.jpg"
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
          quisquam?
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam nisi
          pariatur odit beatae quisquam facilis quaerat repudiandae, illum hic
          sed. Cumque facilis culpa laborum consequatur officiis dolore
          necessitatibus distinctio laudantium?
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Узнать больше
          </button>
          <button className="bg-black text-white border-black hover:shadow-xl">
            Рассчитай свою поездку
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
