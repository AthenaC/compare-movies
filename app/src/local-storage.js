import movieData from './movie-data.json'
import { showMovie } from './dom-helpers.js';

const startingMovies = movieData;

const setLocalStorageKey = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageKey = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    }
    catch (err) {
        console.error(err);
        return null;
    }
};

export const setMovies = (newMovies) => {
    setLocalStorageKey('movies', newMovies);
};

export const getMovies = () => {
    const storedMovies = getLocalStorageKey('movies');
    return storedMovies || startingMovies;
};

export const initMoviesIfEmpty = () => {
    const storedMovies = getMovies();
    if (!storedMovies || Object.keys(storedMovies).length === 0) setMovies(startingMovies);
};

export const addMovie = (newMovie) => {
    const storedMovies = getMovies();
    storedMovies[newMovie.title] = newMovie;
    return newMovie;
};

export const resetMovies = (e) => {
    const originalText = e.target.textContent;
    e.target.textContent = "Resetting...";
    setTimeout(() => {
        e.target.textContent = originalText;
        movieSection.innerHTML = '';
        showMovie(getMovies());
    }, 1000);
};
