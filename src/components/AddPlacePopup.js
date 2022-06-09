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
        class="popup__input"
        name="title"
        id="card-title"
        type="text"
        placeholder="Название"
        value=""
        required
        minlength="2"
        maxlength="30"
      />
      <span class="popup__error card-title-error" />
      <input
        class="popup__input popup__input_url"
        name="link"
        id="card-url"
        type="url"
        placeholder="Ссылка на картинку"
        value=""
        required
      />
      <span class="popup__error card-url-error" />
      <button
        type="submit"
        class="popup__button popup-card__button popup__button_disabled"
        disabled
      >
        Сохранить
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
