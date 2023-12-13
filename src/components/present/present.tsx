import React from "react";
import "../../scss/present/present.scss";
import arrow from "../../svg/arrow.svg";

const Present = () => {
  return (
    <div className="present">
      <div className="present-text">
        <p>ООО «АльянсСервис»</p>
        <h1>Снегоболотоход ВАРЯГ</h1>
        <div className="present-under-text">
          <p>Для перевозки грузов и команды </p>
          <p>Максимальная комплектация доступна от 6.8 млн </p>
        </div>
        <button>
          <p>Связаться</p>
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Present;
