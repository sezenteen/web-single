require("@babel/polyfill");
import Search from "./model/Search";
import Customer from "./model/customer";
import { clearLoader, elements, renderLoader } from "./view/base";
import * as searchView from "./view/searchView";
const state = {};
//Хайлт хийсэн
const controlSearch = async () => {
  const query = searchView.getInput();
  if (query) {
    state.search = new Search(query);

    searchView.clearSearchQuery();
    searchView.clearSearchResult();
    renderLoader(elements.searchLoader);
    await state.search.doSearch();
    clearLoader();
    if (state.search.result === undefined) alert("Мэдээлэл олдсонгүй...");
    searchView.renderCustomers(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});

elements.pageButtons.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const gotoPageNum = parseInt(btn.dataset.goto, 10);
    //searchView.clearSearchQuery();
    searchView.clearSearchResult();
    searchView.renderCustomers(state.search.result, gotoPageNum);
  }
});

//Харилцагчийн мэдээлэл
const controlCustomer = async () => {
  const id = window.location.hash.replace("#", "");
  state.customer = new Customer(id);
  await state.customer.getCustomer();
  console.log(state.customer);
};
window.addEventListener("hashchange", controlCustomer);
