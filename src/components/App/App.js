import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';
import Protected from '../Protected/Protected';

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});


  function handleLogin() {
    mainApi.checkTokenValidity()
      .then((response) => {
        setCurrentUser(response);
        setIsLoggedIn(true);
      })
      .catch((err) => console.log(err));
  }
  

  function handleLogout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('checked');
    localStorage.removeItem('keyword');

    setIsLoggedIn(false);
  }

  function handleUpdateUser(name, email) {
    return mainApi.patchUserInfo(name, email)
      .then((user) => {
        setTimeout(() => setCurrentUser(user), 2000);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {

    if (localStorage.getItem('jwt')) {
      handleLogin();
    }

  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main isLogged={isLoggedIn} />} />
        <Route path="/movies" element={
          <Protected >
            <Movies />
          </Protected>}>
        </Route>
        <Route path="/saved-movies" element={
          <Protected >
            <SavedMovies />
          </Protected>}>
        </Route>
        <Route path="/profile" element={
          <Protected >
            <CurrentUserContext.Provider value={currentUser || ''}>
              <Profile onEdit={handleUpdateUser} onLogout={handleLogout} />
            </CurrentUserContext.Provider>
          </Protected>
        }>

        </Route>
        <Route path="/signin" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Register onLogin={handleLogin} />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>
    
  );
}

export default App;
