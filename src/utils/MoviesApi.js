import checkResponse from "./checkResponse";

function getAllMovies() {
    return fetch ('https://api.nomoreparties.co/beatfilm-movies')
        .then(checkResponse)
}

export default getAllMovies;