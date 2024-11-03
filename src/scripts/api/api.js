const config = {
  baseUrl: 'https://nomoreparties.co/v1/cohort-mag-4',
  headers: {
    authorization: '93f35fe1-3703-4371-a5c8-df2f38c921df',
    'Content-Type': 'application/json'
  },
  method: {
    patch: 'PATCH',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE'
  }
}

const getUserInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
  .then((response, reject) => {
    if (response.ok) {
      return response.json();
    }

    return reject(`Ошибка ${response.status}`);
  })
}

const getCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then((response, reject) => {
    if (response.ok) {
      return response.json();
    }

    return reject(`Ошибка ${response.status}`);
  })
}

const editUserProfile = (userData) => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
    method: config.method.patch,
    body: JSON.stringify({
      name: userData.name,
      about: userData.about
    })
  })
  .then((response, reject) => {
    if (response.ok) {
      return response.json();
    }

    return reject(`Ошибка ${response.status}`);
  })
}

const addNewCard = (cardData) => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
    method: config.method.post,
    body: JSON.stringify({
      name: cardData.name,
      link: cardData.link
    })
  })
  .then((response, reject) => {
    if (response.ok) {
      return response.json();
    }

    return reject(`Ошибка ${response.status}`);
  })
}

const deleteCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    headers: config.headers,
    method: config.method.delete
  })
  .then((response, reject) => {
    if (response.ok) {
      return response.json();
    }

    return reject(`Ошибка ${response.status}`);
  })
}

const toggleFavoriteCard = (cardId, isLiked) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    headers: config.headers,
    method: isLiked
      ? config.method.delete
      : config.method.put
  })
  .then((response, reject) => {
    if (response.ok) {
      return response.json();
    }

    return reject(`Ошибка ${response.status}`);
  })
}

const updateUserAvatar = (avatarLink) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    headers: config.headers,
    method: config.method.patch,
    body: JSON.stringify({
      avatar: avatarLink,
    })
  })
  .then((response, reject) => {
    if (response.ok) {
      return response.json();
    }

    return reject(`Ошибка ${response.status}`);
  })
}

export {
  getUserInfo,
  getCards,
  editUserProfile,
  addNewCard,
  deleteCard,
  toggleFavoriteCard,
  updateUserAvatar
}

