import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        className="popup__input"
        id="name"
        name="name"
        type="text"
        placeholder="Имя"
        value=""
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__error name-error" />
      <input
        className="popup__input popup__input_url"
        name="about"
        id="about"
        type="text"
        placeholder="О себе"
        value=""
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__error about-error" />
      <button type="submit" className="popup__button">
        Сохранить
      </button>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
