import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace, saveButton }) {
  const [name, setName] = React.useState(false);
  const [url, setEditProfilePopupOpen] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    onAddPlace(name, url);
    event.target.reset();
  }

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeUrl(evt) {
    setEditProfilePopupOpen(evt.target.value);
  }

  return (
    <PopupWithForm
      name="addplace"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input"
        name="title"
        id="card-title"
        type="text"
        placeholder="Название"
        defaultValue=""
        required
        minLength="2"
        maxLength="30"
        onChange={handleChangeName}
      />
      <span className="popup__error card-title-error" />
      <input
        className="popup__input popup__input_url"
        name="link"
        id="card-url"
        type="url"
        placeholder="Ссылка на картинку"
        defaultValue=""
        onChange={handleChangeUrl}
        required
      />
      <span className="popup__error card-url-error" />
      <button type="submit" className="popup__button popup-card__button">
        {!saveButton ? 'Сохранить' : 'Сохранение...'}
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
