import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
function Header(props) {

    return (
      <header className="header">
          <div className="header__logo"></div>
      <Switch>
        <Route exact path='/mesto-react'>
          <nav className='menu'>
            <p className='menu__item'>{props.Email}</p>
            <button className='menu__logout' onClick={props.Relogin}>
              Выйти
            </button>
          </nav>
        </Route>
        <Route path='/sign-up'>
          <Link className='menu__auth-link' to='sign-in'>
            Войти
          </Link>
        </Route>
        <Route path='/sign-in'>
          <Link className='menu__auth-link' to='sign-up'>
            Регистрация
          </Link>
        </Route>
      </Switch>
      </header>
  );
}
export default Header;