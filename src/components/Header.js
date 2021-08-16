import React from "react";
import { NavLink } from 'react-router-dom';
function Header() {
    return (
      <header className="header">
          <div className="header__logo"></div>
          <nav className="menu">
            <NavLink exact className="menu__item" activeClassName="menu__item_active" to="/sign-in">Войти</NavLink>
            <NavLink className="menu__item" activeClassName="menu__item_active" to="/sign-up">Регистрация</NavLink>
          </nav>
      </header>
  );
}
export default Header;