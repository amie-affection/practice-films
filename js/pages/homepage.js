import { itemsRender } from "../services.js";
import { getMovies } from "../fetches.js";
import { getId, createTrandingFilmMarkup } from "../services.js";

export const renderStartPage = () => {
  createTrandingFilmMarkup();
  const trandingList = document.querySelector(".tranding-list");
  trandingList.addEventListener("click", getId);
  getMovies().then((data) => (trandingList.innerHTML = itemsRender(data)));
};
