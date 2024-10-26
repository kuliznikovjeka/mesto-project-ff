// constants
import { PLACE_CARD_UI_ELEMENTS } from '../constants/ui-elements.js';

const { cardTemplate } = PLACE_CARD_UI_ELEMENTS;

export const createPlaceCard = (cardData, deleteCard) => {
  const card = cardTemplate.content.cloneNode(true);

  const img = card.querySelector('.card__image');
  img.src = cardData?.link;
  img.alt = cardData?.name;

  const title = card.querySelector('.card__title');
  title.textContent = cardData?.name;

  const deleteButton = card.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', deleteCard);

  return card;
};
