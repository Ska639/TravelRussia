import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleTours = () => {
    window.open("https://russiatourism.ru/tours/", "_self");
  };
  const handleHotels = () => {
    window.open("https://russiatourism.ru/hotels/", "_self");
  };
  const handleVisas = () => {
    window.open("https://russiatourism.ru/visas/", "_self");
  };
  const handleContacts = () => {
    window.open("https://russiatourism.ru/about/", "_self");
  };
  // const handleCount = () => {
  //   window.open("https://www.aviasales.ru/", "_self");
  // };

  const handleNav = () => {
    setNav(!nav);
  };
  if (!nav) {
    document.body.style.overflow = "scroll";
  } else {
    document.body.style.overflow = "hidden";
  }

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-white font-bold text-2xl z-20">РосТуризм</h1>
      <TiThMenu
        onClick={handleNav}
        className="z-20 text-white cursor-pointer"
        size={25}
      />
      <div
        className={
          nav
            ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li className="font-bold text-3xl p-8" onClick={handleNav}>
            Домашняя страница
          </li>
          <li className="font-bold text-3xl p-8" onClick={handleTours}>
            Туры
          </li>
          <li className="font-bold text-3xl p-8" onClick={handleHotels}>
            Отели
          </li>
          <li className="font-bold text-3xl p-8" onClick={handleVisas}>
            Визы
          </li>
          <li className="font-bold text-3xl p-8" onClick={handleContacts}>
            Контакты
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
