import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import DeletePopup from './DeletePopup';
import closeiconPath from '../images/closeicon.svg';
import api from '../utils/Api';
import {
  CurrentUserContext,
  currentUser,
} from '../contexts/CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setcurrentUser] = React.useState({});
  const [saveButton, setSaveButton] = React.useState(false);

  const [cards, setCards] = React.useState([]);
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

  React.useEffect(() => {
    api.getUser().then((data) => {
      setcurrentUser(data);
      //console.log(`currentUser ${currentUser}`);
    });
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(src, title) {
    setSelectedCard({ src, title });
    console.log(selectedCard);
  }

  function closeAllPopups() {
    setisAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data).then((response) => {
      setcurrentUser(response);
      closeAllPopups();
    });
  }

  function handleUpdateAvatar(data) {
    api.updateAvatar(data).then((response) => {
      setcurrentUser(response);
      closeAllPopups();
    });
  }

  function handleAddPlaceSubmit(name, url) {
    loadButton(false);
    api
      .addNewCard(name, url)
      .then((data) => {
        const newCard = {
          name: data.name,
          link: data.link,
          likes: data.likes,
          id: data._id,
          owner: data.owner._id,
        };
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .finally(() => {
        loadButton(true);
      });
  }

  function loadButton(isLoading) {
    setSaveButton(isLoading);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          saveButton={saveButton}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
