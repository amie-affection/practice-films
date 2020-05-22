import { getFilmByName } from "../fetches.js";
import { itemsRender, getId, createSearchForm } from "../services.js";

export const renderMoviesPage = () => {
  const renderSearchResult = (e) => {
    e.preventDefault();
    const value = searchForm.elements.searchInput.value;
    getFilmByName(value).then((data) => {
      searchMoviesList.innerHTML = itemsRender(data);
    });
  };
  createSearchForm();
  const searchForm = document.forms.searchForm;
  const searchMoviesList = document.querySelector(".searchMoviesList");

  searchForm.addEventListener("submit", renderSearchResult);
  searchMoviesList.addEventListener("click", getId);
};
