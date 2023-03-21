// Напишите промис, который выполняется с ошибкой через 2 секунды и выведит в ul с id="book-list" сообщение "Not found"

const bookList = document.getElementById("book-list");
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = new Error("Books not found!");
    reject(error);
  }, 2000);
});
promise
  .then((result) => {
    const elements = result.map(
      ({ title, author }) => `<li>Title:${title},   Author: ${author}</li>`
    );
    bookList.insertAdjacentHTML("beforeend", elements.join(""));
  })
  .catch((error) => {
    bookList.insertAdjacentHTML("afterend", `<p>${error.message}</p>`);
  });
