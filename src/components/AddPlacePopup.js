import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="addplace"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        className="popup__input"
        name="title"
        id="card-title"
        type="text"
        placeholder="Название"
        value=""
        required
        minLength="2"
        maxLength="30"
      />
      <span className="popup__error card-title-error" />
      <input
        className="popup__input popup__input_url"
        name="link"
        id="card-url"
        type="url"
        placeholder="Ссылка на картинку"
        value=""
        required
      />
      <span className="popup__error card-url-error" />
      <button
        type="submit"
        className="popup__button popup-card__button popup__button_disabled"
        disabled
      >
        Сохранить
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
