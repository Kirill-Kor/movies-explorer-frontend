import mainApi from "./MainApi";


export default function login(userEmail, userPassword) {
    return mainApi.login({userEmail, userPassword})
    .then((response) => {
        localStorage.setItem('jwt', response.token);
    })
    .catch((error) => {
        console.log(error);
    })
}