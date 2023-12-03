import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4">
        <div>
          <ul>
            <li className="py-1">О нас</li>
            <li className="py-1">Блог</li>
            <li className="py-1">Работа</li>
            <li className="py-1">Новости</li>
            <li className="py-1">Партнёры</li>
          </ul>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div className="col-span-2 py-8 md:pt-2">
          <p className="font-bold uppercase">
            Подписывайтесь на наши обновления
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Введите email"
            />
            <button className="p-2 mb-4 rounded-md">Подписаться</button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1400px] px-2 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2023г. "ООО РосТуризм". Все права защищены.</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest />
        </div>
      </div>
    </div>
  );
};

export default Footer;
