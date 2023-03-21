// Сделайте пагинацию книг -  при отправке AJAX-запроса по адресу по адресу `https://books-store-zcsi.onrender.com/api/books?page=1&limit=3` вам вернется объект вида:
// ```
// total: 12,
// page: 1,
// items: []
// ```
// Где `total` - общее количество книг в базе, `page` - текущая страница, а `items` - список книг в ответе. Выведите книги в ul с id="books", а пагинацию - в div с id="books-pagination". Если при запросе произошла ошибка, выведите ее в div с id="books-error".
// Для решения используйте fetch.

const booksUl = document.getElementById("books");
const paginationDiv = document.getElementById("books-pagination");
const errorDiv = document.getElementById("books-error");

const renderBooks = (page = 1) => {
  fetch(`https://books-store-zcsi.onrender.com/api/books?page=${page}&limit=3`)
    .then((responce) => {
      if (!responce.ok) {
        throw Error("Can not..");
      }
      return responce.json();
    })
    .then(({ total, page, items }) => {
      const markup = items.map(
        ({ title, author }) => `<li>${title}. Author: ${author}</li>`
      );
      booksUl.innerHTML = "";
      booksUl.insertAdjacentHTML("beforeend", markup.join(""));
      const pageCount = Math.ceil(total / 3);
      const paginationElements = [];
      for (let i = 1; i <= pageCount; i++) {
        const className =
          Number(page) === i ? "pagination-item active" : "pagination-item";
        const paginationItem = `<span class = "${className}" data-page = ${i}>${i}</span>`;
        paginationElements.push(paginationItem);
      }
      paginationDiv.innerHTML = "";
      paginationDiv.insertAdjacentHTML(
        "beforeend",
        paginationElements.join("")
      );
    })
    .catch((error) => (errorDiv.textContent = error.message));
};

paginationDiv.addEventListener("click", function ({ target }) {
  const { page } = target.dataset;
  renderBooks(page);
});
renderBooks();

// const booksContainer = document.getElementById("books");
// const booksErrorContainer = document.getElementById("books-error");
// const paginationContainer = document.getElementById("books-pagination");

// const renderBooks = (page = 1) => {
//   fetch(`https://books-store-zcsi.onrender.com/api/books?page=${page}&limit=3`)
//     .then((response) => {
//       if (!response.ok) {
//         throw Error("Cannot fetch books");
//       }
//       return response.json();
//     })
//     .then(({ total, items, page }) => {
//       const books = items.map(
//         ({ title, author }) => `<li>${title}. Author ${author}</li>`
//       );
//       booksContainer.innerHTML = "";
//       booksContainer.insertAdjacentHTML("beforeend", books.join(""));
//       const pageCount = Math.ceil(total / 3);
//       const paginationElements = [];
//       for (let i = 1; i <= pageCount; i++) {
//         const className =
//           Number(page) === i ? "pagination-item active" : "pagination-item";
//         const paginationItem = `<span class="${className}" data-page=${i}>${i}</span>`;
//         paginationElements.push(paginationItem);
//       }
//       paginationContainer.innerHTML = "";
//       paginationContainer.insertAdjacentHTML(
//         "beforeend",
//         paginationElements.join("")
//       );
//     })
//     .catch((error) => {
//       booksErrorContainer.textContent = error.message;
//     });
// };

// paginationContainer.addEventListener("click", function ({ target }) {
//   const { page } = target.dataset;
//   renderBooks(page);
// });

// renderBooks();
