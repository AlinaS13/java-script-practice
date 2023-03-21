// Напишите промис, который успешно выполняется через 2 секунды и возвращает массив книг ниже. После чего возмите этот массив, сделайте из него массив тегов li и выведите в ul с id="book-list"
// ```
const bookList = document.getElementById("book-list");

const promis = new Promise((resolve, reject) => {
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
});

promis.then((result) => {
  const elements = result.map(
    ({ title, author }) => `<li>Title: ${title}, Author: ${author}</li>`
  );
  bookList.insertAdjacentHTML("beforeend", elements.join(""));
});
