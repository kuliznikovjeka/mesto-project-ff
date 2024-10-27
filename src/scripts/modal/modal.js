
const handleOpenModal = (popapNode) => {
  popapNode.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscCloseModal);
}

const handleCloseModal = (popapNode) => {
  popapNode.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscCloseModal);
}

function handleEscCloseModal (event) {
  if (event.key === 'Escape') {
    const openedPopap = document.querySelector('.popup_is-opened');

    if (openedPopap) {
      handleCloseModal(openedPopap);
      document.removeEventListener('keydown', handleEscCloseModal);
    }
  }
};

export { handleOpenModal, handleCloseModal };
