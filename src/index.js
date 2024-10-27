import { cardsData, createPlaceCard, deletePlaceCard, toggleFavoriteCard, handlefillDataImagePopap } from './scripts/card';
import { handleCloseModal, handleOpenModal, } from './scripts/modal';
// styles
import './styles/index.css';

const placesList = document.querySelector('.places__list');

// Попапы
const popapProfileEdit = document.querySelector('.popup_type_edit');
const popapCardCreate = document.querySelector('.popup_type_new-card');
const popapImageCard = document.querySelector('.popup_type_image');
const popaps = document.querySelectorAll('.popup');
// Попапы

// Кнопки для открытия попапов
const profileEditPopapOpenButton = document.querySelector('.profile__edit-button');
const createCardPopapOpenButton = document.querySelector('.profile__add-button');
// Кнопки для открытия попапов

// Формочки
const formCreateCard = document.forms['new-place'];
const formEditUserProfile = document.forms['edit-profile'];
// Формочки

// Данные и дом ноды формы профиля пользователя
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const profileNameInput = formEditUserProfile.elements.name;
const profileDescriptionInput = formEditUserProfile.elements.description;
// Данные и дом ноды  формы профиля пользователя

// Данные и дом ноды формы создания карточки
const cardPlaceNameInput = formCreateCard.elements['place-name'];
const cardPlaceLinkInput = formCreateCard.elements.link;
// Данные и дом ноды формы создания карточки

const handleCreateCardPlaceFormSubmit = (event) => {
  event.preventDefault();

  const newCardData = {
    name: cardPlaceNameInput.value,
    link: cardPlaceLinkInput.value
  }

  const card = createPlaceCard(newCardData, deletePlaceCard, toggleFavoriteCard, handlefillDataImagePopap)

  placesList.prepend(card)
  formCreateCard.reset();
  handleCloseModal(popapCardCreate);
}

const handleUserProfileFormSubmit = (event) => {
  event.preventDefault();

  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;

  handleCloseModal(popapProfileEdit);
}

const fillUserProfileFormFields = () => {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

// слушатели событий форм
formEditUserProfile.addEventListener('submit', handleUserProfileFormSubmit);
formCreateCard.addEventListener('submit', handleCreateCardPlaceFormSubmit);
// слушатели событий форм

// слушатели событиий для октрытия попапов
profileEditPopapOpenButton.addEventListener('click', () => {
  handleOpenModal(popapProfileEdit);
  fillUserProfileFormFields();
});

createCardPopapOpenButton.addEventListener('click', () => handleOpenModal(popapCardCreate));

placesList.addEventListener('click', (event) => {
  const isCardImage = event.target.classList.contains('card__image');
  if (isCardImage) {
    handleOpenModal(popapImageCard);
  }
});
// слушатели событиий для октрытия попапов


// слушатели событиий для закрытия попапов
popaps.forEach(popap => {
  popap.classList.add('popup_is-animated');

  popap.addEventListener('click', (event) => {
    const isOutsideClick = event.target.classList.contains('popup') && !event.target.closest('.popup__content');
    const closeButton = event.target.classList.contains('popup__close');

    if (closeButton || isOutsideClick) {
      handleCloseModal(popap);
    }
  })
})
// слушатели событиий для закрытия попапов

// отрисовка карточек
const renderPlaceCards = () => {
  cardsData.forEach(cardData => {
    const card = createPlaceCard(cardData, deletePlaceCard, toggleFavoriteCard, handlefillDataImagePopap);
    placesList.append(card)
  });
};

renderPlaceCards();
