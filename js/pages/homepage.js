import { itemsRender } from "../services.js";
import { getMovies } from "../fetches.js";
import { getId, createTrandingFilmMarkup } from "../services.js";

export const renderStartPage = () => {
  createTrandingFilmMarkup();
  const trandingList = document.querySelector(".tranding-list");
  trandingList.addEventListener("click", getId);
  getMovies().then((data) => (trandingList.innerHTML = itemsRender(data)));
};

{
  // export const  renderStartPage = async () => {
  //   const container = document.querySelector('.container');
  //   const trandingFilmsList = filmsArr => `
  //   <h2 class="tranding-title">Trending today</h2>
  //     <ul class="tranding-list">
  //     ${itemsRender(filmsArr)}
  //     </ul>
  //     `;
  //     await getMovies ().then(data => (container.innerHTML = trandingFilmsList(data)));
  //   const trandingList = document.querySelector(".tranding-list");
  //   trandingList.addEventListener('click', getId)
  // };
  // export const renderStartPage = () => {
  //   const trandingFilmsList = filmsArr => {
  //     const container = document.querySelector('.container');
  //     const markup = `
  //   <h2 class="tranding-title">Trending today</h2>
  //     <ul class="tranding-list">
  //     ${itemsRender(filmsArr)}
  //     </ul>
  //     `;
  //     container.innerHTML = markup;
  //     const trandingList = document.querySelector('.tranding-list');
  //     trandingList.addEventListener('click', getId);
  //   };
  //   getMovies().then(data => trandingFilmsList(data));
  // };
}
