const API_KEY = 'efe85b88a773abd3e8dd0247f3e5c6f2';

// fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
// fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
// fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);

export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  )
    .then((data) => data.json())
    .then((data) => data.results);
};

export const getFilmByName = (query) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  )
    .then((data) => data.json())
    .then((data) => data.results);
};
