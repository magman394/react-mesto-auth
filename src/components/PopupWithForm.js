import React from "react";
import PopupCloseIcon from '../images/Close-Icon.svg';
const PopupWithForm = ({ name, title, children, isOpen, onClose, onSubmit, buttonText}) => {

    return (
        <div className={`popup${isOpen ? ' popup_is-opened' : ''}`} name={name}>
          <div className="popup__container">
          <button type="button" className="popup__close opacity-link"><img src={PopupCloseIcon} onClick={onClose} alt="кнопка закрытия"/></button>
            <form className="popup__title popup__title_not_margin" noValidate>
              <h2 className="popup__title">{title}</h2>
              {children}
              <button onClick={onSubmit} type="submit" className="popup__submit">{buttonText}</button>
            </form>
          </div>
        </div>
    );
  }
  export default PopupWithForm;

