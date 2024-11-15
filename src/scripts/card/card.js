import { deleteCard, toggleFavoriteCard } from "../api";

const cardTemplate = document.querySelector('#card-template');

const getCardTemplate = (cardTemplate) => {
  return cardTemplate.content.cloneNode(true)
}

const createPlaceCard = (cardData, userId, deleteCard, handleToggleFavoriteCard, fillDataImagePopap) => {
  const cardFragment = getCardTemplate(cardTemplate);

  const card = cardFragment.querySelector('.card');
  card.setAttribute('id', cardData._id);

  const img = cardFragment.querySelector('.card__image');
  img.src = cardData.link;
  img.alt = cardData.name;
  img.addEventListener('click', fillDataImagePopap)

  const title = cardFragment.querySelector('.card__title');
  title.textContent = cardData.name;

  const deleteButton = cardFragment.querySelector('.card__delete-button');
  deleteButton.setAttribute('id', cardData.owner._id);
  deleteButton.addEventListener('click', deleteCard);

  if (userId !== cardData.owner._id) {
    console.log('Сработало')
    deleteButton.style.display = 'none';
  }

  const favoriteButton = cardFragment.querySelector('.card__like-button');
  favoriteButton.addEventListener('click', handleToggleFavoriteCard);

  const isLikedByUser = cardData.likes.some((like) => like._id === userId);
  if (isLikedByUser) {
    favoriteButton.classList.add('card__like-button_is-active');
  }

  const countOfLikes = cardFragment.querySelector('.card__count-of-likes');
  countOfLikes.textContent = cardData.likes.length;

  return cardFragment;
};

const handleDeletePlaceCard = (event) => {
  const card = event.target.closest('.card');
  const cardID = card.getAttribute('id');

  deleteCard(cardID)
  .then((_data) => card.remove())
  .catch((error) => console.error(error))
};

const handleToggleFavoriteCard = (event) => {
  const favoriteButton = event.target;
  const countOfLikes = favoriteButton.nextElementSibling;

  const cardId = favoriteButton.closest('.card').getAttribute('id');
  const isLiked = favoriteButton.classList.contains('card__like-button_is-active');

  toggleFavoriteCard(cardId, isLiked)
    .then((data) => {
      isLiked
      ? favoriteButton.classList.remove('card__like-button_is-active')
      : favoriteButton.classList.add('card__like-button_is-active');

      if (countOfLikes.classList.contains('card__count-of-likes')) {
        countOfLikes.textContent = data.likes.length;
      }
    })
    .catch((error) => console.error(error))
}

export { createPlaceCard, handleDeletePlaceCard, handleToggleFavoriteCard };
