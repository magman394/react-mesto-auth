import React from "react";


function Login() {

    return (
        <div className="login">
            <h2 className="login__title">Вход</h2>
            <form className="login__form">
                <input type="text" className="login__input" placeholder="Email"></input>
                <input type="password" className="login__input"placeholder="Пароль"></input>
                <button type="submit" className="login__submit">Вход</button>
            </form>
        </div>
  );

}
export default Login;
