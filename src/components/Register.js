import React from "react";

import { Link } from 'react-router-dom'; 

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.onRegister = props.onRegister;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value 
    });
  }

 handleSubmit(e) {
    e.preventDefault();
    let { password, email } = this.state;
    this.onRegister({
        "password": password,
        "email": email
    });

  }

    
  render(){
    return(
        <div className="login">
            <h2 className="login__title">Регистрация</h2>
            <form onSubmit={this.handleSubmit} className="login__form">
                <input id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} className="login__input" placeholder="Email"></input>
                <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} className="login__input"placeholder="Пароль"></input>
                <button type="submit" className="login__submit">Зарегистрироваться</button>
            </form>
            <p className="login__register">Уже зарегистрированы? <Link className="login__register" to="sign-in">Войти</Link></p>
        </div>
    )
  }
}

export default Register; 

