// Сделайте пагинацию книг c помощью кнопки "Load more" при отправке AJAX-запроса по адресу по адресу `https://books-store-zcsi.onrender.com/api/books?page=1&limit=3` вам вернется объект вида:
// ```
// total: 12,
// page: 1,
// items: []
// ```
// Где `total` - общее количество книг в базе, `page` - текущая страница, а `items` - список книг в ответе. Выведите книги в ul с id="books", под ним - кнопку с текстом "load more" если еще не все книги показаны. Если все книги отображаются - кнопки быть не должно. Если при запросе произошла ошибка, выведите ее в div с id="books-error".
// Для решения используйте fetch.

const booksContainer = document.getElementById("books");
const booksErrorContainer = document.getElementById("books-error");

const renderBooks = (page = 1) => {
  fetch(`https://books-store-zcsi.onrender.com/api/books?page=${page}&limit=3`)
    .then((response) => {
      if (!response.ok) {
        throw Error("Упс, а що трапилось?");
      }
      return response.json();
    })
    .then(({ total, items, page }) => {
      const books = items.map(
        ({ title, author }) => `<li>${title}.Author ${author}</li>`
      );
      booksContainer.insertAdjacentHTML("beforeend", books.join(""));
      const loardMoreButton = document.getElementById("loard-more-button");
      const booksDisplay = booksContainer.children.length;
      if (booksDisplay === total) {
        loardMoreButton.remove();
      }
      if (!loardMoreButton) {
        const button = document.createElement("button");
        button.id = "loard-more-button";
        button.textContent = "Load more...";
        button.dataset.page = Number(page) + 1;
        button.addEventListener("click", function ({ target }) {
          const { page } = target.dataset;
          renderBooks(page);
        });
        booksContainer.after(button);
        return;
      }
      loardMoreButton.dataset.page = Number(page) + 1;
    })
    .catch((error) => {
      booksErrorContainer.textContent = error.message;
    });
};

renderBooks();
