import { renderStartPage } from "./pages/homePage.js";
import { renderMoviesPage } from "./pages/moviesPage.js";
const menu = document.querySelector(".menu");

const navigation = () => {
  renderStartPage();
  menu.addEventListener("click", moveToPage);

  function moveToPage(e) {
    if (e.target.nodeName === "A") {
      switch (e.target.dataset.page) {
        case "home":
          renderStartPage();
          break;
        case "movies":
          renderMoviesPage();
          break;
        default:
          renderStartPage();
      }
    }
  }
};

export default navigation;
