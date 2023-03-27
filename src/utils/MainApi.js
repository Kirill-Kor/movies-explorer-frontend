import checkResponse from "./checkResponse";

class MainApi {
    constructor(options) {
        this._options = { ...options };
    }

    _fetch(path, method = 'GET', body) {

        return fetch(`${this._options.baseUrl}${path}`, {
            headers: {
                ...this._options.headers,
                "Authorization": `Bearer ${localStorage.getItem('jwt')}`

            }, method: method, body: body
        })
            .then(checkResponse);
    }

    register({ userEmail, userName, userPassword }) {
        return this._fetch('signup', "POST", JSON.stringify({ email: userEmail, name: userName, password: userPassword }));

    }

    login({ userEmail, userPassword }) {
        return this._fetch('signin', "POST", JSON.stringify({ email: userEmail, password: userPassword }));
    }

    checkTokenValidity() {
        return this._fetch('users/me');
    }

    getMyMovies() {
        return this._fetch('movies');
    }

    addToFavorite({ country, director, duration, year, description, image, trailerLink, nameRU, nameEN, id }) {
        return this._fetch('movies', 'POST',
            JSON.stringify({
                country, director, duration, year, description,
                image: `https://api.nomoreparties.co/${image.url}`, trailerLink, nameRU, nameEN,
                thumbnail: `https://api.nomoreparties.co/${image.formats.thumbnail.url}`, movieId: String(id)
            }));
    }

    removeFromFavorite(movieId) {
        return this._fetch(`movies/${movieId}`, 'DELETE');
    }

    patchUserInfo(name, email) {
       
       return this._fetch('users/me', 'PATCH', JSON.stringify({name, email}));
    }


}

const mainApi = new MainApi({
    baseUrl: 'https://api.kirkor.movies-exp.nomoredomains.work/',
    
    
    headers: {
        "Content-Type": "application/json"
    }
});

export default mainApi;