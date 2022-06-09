import React from 'react';
import closeiconPath from '../images/closeicon.svg';

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? 'popup_opened' : ''
      }`}
    >
      <form className="popup__form" name={`${props.name}-form`} novalidate>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button className="popup__close" type="button" onClick={props.onClose}>
          <img
            className="popup__close-img"
            alt="кнопка закрытия поп-апа."
            src={closeiconPath}
          />
        </button>
      </form>
    </div>
  );
}

export default PopupWithForm;
