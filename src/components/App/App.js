import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';

import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {

    if (localStorage.getItem('jwt')) {
      handleLogin();
    }

  }, []);


  function handleLogin() {
    mainApi.checkTokenValidity()
      .then((response) => {
        setCurrentUser(response);
        setIsLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => console.log(err));
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('checked');
    localStorage.removeItem('keyword');
    localStorage.removeItem('savedKeyword');
    setIsLoggedIn(false);
  }

  function handleUpdateUser(name, email) {
    return mainApi.patchUserInfo(name, email)
            .then((user) => {
              setTimeout(() => setCurrentUser(user), 2000);
            })
            .catch((err) => console.log(err));
  }

  function Protected(props) {

    if (!props.isLogged) return <Navigate to="/" replace />

    return props.children;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main isLogged={isLoggedIn} />}></Route>
        <Route path="/movies" element={
          <Protected isLogged={isLoggedIn}>
            <Movies />
          </Protected>}>
        </Route>
        <Route path="/saved-movies" element={
          <Protected isLogged={isLoggedIn}>
            <SavedMovies />
          </Protected>}>
        </Route>
        <Route path="/profile" element={
          <Protected isLogged={isLoggedIn}>
            <CurrentUserContext.Provider value={currentUser || ''}>
              <Profile onEdit={handleUpdateUser} onLogout={handleLogout}/>
            </CurrentUserContext.Provider>
          </Protected>}>

        </Route>
        <Route path="/signin" element={<Login onLogin={handleLogin} />}></Route>
        <Route path="/signup" element={<Register onLogin={handleLogin} />}></Route>
        {/* <NotFound></NotFound> */}
      </Routes>

    </div>
  );
}

export default App;
