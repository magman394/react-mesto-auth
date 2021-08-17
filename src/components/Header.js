import React from "react";
import { NavLink } from 'react-router-dom';
function Header(props) {

    return (
      <header className="header">
          <div className="header__logo"></div>
          <nav className="menu">
            <NavLink className="menu__item" activeClassName="menu__item_active" to="/sign-up">{props.loggedIn ? props.Email : 'Регистрация' }</NavLink>
            <NavLink onClick={props.Relogin} exact className="menu__item" activeClassName="menu__item_active" to="/sign-in">{props.loggedIn ? 'Выйти' : 'Войти' }</NavLink>
            
          </nav>
      </header>
  );
}
export default Header;