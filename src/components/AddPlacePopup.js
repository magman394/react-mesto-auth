import React from "react";
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onUpdateCard}) {
  const [link, setLink] = React.useState('');
  const [name, setName] = React.useState('');

    function handleChangeLink(e) {
      setLink(e.target.value);
    }
    function handleChangeTitle(e) {
      setName(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();
      onUpdateCard({
        name,
        link,
      });
    }
    React.useEffect(() => {
      if (isOpen === true) {
        setLink('');
        setName('');
        }
      },[isOpen]);


    return (
      <PopupWithForm buttonText="Сохранить" onClose={onClose} isOpen={isOpen} title="Новое место" name="popupCard" onSubmit={handleSubmit} >
        <input value={name} onChange={handleChangeTitle}  type="text" className="popup__input" minLength="2" maxLength="30" required placeholder="Название" id="inputTitle"/>
        <span id="inputTitle-error" className="popup__error"></span>
        <input value={link} onChange={handleChangeLink}  id="inputLink" type="url" className="popup__input" required placeholder="Ссылка на картинку"/>
        <span id="inputLink-error" className="popup__error"></span>
      </PopupWithForm>
    )
}
export default AddPlacePopup;
