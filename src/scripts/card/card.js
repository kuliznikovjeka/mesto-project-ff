const cardTemplate = document.querySelector('#card-template');

const getCardTemplate = (cardTemplate) => {
  return cardTemplate.content.cloneNode(true)
}

const createPlaceCard = (cardData, deleteCard, toggleFavoriteCard, fillDataImagePopap) => {
  const card = getCardTemplate(cardTemplate);

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
  favoriteButton.classList.toggle('card__like-button_is-active');
}

export { createPlaceCard, deletePlaceCard, toggleFavoriteCard };

