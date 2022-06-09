import React from 'react';

import logoPath from '../images/logo.svg';
import closeiconPath from '../images/closeicon.svg';
import plusButtonPath from '../images/plus.svg';
import editButtonPath from '../images/edit_button.svg';
import avatarPath from '../images/avatar.jpg';
import api from '../utils/Api';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <main>
      <section className="profile">
        <div className="profile__wrapper">
          <img src={avatarPath} className="profile__avatar" alt="аватар." />
          <button
            onClick={onEditAvatar}
            className="profile__avatar-button"
          ></button>
          <div className="profile__info">
            <div className="profile__name-wrapper">
              <h1 className="profile__name">Жак</h1>
              <button
                onClick={onEditProfile}
                className="profile__edit-button"
                type="button"
              >
                <img
                  className="profile__edit"
                  src={editButtonPath}
                  alt="кнопка редактирования профиля."
                />
              </button>
            </div>
            <p className="profile__about">Исследователь</p>
          </div>
        </div>
        <button onClick={onAddPlace} className="profile__add-button">
          <img src={plusButtonPath} alt="кнопка Добавить." />
        </button>
      </section>

      <div>
        <ul className="elements">
          <template id="elements__card">
            <li className="elements__card">
              <img
                className="elements__img"
                src="'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'"
                alt=""
              />
              <div className="elements__summary">
                <p className="elements__title">Тайтл</p>
                <button className="elements__trash"></button>
                <div className="elements__like-group">
                  <button
                    className="elements__like"
                    id="elements__like"
                  ></button>
                  <div className="elements__like-counter">0</div>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </main>
  );
}

export default Main;
