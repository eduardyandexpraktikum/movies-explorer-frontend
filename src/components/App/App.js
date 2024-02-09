import React from 'react';
import '../App/App.css';
import { Login } from '../Login/Login';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { getMe, login, patchMe, register, getSavedMovies, addMovie, deleteMovie, checkToken } from '../../utils/MainApi';
import { Profile } from '../Profile/Profile';
import { Register } from '../Register/Register';
import { Error } from '../Errors/Error';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../utils/CurrentUserContext';
import { useState, useEffect } from 'react';

function App() {
    document.documentElement.lang = 'ru';

    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({});
    const [movies, setMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token'));
    const [successUpdate, setSuccessUpdate] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            Promise.all([getMe(token), getSavedMovies(token)])
                .then(([userData, userSavedMovies]) => {
                    setCurrentUser(userData);
                    setSavedMovies(userSavedMovies);
                    setLoggedIn(true);
                })
                .catch((err) => {
                    console.log(err);
                });

        } else {
            setLoggedIn(false);
        }
    }, [loggedIn]);

    function handleRegister({ name, email, password }) {
        register({ name, email, password })
            .then((res) => {
                if (res) {
                    setLoggedIn(false)
                    handleLogin({ email, password })
                }
            })
            .catch((err) => {
                console.log(`Ошибка регистрации ${err}`);
            });
    }

    function handleLogin(data) {
        login(data)
            .then((res) => {
                localStorage.setItem('token', res.token);
                setLoggedIn(true);
                navigate('/movies', { replace: true });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleLogout() {
        localStorage.clear();
        setLoggedIn(false);
        setCurrentUser({});
        setSavedMovies([]);
        navigate('/', { replace: true })
    }

    function handlePatchMe(data) {
        patchMe(data, localStorage.token)
            .then((res) => {
                setCurrentUser(res);
                setSuccessUpdate(true)
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`)
            })
    }

    function handleDeleteMovie(movieId) {
        deleteMovie(movieId, localStorage.token)
            .then(() => {
                setSavedMovies(savedMovies.filter((movie) => { return movie._id !== movieId }));
            })
            .catch((err) => { console.log(`Ошибка ${err}`) });
    }

    function checkLike(movie) {
        const isLiked = savedMovies.some(element => movie.id === element.movieId);


        if (!isLiked) {
            addMovie(movie, localStorage.token)
                .then(res => {
                    console.log(res);
                    setSavedMovies(res);
                })
                .catch((err) => { console.log(`Ошибка ${err}`) });
        }
    }

    useEffect(() => {
        handleCheckToken();
    }, []);

    function handleCheckToken() {
        const token = localStorage.getItem("token");
        if (token) {
            checkToken(token)
                .then((res) => {
                    if (res) {
                        setCurrentUser(res)
                        setLoggedIn(true);
                    }
                })
                .catch((err) => console.log(err));
            setLoggedIn(false);
        }
    }

    return (
        <>
            <CurrentUserContext.Provider value={currentUser} />
            <Routes>
                <Route
                    path="/"
                    element={
                        loggedIn
                            ? <Navigate to="/movies" />
                            : <Main loggedIn={loggedIn} />
                        // возможно нужно сразу на мэйн без условия
                    }
                />
                <Route
                    path={'/movies'}
                    element={
                        <ProtectedRoute
                            element={Movies}
                            loggedIn={loggedIn}
                            movies={movies}
                            savedMovies={savedMovies}
                            checkLike={checkLike}
                            handleDeleteMovie={handleDeleteMovie}
                        />
                    }
                />
                <Route
                    path={'/saved-movies'}
                    element={
                        <ProtectedRoute
                            element={Movies}
                            loggedIn={loggedIn}
                            movies={movies}
                            savedMovies={savedMovies}
                            checkLike={checkLike}
                            handleDeleteMovie={handleDeleteMovie}
                        />
                    }
                />
                <Route
                    path={'/profile'}
                    element={
                        <ProtectedRoute
                            element={Profile}
                            loggedIn={loggedIn}
                            handleLogout={handleLogout}
                            handlePatchMe={handlePatchMe}
                            currentUser={currentUser}
                        />
                    }
                />
                <Route
                    path={'/signup'}
                    element={
                        loggedIn
                            ? <Navigate to="/movies" />
                            : <main >
                                <Register onSubmit={handleRegister} />
                            </main>
                    }
                />
                <Route
                    path='/signin'
                    element={
                        loggedIn
                            ? <Navigate to="/movies" />
                            : <main >
                                <Login onSubmit={handleLogin} />
                            </main>
                    }
                />

                <Route path="*" element={<Error />} />


            </Routes>
        </>
    );
}

export default App;
