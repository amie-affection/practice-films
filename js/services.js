export const itemsRender = (itemsArr) => {
  console.log(itemsArr);
  return itemsArr.reduce((acc, film) => {
    return (acc += `
        <li class="film-item">
            <a href="#" class="film-item__link" data-id="${film.id}">${
      film.original_name ? film.original_name : film.original_title
    }</a>
            </li>
        `);
  }, "");
};
