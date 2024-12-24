import movies from './movie-data.json';

export const showMovie = (movies) => {
    const movieContainer = document.querySelector('#movie-container');
    movieContainer.innerHTML = '';
    Object.values(movies).forEach(movie => addMovieToList(movie));
};

export const addMovieToList = (movie) => {
    const movieContainer = document.querySelector('#movie-container');
    // 1. Create
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const ul = document.createElement('ul');
    // 2. Modify
    h4.textContent = movie.title;
    ul.id = 'info';
    // 3.Append
    ul.append(criticScore(movie), audienceScore(movie), domestic(movie), genre(movie));
    div.append(h4, ul);
};

const criticScore = (movie) => {
    const li = document.createElement('li');
    li.textContent = `Critic Score: ${movie.criticScore}%`;
    return li;
};

const audienceScore = (movie) => {
    const li = document.createElement('li');
    li.textContent = `Audience Score: ${movie.audienceScore}%`;
    return li;
};

const domestic = (movie) => {
    const li = document.createElement('li');
    li.textContent = `Domestic Total: $${movie.domestic.toLocaleString()}`;
    return li;
};

const genre = (movie) => {
    const li = document.createElement('li');
    li.textContent = `Genre: ${movie.genre}`;
    return li;
};