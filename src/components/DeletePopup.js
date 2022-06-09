import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeletePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="profile"
      title="Вы уверенены?"
      isOpen={isOpen}
      onClose={onClose}
    >
      <button type="submit" class="popup__button popup-remove-card__button">
        Да
      </button>
    </PopupWithForm>
  );
}

export default DeletePopup;
