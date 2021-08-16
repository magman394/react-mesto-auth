class Auth {
    constructor({url}) {
        this.url = url
      }
  register(onRegister) {
  return fetch(`${this.url}/signup`, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json" 
    },
    body: JSON.stringify({
        "password": onRegister.password,
        "email": onRegister.email
    })
  })
  .then(res => this._getResponseData(res))
}; 
_getResponseData(res) {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json({
    "data": {
        "_id": "",
        "email": ""
    }
});
}
authorize(onLogin) {
    return fetch(`${this.url}/signin`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "password": onLogin.password,
            "email": onLogin.email
        })
      })
      .then((response => response.json()))
      .then((data) => {
        if (data.token){
          localStorage.setItem('token', data.token);
          return data;
        }
      })
      .catch(err => console.log(err))
}
}
const auth = new Auth({
    url: 'https://auth.nomoreparties.co'
   });
  

export default auth;



