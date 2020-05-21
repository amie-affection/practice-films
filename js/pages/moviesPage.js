import { getFilmByName } from "../fetches.js";
import { itemsRender } from "../services.js";

export const renderMoviesPage = () => {
  const container = document.querySelector(".container");
  container.innerHTML = `<form class="searchForm" name="searchForm">
      <input type="text" name="searchInput">
          <button class="formBtn" type="submit">Search</button>
          </form>
          <ul class="searchMoviesList"></ul>`;

  const searchForm = document.forms.searchForm;
  const searchMoviesList = document.querySelector(".searchMoviesList");

  searchForm.addEventListener("submit", renderSearchResult);

  function renderSearchResult(e) {
    e.preventDefault();
    const value = searchForm.elements.searchInput.value;
    getFilmByName(value).then((data) => {
      searchMoviesList.innerHTML = itemsRender(data);
    });
  }
};
