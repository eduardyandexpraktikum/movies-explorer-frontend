export const baseUrl = 'https://api.eduarddiploma.nomoredomainsmonster.ru'

export function register({ name, email, password }) {
    return fetch(`${baseUrl}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
        .then(_getResponseData)
}

export function login({ email, password }) {
    console.log(email, password)
    return fetch(`${baseUrl}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(_getResponseData)
}

export function getMe(token) {
    return fetch(`${baseUrl}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(_getResponseData);
}

export function patchMe(name, email, token) {
    return fetch(`${baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(_getResponseData);
}

export const checkToken = (token) => {
    return fetch(`${baseUrl}/users/me`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(_getResponseData);
};

export function getSavedMovies(token) {
    return fetch(`${baseUrl}/movies`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(_getResponseData);
}

export function addMovie(data, token) {
    return fetch(`${baseUrl}/movies`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            country: data.country,
            director: data.director,
            duration: data.duration,
            year: data.year,
            description: data.description,
            image: `https://api.nomoreparties.co${data.image.url}`,
            trailerLink: data.trailerLink,
            nameRU: data.nameRU,
            nameEN: data.nameEN,
            thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
            movieId: data.id,
        })
    }).then(_getResponseData);
}

export function deleteMovie({ movieId, token }) {
    console.log(movieId)
    return fetch(`${baseUrl}/movies/${movieId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }).then(_getResponseData);
}


export function _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка ${res.status}`);
    }
    return res.json();
}