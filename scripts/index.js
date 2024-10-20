// ui-elements
const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template');

// functions
const createPlaceCard = (cardData, deleteCard) => {
  const card = cardTemplate.content.cloneNode(true);

  const img = card.querySelector('.card__image');
  img.src = cardData?.link;
  img.alt = cardData?.name;

  const title = card.querySelector('.card__title');
  title.textContent = cardData?.name;

  const deleteButton = card.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', deleteCard);

  return card;
}

const deletePlaceCard = (event) => {
  const card = event.target.parentNode;
  card.remove();
}

const renderPlaceCards = () => {
  initialCards.forEach(cardData => {
    const card = createPlaceCard(cardData, deletePlaceCard);
    placesList.append(card)
  });
}

renderPlaceCards();
