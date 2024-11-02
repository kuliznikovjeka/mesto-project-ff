const config = {
  baseUrl: 'https://mesto.nomoreparties.co/cohort-mag-4',
  headers: {
    authorization: '93f35fe1-3703-4371-a5c8-df2f38c921df',
    'Content-Type': 'application/json'
  },
  method: {
    patch: 'PATCH',
    post: 'POST',
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



export { getUserInfo, getCards , editUserProfile, addNewCard }

