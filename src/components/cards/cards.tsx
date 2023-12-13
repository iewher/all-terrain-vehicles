import React from "react";
import "../../scss/cards/cards.scss";
import arrow from "../../svg/arrow.svg";
import card1 from "../../svg/card/card1.svg";
import card2 from "../../svg/card/card2.svg";
import card3 from "../../svg/card/card3.svg";

interface CardProps {
  image: string;
  title: string;
  text: string;
}

const Card: React.FunctionComponent<CardProps> = ({ image, title, text }) => {
  return (
    <div className="card">
      <img src={image} alt="Card" />
      <div className="card-text">
        <p className="title">{title}</p>
        <p className="text">{text}</p>
        <button>
          <p>Изучить</p>
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="cards">
      <h1>Выберите идеальный аппарат для вашей цели</h1>
      <div className="cards-block">
        <Card
          image={card1}
          title="Варяг 4*4"
          text="Вместимость: 8 мест
Габариты: 5700 х 2500 х 3000 мм
Грузоподъемность: 3000 кг
Цена от 6 800 000 руб "
        />
        <Card
          image={card2}
          title="Варяг 6х6 автобус"
          text="Вместимость: 8 мест
          Габариты: 5700 х 2500 х 3000 мм
          Грузоподъемность: 3000 кг
          Цена от 6 800 000 руб "
        />
        <Card
          image={card3}
          title="Варяг 4*4 пикап"
          text="Вместимость: 8 мест
          Габариты: 5700 х 2500 х 3000 мм
          Грузоподъемность: 3000 кг
          Цена от 6 800 000 руб "
        />
        <Card
          image={card1}
          title="Варяг 4*4"
          text="Вместимость: 8 мест
Габариты: 5700 х 2500 х 3000 мм
Грузоподъемность: 3000 кг
Цена от 6 800 000 руб "
        />
        <Card
          image={card2}
          title="Варяг 6х6 автобус"
          text="Вместимость: 8 мест
          Габариты: 5700 х 2500 х 3000 мм
          Грузоподъемность: 3000 кг
          Цена от 6 800 000 руб "
        />
        <Card
          image={card3}
          title="Варяг 4*4 пикап"
          text="Вместимость: 8 мест
          Габариты: 5700 х 2500 х 3000 мм
          Грузоподъемность: 3000 кг
          Цена от 6 800 000 руб "
        />
      </div>
    </div>
  );
};

export default Cards;
