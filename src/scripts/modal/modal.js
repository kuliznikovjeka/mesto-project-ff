
const handleOpenModal = (popapNode) => {
  popapNode.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscCloseModal);
}

const handleCloseModal = (popapNode) => {
  popapNode.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscCloseModal);
}

const handleCloseModalByOverlay = (event) => {
  const isOutsideClick = !event.target.closest('.popup__content');
  const modal = event.target.closest('.popup');

  if (isOutsideClick) {
    handleCloseModal(modal)
  }
}

function handleEscCloseModal (event) {
  if (event.key === 'Escape') {
    const openedPopap = document.querySelector('.popup_is-opened');

    if (openedPopap) {
      handleCloseModal(openedPopap);
    }
  }
};

export { handleOpenModal, handleCloseModal, handleCloseModalByOverlay };
