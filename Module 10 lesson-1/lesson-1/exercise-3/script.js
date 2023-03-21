// Отправьте AJAX-запрос ис помощью `axios`, по адресу `https://books-store-zcsi.onrender.com/api/books` и выведите список книг в ul с id="books". Если при запросе произошла ошибка, выведите ее в div с id="books-error".
// Используйте `axios.create` для задания адреса запроса.
// Для подключения axios используйте эту ссылку для CDN "https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.2/axios.min.js"

// const booksContainer = document.getElementById("books");
// const booksErrorContainer = document.getElementById("books-error");

// const booksInstance = axios.create({
//   baseURL: "https://books-store-zcsi.onrender.com/api/books",
// });
// const booksRequest = booksInstance.get("/");
// // const booksRepost = booksInstance.post("/");

// booksRequest
//   .then((response) => {
//     const books = response.data.map(
//       ({ title, author }) => `<li>Title: ${title}, Author: ${author}</li>`
//     );
//     booksContainer.insertAdjacentHTML("beforeend", books.join(""));
//   })
//   .catch((error) => (booksErrorContainer.textContent = error.message));

const booksContainer = document.getElementById("books");
const booksErrorContainer = document.getElementById("books-error");

const booksInstance = axios.create({
  baseURL: "https://books-store-zcsi.onrender.com/api/books",
});

const booksRequest = booksInstance.get("/");

booksRequest
  .then((response) => {
    const books = response.data.items.map(
      ({ title, author }) => `<li>${title}. Author ${author}</li>`
    );
    booksContainer.insertAdjacentHTML("beforeend", books.join(""));
  })
  .catch((error) => {
    booksErrorContainer.textContent = error.message;
  });
