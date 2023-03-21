// Отправьте AJAX-запрос ис помощью `fetch`, по адресу `https://books-store-zcsi.onrender.com/api/books` и выведите список книг в ul с id="books". Если при запросе произошла ошибка, выведите ее в div с id="books-error"

const booksContainer = document.getElementById("books");
const booksError = document.getElementById("books-error");

const URL = fetch("https://books-store-zcsi.onrender.com/api/books");

URL.then((response) => {
  if (!response.ok) {
    throw Error("Can not fetch books");
  }
  return response.json();
})
  .then((result) => {
    const books = result.map(
      ({ title, author }) => `<li>${title}.Author${author}</li>`
    );
    booksContainer.insertAdjacentHTML("beforeend", books.join(""));
  })
  .catch((error) => {
    booksError.textContent = error.message;
  });
