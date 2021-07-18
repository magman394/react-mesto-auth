import React from "react";
import boxCardDeleteBotton from '../images/delete.png';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
function Card({onCardClick, link, name, likes, onCardLike, _id, onCardDelete, owner}) {
  const userInfo = React.useContext(CurrentUserContext);

  function handleClick() {
    onCardClick({img: link, title: name});
    
  } 
  function handleLikeClick() {
    onCardLike(likes, _id);
    
  } 
  function handleDeleteClick() {
    onCardDelete(_id);
  } 

  const isOwn = owner._id === userInfo._id;

  const cardDeleteButtonClassName = (
    `${isOwn ? 'element__btn_delete-active opacity-link' : 'element__btn opacity-link'}`
  );   
  const isLiked = likes.some(i => i._id === userInfo._id);
  const cardLikeButtonClassName = `${isLiked ? 'element__likes_active element__likes_like-btn' : 'element__likes element__likes_like-btn'}`; 

  return (
    <div className="elements__box">
          <div className="element" >
            <img className="element__image" src={link} onClick={handleClick} alt={name}/>
            <div className="element__btn_delete">
              <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}><img src={boxCardDeleteBotton} width="18" height="17" alt="Удалить" ></img></button>
            </div>
            <div className="element__info">
              <h3 className="element__title">{name}</h3>
              <div className="element__likes">
                <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                <p className="element__likes element__likes_like-count">{likes.length}</p>
              </div>
            </div>
          </div>
     </div>
  );
}

export default Card;
