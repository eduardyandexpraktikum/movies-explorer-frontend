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
    return (
        <div class="body">
            <Routes>

                <Route
                    path={'/'}
                    element={<>
                        <Header />
                        <NavTab />
                        <AboutProject />
                        <Techs />
                        <AboutMe />
                        <Footer />
                    </>
                    }
                />
                <Route
                    path={'/movies'}
                    element={<>
                        <Header />
                        <SearchForm />
                        <MoviesCardList />
                        <Footer />
                    </>
                    }
                />
                <Route
                    path={'/saved-movies'}
                    element={<>
                        <Header />
                        <SearchForm />
                        <SavedMovieCardList />
                        <Footer />
                    </>
                    }
                />
                <Route
                    path={'/profile'}
                    element={<>
                        <Header />
                        <Profile />
                    </>
                    }
                />
                <Route
                    path={'/signup'}
                    element={<>
                        <Register />
                    </>
                    }
                />
                <Route
                    path={'/signin'}
                    element={<>
                        <Login />
                    </>
                    }
                />
                <Route path="*" element={<Error />} />

            </Routes>
        </div>
    );
}

export default App;
