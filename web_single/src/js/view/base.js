export const elements = {
  searchForm: document.querySelector(".search-bar"),
  searchInput: document.querySelector(".search_field"),
  searchResultList: document.querySelector(".content"),
  searchLoader: document.querySelector(".search-box"),
  pageButtons: document.querySelector(".result_pages"),
};

export const elementStrings = {
  loader: "loader",
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementStrings.loader}`);

  if (loader) loader.parentElement.removeChild(loader);
};

export const renderLoader = (parent) => {
  const loader = `
        <div class="${elementStrings.loader}">
        <i class="bx bx-loader-circle bx-burst bx-rotate-90"></i>
        </div>
    `;

  parent.insertAdjacentHTML("afterbegin", loader);
};
