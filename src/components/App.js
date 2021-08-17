import React from "react";
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Login from './Login';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import {CurrentUserContext, defaultUser} from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import InfoTooltip from "./InfoTooltip";
import auth from "../utils/auth"

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isEditImagePopupOpen, setEditImagePopupOpen] = React.useState(false)
  const [isEditRegisterPopupOpen, setEditRegisterPopupOpen] = React.useState(false);
  const [isAddRegister, setAddRegister] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ img: null, title: null})
  const [currentUser, setCurrentUser] = React.useState(defaultUser)
  const [selectedEmail, setSelectedEmail] = React.useState()
  const [cards, setCards] = React.useState([])
  const [loggedIn, setLoggedIn] = React.useState(false)

  let history = useHistory();
  React.useEffect(() => {
    let jwt = localStorage.getItem('token');
    auth.authorizeToken(jwt).then((res) => {
      if(res) {
        setSelectedEmail(res.data.email);
        setLoggedIn(true);
        history.push("/mesto-react");
      } 
    }).catch(()=> history.push("/sign-in"))

    api.getAllPromise().then((arg) => {
        const [getUserInfo, getCards] = arg;
        setCurrentUser(getUserInfo);
        setCards(getCards);
    }).catch((err) => alert(err));
  }, [loggedIn])

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  }

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditImagePopupOpen(false);
    setEditRegisterPopupOpen(false);
    if (isAddRegister === true)
    history.push("/sign-in");
    setSelectedCard({ img: null, title: null})
  }
  const handleCardClick = (props) => {
    setSelectedCard({ img: props.img, title: props.title})
    setEditImagePopupOpen(true);
  }
  const handleUpdateUser = (onUpdateUser) => {
    api
    .setUserInfo(onUpdateUser)
    .then(response => {
      setCurrentUser(response)
      setEditProfilePopupOpen(false);
    }).catch((err) => alert(err));
  }
  const handleUpdateAvatar = (onUpdateUser) => {
    api
    .setUserAvatar(onUpdateUser)
    .then(response => {
      setCurrentUser(response)
      setEditAvatarPopupOpen(false);
    }).catch((err) => alert(err));
  }
  const handleAddPlaceSubmit = (onUpdateCard) => {
    api
    .setAddPlase(onUpdateCard)
    .then(newCard => {
      setCards([newCard, ...cards]);
      setAddPlacePopupOpen(false);
    }).catch((err) => alert(err));
  }
  

  const handleRegisterSubmit = (onRegister) => {
    auth.register(onRegister).then(() => {
        setAddRegister(true);
        setEditRegisterPopupOpen(true);
    }).catch(() => {
        setAddRegister(false);
        setEditRegisterPopupOpen(true);
    }); 
    }
    
  const handleAuthorizeSubmit = (onLogin) => {
  if (!onLogin){
    return;
  }
  auth.authorize(onLogin)
  .then((data) => {
    if (data.token){
      setLoggedIn(true);
      history.push('/mesto-react');
  }}).catch(() => {
    setLoggedIn(false);
    setEditRegisterPopupOpen(true);
  });
  }
  function handleReloginSubmit() {
    localStorage.removeItem('token');
    history.push('/sing-in');
    setLoggedIn(false);
  }

  function handleCardDelete(_id) {
    api.delmyCard(_id).then(() => {
      setCards((state) => state.map((c) => c).filter(state => state._id !== _id));
  }).catch((err) => alert(err));   
  } 
  

  function handleCardLike(likes, _id) {
    const isLiked = likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(_id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === _id ? newCard : c));
  }).catch((err) => alert(err));
  } 


  return (

      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header loggedIn={loggedIn} Relogin={handleReloginSubmit} Email={selectedEmail}/>
          {loggedIn}
          <Switch>
          <ProtectedRoute
          path="/mesto-react"
          loggedIn={loggedIn}
          component={Main}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          />

          <Route path="/sign-in">
            <Login onLogin={handleAuthorizeSubmit} />
            <InfoTooltip isOpen={isEditRegisterPopupOpen} isRegister={isAddRegister} onClose={closeAllPopups}/>
          </Route>
          <Route path="/sign-up">
            <Register onRegister={handleRegisterSubmit}/>
            <InfoTooltip isOpen={isEditRegisterPopupOpen} isRegister={isAddRegister} onClose={closeAllPopups}/>
          </Route>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-up" />}
          </Route>
          </Switch>
          <Route path="/mesto-react">
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onUpdateCard={handleAddPlaceSubmit} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <PopupWithForm title="Вы уверены?" name="popup__form-avatar" buttonText="Да" />
          <ImagePopup name="popupImage" onClose={closeAllPopups} card={selectedCard} isOpen={isEditImagePopupOpen} />
          </Route>
        </CurrentUserContext.Provider>
      </div>
  );
}

export default App; 