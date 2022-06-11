import React from 'react';
import plusButtonPath from '../images/plus.svg';
import editButtonPath from '../images/edit_button.svg';
import Card from './Card';
import api from '../utils/Api';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState([]);
  const [userAvatar, setUserAvatar] = React.useState([]);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUser().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
  }, []);

  React.useEffect(() => {
    api.getAllCards().then((data) => {
      setCards(
        data.map((item) => ({
          name: item.name,
          link: item.link,
          likes: item.likes,
          id: item._id,
        }))
      );
    });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__wrapper">
          <img src={userAvatar} className="profile__avatar" alt="аватар." />
          <button
            onClick={onEditAvatar}
            className="profile__avatar-button"
          ></button>
          <div className="profile__info">
            <div className="profile__name-wrapper">
              <h1 className="profile__name">{userName}</h1>
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
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button onClick={onAddPlace} className="profile__add-button">
          <img src={plusButtonPath} alt="кнопка Добавить." />
        </button>
      </section>
      <div>
        <ul className="elements">
          {cards.map((card) => (
            //<Card key={card.id} {...card} onCardClick={test} />
            <Card
              key={card.id}
              src={card.link}
              title={card.name}
              onCardClick={onCardClick}
              likes={card.likes.length}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
