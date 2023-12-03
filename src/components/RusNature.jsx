import React from "react";

const Nature = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] mb:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div
        className="lg:top-20 rela
       lg:col-span-1 col-span-2"
      >
        <h3 className="text-2xl font-bold">Колорит НАШЕЙ родины</h3>
        <p className="pt-4">
          А это: разнообразие культур, величественные пейзажи, традиции,
          гостеприимство, история и уникальный менталитет, создающие
          неповторимую русскую атмосферу.
        </p>
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full"
          src="https://cs8.pikabu.ru/post_img/big/2016/06/17/9/1466178270141880448.jpg"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="https://oir.mobi/uploads/posts/2021-06/1622878832_22-oir_mobi-p-krasota-russkoi-prirodi-priroda-krasivo-fo-22.jpg"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://i.artfile.ru/2560x1600_1145965_%5Bwww.ArtFile.ru%5D.jpg"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Nature;
