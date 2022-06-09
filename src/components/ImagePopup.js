import React from 'react';
import closeiconPath from '../images/closeicon.svg';

function ImagePopup() {
  return (
    <>
      <div class="popup popup-img">
        <div class="popup-img__wrapper">
          <img
            class="popup-img__img"
            src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
            alt="alt"
          />
          <h2 class="popup-img__title">title</h2>
          <button class="popup-img__close popup__close" type="button">
            <img
              class="popup__close-img"
              alt="кнопка закрытия поп-апа."
              src={closeiconPath}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default ImagePopup;
