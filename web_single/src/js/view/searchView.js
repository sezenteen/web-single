import { elements } from "./base";
export const getInput = () => elements.searchInput.value;

const renderCustomer = (cus) => {
  //       customers.innerHTML +=
  // console.log(customer.name);
  const markup = `
        <div class="card">
        <div class="card-content">
        <div class="image">
        <img src="img/${cus.name}.png" alt="" />
        </div>
  
        <div class="name-profession">
        <span class="name">${cus.name}</span>
        <span class="profession">${cus.address}</span>
        </div>
        <div class="media-icons">
  
        <a href="mailto:${cus.email}"><i class="bx bx-envelope"> </i></a>
        <a href="tel:${cus.phone}"><i class="bx bx-phone"></i></a>
  
        <i class="bx bxl-facebook-circle"></i>
      </div>
        <div class="rating">
        <i class='bx bxs-star'></i>
        <i class="bx bxs-star"></i>
        <i class="bx bxs-star"></i>
        <i class="bx bx-star"></i>
        <i class="bx bx-star"></i>
      </div>
        <div class="button">
        <button class="aboutMe">Дэлгэрэнгүй</button>
        <button class="hireMe">Холбоо барих</button>
        </div>
        </div>
        </div>
          `;

  // ul рүүгээ нэмнэ
  elements.searchResultList.insertAdjacentHTML("beforeend", markup);
};
export const clearSearchQuery = () => {
  elements.searchInput.value = "";
};
export const clearSearchResult = () => {
  elements.searchResultList.innerHTML = "";
  elements.pageButtons.innerHTML = "";
};

export const renderCustomers = (customers, currentPage = 1, resPerPage = 8) => {
  // Хайлтын үр дүнг хуудаслаж үзүүлэх
  //page  = 2, start = 10, end = 20
  const start = (currentPage - 1) * resPerPage;
  const end = currentPage * resPerPage;
  customers.slice(start, end).forEach(renderCustomer);
  // Хуудаслалтын товчуудыг гаргаж ирэх
  const totalPages = Math.ceil(customers.length / resPerPage);
  renderButtons(currentPage, totalPages);
};

// // type ===> 'prev', 'next'
const createButton = (
  page,
  type,
  direction
) => `  <button class="btn-inline results__btn--${type}" data-goto=${page}>
            <i class="bx bxs-skip-${direction}-circle"></i>
            <span>Хуудас ${page}</span>
          </button>
  `;

const renderButtons = (currentPage, totalPages) => {
  let buttonHtml;

  if (currentPage === 1 && totalPages > 1) {
    // 1-р хуудсан дээр байна, 2-р хуудас гэдэг товчийг гарга
    buttonHtml = createButton(2, "next", "next");
  } else if (currentPage < totalPages) {
    // Өмнөх болон дараачийн хуудас руу шилжих товчуудыг үзүүл
    buttonHtml = createButton(currentPage - 1, "prev", "previous");
    buttonHtml += createButton(currentPage + 1, "next", "next");
  } else if (currentPage === totalPages) {
    // Хамгийн сүүлийн хуудас дээр байна. Өмнөх рүү шилжүүлэх товчийг л үзүүлнэ.
    buttonHtml = createButton(currentPage - 1, "prev", "previous");
  }

  elements.pageButtons.insertAdjacentHTML("afterbegin", buttonHtml);
};
