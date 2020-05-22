import { createMovieMarkup } from "../services.js";

export const movieDetailsPage = (data) => {
  const container = document.querySelector(".container");
  container.innerHTML = createMovieMarkup(data);
};
