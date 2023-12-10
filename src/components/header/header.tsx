import React from "react";
import "../../scss/header/header.scss";
import logo from "../../svg/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-links">
        <a href="">Каталог</a>
        <a href="">Комплектующие</a>
        <a href="">О компании</a>
        <a href="">Галерея</a>
        <a href="">Новости</a>
        <a href="">Контакты</a>
      </div>
      <div className="header-number">
        <p>+7 (939) 111-10-31</p>
      </div>
    </div>
  );
};

export default Header;
