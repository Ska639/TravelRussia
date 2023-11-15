import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";

const NavBar = () => {
  const [nav, setNav] = useState(false);
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
      <h1 className="text-white font-bold text-2xl z-20">Experiences</h1>
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
          <li className="font-bold text-3xl p-8">Домашняя страница</li>
          <li className="font-bold text-3xl p-8">Города</li>
          <li className="font-bold text-3xl p-8">Гостинницы</li>
          <li className="font-bold text-3xl p-8">Услуги</li>
          <li className="font-bold text-3xl p-8">Контакты</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
