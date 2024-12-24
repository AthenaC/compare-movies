import movieData from './movie-data.json'

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

export const resetMovies = () => {

};
