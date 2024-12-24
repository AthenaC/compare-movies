import './style.css'
import movies from './movie-data.json';
import { showMovie, addMovieToList } from './dom-helpers';
import { getMovies, setMovies, addMovie, resetMovies, initMoviesIfEmpty } from './local-storage.js';

const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newMovie = {
        criticScore: form.criticScore.value,
        audienceScore: form.audienceScore.value, 
        domestic: form.domestic.value,
        genre: form.genre.value,
        title: form.movieTitle.value
    };
    addMovie(newMovie);
    addMovieToList(newMovie);
    form.reset();
}

const main = () => {
    initMoviesIfEmpty();
    showMovie(getMovies());
    document.querySelector('form#form').addEventListener('submit', handleFormSubmit);
}

main();