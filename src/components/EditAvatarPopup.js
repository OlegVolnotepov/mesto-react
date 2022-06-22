import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    event.target.reset();
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_url"
        name="link"
        id="avatar-url"
        type="url"
        placeholder="Ссылка на картинку"
        required
        ref={avatarRef}
      />
      <span className="popup__error avatar-url-error" />
      <button type="submit" className="popup__button">
        Сохранить
      </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
