import React from "react";
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);
    function handleChangeName(e) {
        e.preventDefault();
        setName(e.target.value);
      }
    function handleChangeDescription(e) {
      e.preventDefault();
      setDescription(e.target.value);
    }

      React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]); 
    
      function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
          name,
          about: description,
        });
      }


    return (
<PopupWithForm buttonText="Сохранить" onClose={onClose} isOpen={isOpen} setName={setName} title="Редактировать профиль" name="popupAutor" onSubmit={handleSubmit} >
          <input value={name} onChange={handleChangeName} name="firstName" id="firstName" type="text" className="popup__input" minLength="2" maxLength="40" required placeholder="Имя" />
          <span id="firstName-error" className="popup__error"></span>
          <input value={description} onChange={handleChangeDescription} name="lastName" id="lastName" type="text" className="popup__input" minLength="2" maxLength="200" required placeholder="Профессия"/>
          <span id="lastName-error" className="popup__error"></span>
</PopupWithForm>
    )
}
export default EditProfilePopup;
