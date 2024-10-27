const cardTemplate = document.querySelector('#card-template');

const createPlaceCard = (cardData, deleteCard, toggleFavoriteCard, fillDataImagePopap) => {
  const card = cardTemplate.content.cloneNode(true);

  const img = card.querySelector('.card__image');
  img.src = cardData.link;
  img.alt = cardData.name;
  img.addEventListener('click', fillDataImagePopap)

  const title = card.querySelector('.card__title');
  title.textContent = cardData.name;

  const deleteButton = card.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', deleteCard);

  const favoriteButton = card.querySelector('.card__like-button');
  favoriteButton.addEventListener('click', toggleFavoriteCard)

  return card;
};

const deletePlaceCard = (event) => {
  const card = event.target.parentNode;
  card.remove();
};

const toggleFavoriteCard = (event) => {
  const favoriteButton = event.target;
  const isFavoriteButton = favoriteButton.classList.contains('card__like-button');

  if (isFavoriteButton) {
    favoriteButton.classList.toggle('card__like-button_is-active');
  }
}

const handlefillDataImagePopap = (event) => {
  const targetImage = event.target;
  const imageSrc = targetImage.src;
  const imageCaption = targetImage.alt;

  const imagePopap = document.querySelector('.popup__image');
  const imagePopapCaption = document.querySelector('.popup__caption');

  imagePopap.src = imageSrc;
  imagePopap.alt = imageCaption;
  imagePopapCaption.textContent = imageCaption;
}

export { createPlaceCard, deletePlaceCard, toggleFavoriteCard, handlefillDataImagePopap };

