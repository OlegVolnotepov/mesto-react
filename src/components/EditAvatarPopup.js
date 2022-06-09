import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        className="popup__input popup__input_url"
        name="link"
        id="avatar-url"
        type="url"
        placeholder="Ссылка на картинку"
        value=""
        required
      />
      <span className="popup__error avatar-url-error" />
      <button type="submit" className="popup__button">
        Сохранить
      </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
