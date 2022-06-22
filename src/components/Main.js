import React from 'react';
import plusButtonPath from '../images/plus.svg';
import editButtonPath from '../images/edit_button.svg';
import Card from './Card';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getAllCards().then((data) => {
      setCards(
        data.map((item) => ({
          name: item.name,
          link: item.link,
          likes: item.likes,
          id: item._id,
          owner: item.owner._id,
        }))
      );
    });
  }, []);

  function handleCardLike(card, cardId) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки

    api.changeLikeCardStatus(cardId, !isLiked).then((data) => {
      const newCard = {
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id,
        owner: data.owner._id,
      };
      setCards((state) => state.map((c) => (c.id === cardId ? newCard : c)));
    });
  }

  function handleCardDelete(cardId) {
    api
      .deleteCard(cardId)
      .then(setCards((state) => state.filter((c) => c.id != cardId)));
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__wrapper">
          <img
            src={currentUser.avatar}
            className="profile__avatar"
            alt="аватар."
          />
          <button
            onClick={onEditAvatar}
            className="profile__avatar-button"
          ></button>
          <div className="profile__info">
            <div className="profile__name-wrapper">
              <h1 className="profile__name">{currentUser.name}</h1>
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
            <p className="profile__about">{currentUser.about}</p>
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
              id={card.id}
              src={card.link}
              title={card.name}
              onCardClick={onCardClick}
              likes={card.likes}
              owner={card.owner}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
