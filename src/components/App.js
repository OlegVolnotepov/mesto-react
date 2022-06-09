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

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    console.log('test');
    setisAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

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

      <Footer />
    </div>
  );
}

export default App;
