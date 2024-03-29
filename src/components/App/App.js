import React from 'react';
import '../App/App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Login } from '../Login/Login';
import AboutMe from '../Main/AboutMe/AboutMe';
import AboutProject from '../Main/AboutProject/AboutProject';
import NavTab from '../Main/NavTab/NavTab';
import Techs from '../Main/Techs/Techs';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import { Profile } from '../Profile/Profile';
import { Register } from '../Register/Register';
import SavedMovieCardList from '../SavedMovies/MoviesCardList/MoviesCardList';
import { Error } from '../Errors/Error';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
    document.documentElement.lang = 'ru';

    return (
        <Routes>

            <Route
                path={'/'}
                element={<>
                    <Header />
                    <main>
                        <NavTab />
                        <AboutProject />
                        <Techs />
                        <AboutMe />
                    </main >
                    <Footer />
                </>
                }
            />
            <Route
                path={'/movies'}
                element={<>
                    <Header />
                    <main>
                        <SearchForm />
                        <MoviesCardList />
                    </main>
                    <Footer />
                </>
                }
            />
            <Route
                path={'/saved-movies'}
                element={<>
                    <Header />
                    <main >
                        <SearchForm />
                        <SavedMovieCardList />
                    </main>
                    <Footer />
                </>
                }
            />
            <Route
                path={'/profile'}
                element={<>
                    <Header />
                    <main >
                        <Profile />
                    </main>
                </>
                }
            />
            <Route
                path={'/signup'}
                element={<>
                    <main >
                        <Register />
                    </main>
                </>
                }
            />
            <Route
                path={'/signin'}
                element={<>
                    <main >
                        <Login />
                    </main>
                </>
                }
            />
            <Route path="*" element={<Error />} />

        </Routes>
    );
}

export default App;
