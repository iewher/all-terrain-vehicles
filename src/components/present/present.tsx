import React from "react";
import "../../scss/present/present.scss";

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
        <button>Связаться</button>
      </div>
    </div>
  );
};

export default Present;
