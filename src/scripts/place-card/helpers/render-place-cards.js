// functions
import { deletePlaceCard } from './delete-place-card.js';
import { createPlaceCard } from './create-place-card.js';
// constants
import { PLACE_CARD_UI_ELEMENTS } from '../constants/ui-elements.js';
import { placeCardsData } from '../constants/place-cards-data.js';

const { placesList } = PLACE_CARD_UI_ELEMENTS;

export const renderPlaceCards = () => {
  placeCardsData.forEach(cardData => {
    const card = createPlaceCard(cardData, deletePlaceCard);
    placesList.append(card)
  });
};
