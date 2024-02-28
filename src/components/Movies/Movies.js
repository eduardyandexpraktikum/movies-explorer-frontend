import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from './MoviesCardList/MoviesCardList'
import SearchForm from './SearchForm/SearchForm';
import { useState, useCallback, useEffect } from 'react';
import { MoviesApi } from '../../utils/MoviesApi';
import { SavedMovieCardList } from '../SavedMovies/SavedMoviesCardList/SavedMoviesCardList';
import { SHORTMOVIE } from '../../utils/Constants';

export function Movies({ loggedIn, checkLike, handleDeleteMovie, savedMovies, openSavedMovies, handleDeleteMovieFromList }) {

    const [moviesList, setMoviesList] = useState([]); //все фильмы с nomoreparties
    const [searchInput, setSearchInput] = useState(''); // строка поиска
    const [searchSavedInput, setSearchSavedInput] = useState(''); //строка поиска по сохранёнкам
    const [shortSwitch, setShortSwitch] = useState(false); //переключатель короткометражек
    const [savedShortSwitch, setSavedShortSwitch] = useState(false);
    const [loading, setLoading] = useState(false); //прелоадер вкл/выкл
    const [filteredMovies, setFilteredMovies] = useState([]); //массив отфильтованых фильмов
    const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

    function defaultSavedMovies() {
        setFilteredSavedMovies(savedMovies);
        setSavedShortSwitch(false);
        setSearchSavedInput('');
    }

    const movieSearch = useCallback((search, shortSwitch, movies) => {
        setSearchInput(search);
        localStorage.setItem("text", JSON.stringify(search));
        localStorage.setItem("shorts", JSON.stringify(shortSwitch));
        localStorage.setItem("movies", JSON.stringify(movies));
        setFilteredMovies(movies.filter((movie) => {
            const searchText = movie.nameRU.toLowerCase().includes(search.toLowerCase());
            return (
                shortSwitch ? (searchText && movie.duration <= SHORTMOVIE) : searchText
            )
        }));
    }, []);

    const savedMovieSearch = useCallback((search, savedShortSwitch, savedMovies) => {
        setSearchSavedInput(search)
        setFilteredSavedMovies(savedMovies.filter((movie) => {
            const searchText = movie.nameRU.toLowerCase().includes(search.toLowerCase());
            console.log(savedShortSwitch)
            console.log(searchText)

            return (
                savedShortSwitch ? (searchText && movie.duration <= SHORTMOVIE) : searchText
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

    useEffect(() => {
        savedMovieSearch(searchSavedInput, savedShortSwitch, savedMovies)
    }, [savedShortSwitch, savedMovies]);

    function handleSearchMovies(search) {
        if (!moviesList.length) {
            setLoading(true);
            MoviesApi.getMovies()
                .then((res) => {
                    setMoviesList(res);
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

    function handleSearchSavedMovies(search) {
        savedMovieSearch(search, shortSwitch, savedMovies);
    }

    function handleShortSwitch() {
        localStorage.setItem("shorts", JSON.stringify(!shortSwitch));
        setShortSwitch(!shortSwitch)
    };

    function handleSavedShortSwitch() {
        setSavedShortSwitch(!savedShortSwitch);
    }

    function handleSearchChange(e) {
        setSearchInput(e.target.value);
    }

    function handleSavedSearchChange(e) {
        setSearchSavedInput(e.target.value);
    }


    return (
        <>
            <Header loggedIn={loggedIn} />
            <main>
                <SearchForm
                    handleSearchMovies={handleSearchMovies}
                    handleSearchSavedMovies={handleSearchSavedMovies}
                    searchInput={searchInput}
                    searchSavedInput={searchSavedInput}
                    handleSearchChange={handleSearchChange}
                    handleSavedSearchChange={handleSavedSearchChange}
                    shortSwitch={shortSwitch}
                    savedShortSwitch={savedShortSwitch}
                    handleShortSwitch={handleShortSwitch}
                    handleSavedShortSwitch={handleSavedShortSwitch}
                />
                {!openSavedMovies ?
                    <MoviesCardList
                        loading={loading}
                        moviesList={moviesList}
                        filteredMovies={filteredMovies}
                        checkLike={checkLike}
                        searchInput={searchInput}
                        savedMovies={savedMovies}
                        handleDeleteMovie={handleDeleteMovie}
                        handleDeleteMovieFromList={handleDeleteMovieFromList}
                    />
                    :
                    <SavedMovieCardList
                        loading={loading}
                        moviesList={moviesList}
                        filteredSavedMovies={filteredSavedMovies}
                        checkLike={checkLike}
                        searchInput={searchInput}
                        savedMovies={savedMovies}
                        handleDeleteMovie={handleDeleteMovie}
                        handleDeleteMovieFromList={handleDeleteMovieFromList}
                        defaultSavedMovies={defaultSavedMovies}
                    />
                }
            </main>
            <Footer />
        </>
    )
}