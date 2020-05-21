import { itemsRender } from "../services.js";
import { getMovies } from "../fetches.js";

export const renderStartPage = () => {
  const container = document.querySelector(".container");

  const trandingFilmsList = (filmsArr) => `
  <h2 class="tranding-title">Trending today</h2>
    <ul class="tranding-list">
    ${itemsRender(filmsArr)}
    </ul>
    `;

  getMovies().then((data) => (container.innerHTML = trandingFilmsList(data)));
};
