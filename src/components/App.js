import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import {CurrentUserContext, defaultUser} from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isEditImagePopupOpen, setEditImagePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({ img: null, title: null})
  const [currentUser, setCurrentUser] = React.useState(defaultUser)
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getAllPromise().then((arg) => {
        const [getUserInfo, getCards] = arg;
        
        setCurrentUser(getUserInfo);
        setCards(getCards);
    }).catch((err) => alert(err));
  }, [])

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
        <Header />
        <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onUpdateCard={handleAddPlaceSubmit} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <PopupWithForm title="Вы уверены?" name="popup__form-avatar" buttonText="Да" />
        <ImagePopup name="popupImage" onClose={closeAllPopups} card={selectedCard} isOpen={isEditImagePopupOpen} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;