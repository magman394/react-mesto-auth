import React from "react";
import PopupWithForm from './PopupWithForm';
function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
      }

      React.useEffect(() => {
        if (isOpen === true) {
          avatarRef.current.value = '';
          }
        },[isOpen]);
  
    return (
        <PopupWithForm buttonText="Сохранить" onClose={onClose} isOpen={isOpen}  onSubmit={handleSubmit} title="Обновить аватар" name="popupAvatar">
            <input ref={avatarRef} name="link" id="AvatarLink" type="url" className="popup__input" required placeholder="Ссылка на картинку"/>
            <span id="AvatarLink-error" className="popup__error"></span>
        </PopupWithForm>


    )
}
export default EditAvatarPopup;
