// import React from "react";


// function Login() {

//     return (
//         <div className="login">
//             <h2 className="login__title">Вход</h2>
//             <form className="login__form">
//                 <input type="text" className="login__input" placeholder="Email"></input>
//                 <input type="password" className="login__input"placeholder="Пароль"></input>
//                 <button type="submit" className="login__submit">Вход</button>
//             </form>
//         </div>
//   );

// }
// export default Login;

import React from "react";


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.onLogin = props.onLogin;
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
    this.onLogin({
        "password": password,
        "email": email
    });

  }

    
  render(){
    return (
        <div className="login">
            <h2 className="login__title">Вход</h2>
            <form onSubmit={this.handleSubmit} className="login__form">
                <input name="email" type="email" value={this.state.email} onChange={this.handleChange} className="login__input" placeholder="Email"></input>
                <input name="password" type="password" value={this.state.password} onChange={this.handleChange} className="login__input"placeholder="Пароль"></input>
                <button type="submit" className="login__submit">Вход</button>
            </form>
        </div>
  );
  }
}

export default Login; 

