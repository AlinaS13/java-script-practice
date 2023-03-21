// Напишите программу, которая работает так:
// - пользователь вводит в form с id="books-search" название книги и нажимает на кнопку "Search book";
// - запрос на поиск книги отправляется на адрес `https://books-store-zcsi.onrender.com/api/books?title=book_title`;
// - если ни одна книга не найдена, в ul с id="books" нужно вывести сообщение "Nothing found";
// - если какие-то книги найдены, нужно вывести их список в ul с id="books";
// - Если при запросе произошла ошибка, выведите ее в div с id="books-error";
// Используйте `axios.create` для задания адреса запроса.
// Для подключения axios используйте эту ссылку для CDN "https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.2/axios.min.js"

const form = document.getElementById("books-search");
const booksList = document.getElementById("books");
const divError = document.getElementById("books-error");

const booksInstance = axios.create({
  baseURL: "https://books-store-zcsi.onrender.com/api/books?title=book_title",
});
form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const { title } = this;
  const booksRequest = booksInstance.get("/", {
    params: {
      title: title.value,
    },
  });
  booksRequest
    .then(({ data }) => {
      divError.textContent = "";
      booksList.textContent = "";
      if (!data.items.length) {
        return (booksList.textContent = "Nothing found!");
      }
      const markup = data.items.map(
        ({ title, author }) => `<li>${title}. Author: ${author}</li>`
      );
      booksList.insertAdjacentHTML("beforeend", markup.join(""));
    })
    .catch((error) => {
      divError.textContent = error.message;
    });
}
