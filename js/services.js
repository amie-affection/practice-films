import { getFilmByID } from "./fetches.js";
import { movieDetailsPage } from "./pages/movieDeteilsPage.js";

export const itemsRender = (itemsArr) => {
  console.log(itemsArr);
  return itemsArr.reduce((acc, film) => {
    return (acc += `
        <li class="film-item">
            <a href="#" class="film-item__link" data-id="${film.id}">${
      film.original_name ? film.original_name : film.original_title
    }
            </a>
        </li>
                  `);
  }, "");
};

export const createMovieMarkup = (film) => {
  return `
   <div class="movie-item">
       <h2 class="movie-item__title">${film.title}</h2>
       <img src="https://image.tmdb.org/t/p/w500/${
         film.poster_path
       }" alt="" class="movie-item__poster">
       <p class="overview">${film.overview}</p>
       <p class="genres">${film.genres.map(
         (item) => `<span>${item.name}</span>`
       )}</p>
   </div>`;
};

export const createSearchForm = () => {
  const container = document.querySelector(".container");

  container.innerHTML = `<form class="searchForm" name="searchForm">
      <input type="text" name="searchInput">
          <button class="formBtn" type="submit">Search</button>
          </form>
          <ul class="searchMoviesList"></ul>`;
};

export const createTrandingFilmMarkup = () => {
  const container = document.querySelector(".container");

  const markup = `
  <h2 class="tranding-title">Trending today</h2>
    <ul class="tranding-list">
    </ul>
    `;
  container.innerHTML = markup;
  
};
// export const createTrandingFilmMarkup = (filmsArr) => {
//   const container = document.querySelector(".container");

//   const trandingFilmsList = (filmsArr) => `
//   <h2 class="tranding-title">Trending today</h2>
//     <ul class="tranding-list">
//     ${itemsRender(filmsArr)}
//     </ul>
//     `;
// };

export const getId = (e) => {
  if (e.target.nodeName === "A") {
    const filmId = e.target.dataset.id;
    // console.log(filmId);
    getFilmByID(filmId).then((data) => movieDetailsPage(data));
  }
};
