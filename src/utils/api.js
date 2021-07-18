class Api  {
  constructor({url, token}) {
    this.url = url
    this.token = token;
  }

  getAllPromise() {
    return Promise.all([this.getUserInfo(), this.getCards()]);
  }

  getUserInfo() {
    return fetch(`${this.url}users/me`, {
      headers: 
        this.token
    })
    .then(res => this._getResponseData(res))
  }
  getCards() {
    return fetch(`${this.url}cards`, {
      headers: 
        this.token
    })
    .then(res => this._getResponseData(res))
  }
  changeLikeCardStatus(id, check) {

    if(check === true) {

    return fetch(`${this.url}cards/likes/${id}`,  {
      method: "PUT",
      headers: 
      this.token
    })
    .then(res => this._getResponseData(res))
  } else {
    return fetch(`${this.url}cards/likes/${id}`,  {
      method: "DELETE",
      headers: 
      this.token
    })
    .then(res => this._getResponseData(res))
  }
}
  setUserInfo(onUpdateUser) {
    return fetch(`${this.url}users/me`, {
      method: "PATCH",
      headers: this.token,
      body: JSON.stringify(onUpdateUser) }).then(res => this._getResponseData(res))
  }
  setUserAvatar(profileAvatar) {
    return fetch(`${this.url}users/me/avatar`, {
      method: "PATCH",
      headers: this.token,
      body: JSON.stringify(profileAvatar)}).then(res => this._getResponseData(res))
  }
  delmyCard(id) {
    return fetch(`${this.url}cards/${id}`,  {
      method: "DELETE",
      headers: 
      this.token
    })
    .then(res => this._getResponseData(res))
  }
  setAddPlase(onUpdateCard) {
    return fetch(`${this.url}cards/`, {
      method: "POST",
      headers: this.token,
      body: JSON.stringify(onUpdateCard)}).then(res => this._getResponseData(res))
  }
  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
}



const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-24/',
  token: {
    authorization: 'b94e78d1-b2d6-4481-aa74-fc7e4dc8c239',
    "Content-Type": "application/json"
  }
 });

export default api;


