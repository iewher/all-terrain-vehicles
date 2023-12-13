import React from "react";
import "../../scss/emoji/emoji.scss";
import whitearrow from "../../svg/white-arrow.svg";
import emoji1 from "../../svg/emoji/emoji1.svg";
import emoji2 from "../../svg/emoji/emoji2.svg";
import emoji3 from "../../svg/emoji/emoji3.svg";
import emoji4 from "../../svg/emoji/emoji4.svg";

const Emoji = () => {
  return (
    <div className="emoji">
      <div className="emoji-title">
        <p>Яркие эмоции для работы и активного отдыха</p>
      </div>
      <div className="emoji-main">
        <div className="emoji-main__image">
          <img src={emoji1} alt="emoji1" />
        </div>
        <div className="emoji-main__card">
          <div className="emoji-main__card-images">
            <img src={emoji2} alt="emoji1" />
            <img src={emoji3} alt="emoji1" />
            <img src={emoji4} alt="emoji1" />
          </div>
          <div className="emoji-main__card-text">
            <li>Комфортный салон вместимостью до 20 человек</li>
            <li>Грузоподъемность до 10 тонн</li>
            <li>Максимальный в классе дорожный просвет 600 мм</li>
            <li>Независимая подвеска с ходом 26 см</li>
            <li>Автоподкачка на всех моделях</li>
            <li>Модульная конструкция вездехода</li>
            <li>Крутящий момент 491 Нм</li>
            <li>Гидрообъемное рулевое управление</li>
            <li>Пневмогидравлическая тормозная система</li>
            <button>
              <p>Подробнее о характеристиках</p>
              <img src={whitearrow} alt="whitearrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emoji;
