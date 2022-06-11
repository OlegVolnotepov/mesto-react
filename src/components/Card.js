function Card({ src, title, likes, onCardClick }) {
  function handleClick() {
    onCardClick(src, title);
  }

  return (
    <li className="elements__card">
      <img className="elements__img" src={src} alt="" onClick={handleClick} />
      <div className="elements__summary">
        <p className="elements__title">{title}</p>
        <button className="elements__trash"></button>
        <div className="elements__like-group">
          <button className="elements__like" id="elements__like"></button>
          <div className="elements__like-counter">{likes}</div>
        </div>
      </div>
    </li>
  );
}

export default Card;
