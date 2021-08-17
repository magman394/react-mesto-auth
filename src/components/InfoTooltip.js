import React from "react";
import ok from '../images/ok.svg';
import error from '../images/error.svg';
import popupCloseIcon from '../images/Close-Icon.svg';


function InfoTooltip(props) {

    return (
        <div className={`popup${props.isOpen ? ' popup_is-opened' : ''}`} id={props.name}>
          <div className="popup__register">
              <button type="button" className="popup__close opacity-link"><img src={popupCloseIcon} onClick={props.onClose} alt="кнопка закрытия"/></button>
              <img className="popup__image popup__image_register" alt={props.isRegister ? ok : error } src={props.isRegister ? ok : error } />
              <h2 className="popup__title popup__title_register">{props.isRegister ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.' }</h2>
          </div>
        </div>
  );
}
export default InfoTooltip;