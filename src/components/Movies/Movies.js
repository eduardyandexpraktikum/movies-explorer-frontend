import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from './MoviesCardList/MoviesCardList'
import SearchForm from './SearchForm/SearchForm';
import { useState, useCallback, useEffect } from 'react';
import { MoviesApi } from '../../utils/MoviesApi';
import { useLocation } from 'react-router-dom';
import { SavedMovieCardList } from '../SavedMovies/SavedMoviesCardList/SavedMoviesCardList';

export function Movies({ loggedIn, checkLike, handleDeleteMovie, savedMovies }) {

    const [moviesList, setMoviesList] = useState([]); //все фильмы с nomoreparties
    const [searchInput, setSearchInput] = useState(''); // строка поиска
    const [shortSwitch, setShortSwitch] = useState(false); //переключатель короткометражек
    const [loading, setLoading] = useState(false); //прелоадер вкл/выкл
    const [filteredMovies, setFilteredMovies] = useState([]) //массив отфильтованых фильмов
    const { pathname } = useLocation();

    const movieSearch = useCallback((search, shortSwitch, movies) => {
        setSearchInput(search);
        localStorage.setItem("text", JSON.stringify(search));
        localStorage.setItem("shorts", JSON.stringify(shortSwitch));
        localStorage.setItem("movies", JSON.stringify(movies));
        setFilteredMovies(movies.filter((movie) => {
            const searchText = movie.nameRU.toLowerCase().includes(search.toLowerCase());
            return (
                shortSwitch ? (searchText && movie.duration <= 40) : searchText
            )
        }));
    }, []);

    useEffect(() => {
        if (localStorage.movies && localStorage.shorts && localStorage.text) {
            const movies = (localStorage.getItem('movies') === 'undefined') ? [] : JSON.parse(localStorage.getItem('movies'));
            const search = (localStorage.getItem('text') === 'undefined') ? '' : JSON.parse(localStorage.getItem('text'));
            const shorts = (localStorage.getItem('shorts') === 'undefined') ? false : JSON.parse(localStorage.getItem('shorts'));
            setMoviesList(movies);
            setSearchInput(search);
            setShortSwitch(shorts);
            movieSearch(search, shorts, movies);
        }
    }, [movieSearch, shortSwitch]);

    function handleSearchMovies(search) {
        if (!moviesList.length) {
            setLoading(true);
            MoviesApi.getMovies()
                .then((res) => {
                    setMoviesList(res);
                    // setShortSwitch(false);
                    movieSearch(search, shortSwitch, res)
                })
                .catch((err) => {
                    console.log(`Ошибка ${err}`);
                })
                .finally(() => setLoading(false));
        } else {
            movieSearch(search, shortSwitch, moviesList)
        }
    };

    function handleShortSwitch() {
        localStorage.setItem("shorts", JSON.stringify(!shortSwitch));
        setShortSwitch(!shortSwitch)
    };


    function handleSearchChange(e) {
        setSearchInput(e.target.value);
    }


    return (
        <>
            <Header loggedIn={loggedIn} />
            <main>
                <SearchForm
                    handleSearchMovies={handleSearchMovies}
                    setShortSwitch={setShortSwitch}
                    searchInput={searchInput}
                    handleSearchChange={handleSearchChange}
                    shortSwitch={shortSwitch}
                    handleShortSwitch={handleShortSwitch}
                />
                {pathname === '/movies' ?
                    <MoviesCardList
                        loading={loading}
                        moviesList={moviesList}
                        filteredMovies={filteredMovies}
                        checkLike={checkLike}
                        searchInput={searchInput}
                        savedMovies={savedMovies}
                        handleDeleteMovie={handleDeleteMovie}
                    />
                    :
                    <SavedMovieCardList
                        loading={loading}
                        moviesList={moviesList}
                        filteredMovies={filteredMovies}
                        checkLike={checkLike}
                        searchInput={searchInput}
                        savedMovies={savedMovies}
                        handleDeleteMovie={handleDeleteMovie}
                    />
                }
            </main>
            <Footer />
        </>
    )
}