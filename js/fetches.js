const API_KEY = "efe85b88a773abd3e8dd0247f3e5c6f2";

export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  )
    .then(data => data.json())
    .then(data => data.results);
};

export const getFilmByName = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  )
    .then(data => data.json())
    .then(data => data.results);
};

// Функция поиска фильма по айди

export const getFilmByID = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  )
  .then(data => data.json())
}