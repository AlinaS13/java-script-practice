// Напишите код, который работает так:
// - пока промис выполняется, в p с Id="loader" выводится текст "...Loading books";
// - если промис выполнен успешно - в ul с id="book-list" выводится список книг из массива ниже;
// - если промис выполнен с ошибкой - в ul с id="book-list" выводится сообщение "Not found";
// - независимо от того, как выполнился промис, сообщение "...Loading books" должно удалятся после выполнения промиса;

const loadingBooks = document.getElementById("loader");
const bookList = document.getElementById("book-list");

const promise = new Promise((resolve, reject) => {
  loader.insertAdjacentHTML("beforeend", "...Loading books");
  setTimeout(() => {
    const books = [
      {
        id: "u9kgwNWGi3uUUwh0b8V49",
        title: "Eloquent JavaScript, Third Edition",
        author: "Marijn Haverbeke",
      },
      {
        id: "YxhM4QDxPeA3SmPHcEZPJ",
        title: "Practical Modern JavaScript",
        author: "Nicolas Bevacqua",
      },
    ];
    resolve(books);
  }, 2000);
  setTimeout(() => {
    const error = new Error("Books not found!");
    reject(error);
  }, 5000);
});

promise
  .then((result) => {
    const elements = result.map(
      ({ title, author }) => `<li>Title:${title},   Author: ${author}</li>`
    );
    return elements;
  })
  .then((elements) => {
    bookList.insertAdjacentHTML("beforeend", elements.join(""));
  })
  .catch((error) => {
    bookList.insertAdjacentHTML("afterend", `<p>${error.message}`);
  })
  .finally(() => {
    loader.innerHTML = "";
  });
