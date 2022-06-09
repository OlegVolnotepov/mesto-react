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
        class="popup__input"
        id="name"
        name="name"
        type="text"
        placeholder="Имя"
        value=""
        minlength="2"
        maxlength="40"
        required
      />
      <span class="popup__error name-error" />
      <input
        class="popup__input popup__input_url"
        name="about"
        id="about"
        type="text"
        placeholder="О себе"
        value=""
        minlength="2"
        maxlength="200"
        required
      />
      <span class="popup__error about-error" />
      <button type="submit" class="popup__button">
        Сохранить
      </button>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
