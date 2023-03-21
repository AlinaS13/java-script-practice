// Напишите программу, которая работает так:
// - пользователь вводит в form с id="books-search" название книги и нажимает на кнопку "Search book";
// - запрос на поиск книги отправляется на адрес `https://books-store-zcsi.onrender.com/api/books?title=book_title`;
// - если ни одна книга не найдена, в ul с id="books" нужно вывести сообщение "Nothing found";
// - если какие-то книги найдены, нужно вывести их список в ul с id="books";
// - Если при запросе произошла ошибка, выведите ее в div с id="books-error"

const form = document.getElementById("books-search");
const booksList = document.getElementById("books");
const booksError = document.getElementById("books-error");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const { title } = this;
  const booksRequest = fetch(
    `https://books-store-zcsi.onrender.com/api/books?title=${title.value}`
  );
  booksRequest
    .then((response) => {
      if (!response.ok) {
        throw Error("Can not fetch books");
      }
      return response.json();
    })
    .then((result) => {
      booksError.textContent = "";
      booksList.textContent = "";
      if (!result.length) {
        return (booksList.textContent = "Nothing found");
      }
      const books = result.map(
        ({ title, author }) => `<li>${title}. Author ${author}</li>`
      );
      booksList.insertAdjacentHTML("beforeend", books.join(""));
    })
    .catch((error) => {
      booksError.textContent = error.message;
    });
});

// // Controls whether bracket pair colorization is enabled or not. Use 'workbench.colorCustomizations' to override the bracket highlight colors.
//     "editor.bracketPairColorization.enabled": true,
//     // Controls whether the editor should render indent guides.
//     "editor.guides.indentation": true,
//     // Controls whether bracket pair guides are enabled or not.
//     //  - true: Enables bracket pair guides.
//     //  - active: Enables bracket pair guides only for the active bracket pair.
//     //  - false: Disables bracket pair guides.
//     "editor.guides.bracketPairs": "active",
//     // Controls whether horizontal bracket pair guides are enabled or not.
//     //  - true: Enables horizontal guides as addition to vertical bracket pair guides.
//     //  - active: Enables horizontal guides only for the active bracket pair.
//     //  - false: Disables horizontal bracket pair guides.
//     "editor.guides.bracketPairsHorizontal": "active",
//     // Controls whether the editor should highlight the active indent guide.
//     "editor.guides.highlightActiveIndentation": true,
//     // Controls whether bracket pair guides are enabled or not.
//     "editor.guides.highlightActiveBracketPair": true,
//     // Defines the bracket symbols that increase or decrease the indentation.
//     "editor.language.brackets": [
//         ["[", "]"],
//         ["(", ")"],
//         ["{", "}"]
//     ],
//     // Defines the bracket pairs that are colorized by their nesting level if bracket pair colorization is enabled.
//     "editor.language.colorizedBracketPairs": [
//         ["[", "]"],
//         ["(", ")"],
//         ["{", "}"]
//     ],
//     "workbench.colorCustomizations": {

//         "editorBracketHighlight.foreground1": "#fac928",
//         "editorBracketHighlight.foreground2": "#c122e9",
//         "editorBracketHighlight.foreground3": "#057aff",
//         "editorBracketHighlight.foreground4": "#00e74d",
//         "editorBracketHighlight.foreground5": "#f51384",
//         "editorBracketHighlight.foreground6": "#19f9d8",
//         "editorBracketPairGuide.background1": "#fac9289E",
//         "editorBracketPairGuide.background2": "#c122e99E",
//         "editorBracketPairGuide.background3": "#057aff9E",
//         "editorBracketPairGuide.background4": "#00e74d9E",
//         "editorBracketPairGuide.background5": "#f513849E",
//         "editorBracketPairGuide.background6": "#19f9d89E",
//         "editorBracketPairGuide.activeBackground1": "#FAC9289E",
//         "editorBracketPairGuide.activeBackground2": "#C122E99E",
//         "editorBracketPairGuide.activeBackground3": "#057AFF9E",
//         "editorBracketPairGuide.activeBackground4": "#00E7499E",
//         "editorBracketPairGuide.activeBackground5": "#F513849E",
//         "editorBracketPairGuide.activeBackground6": "#19F9D89E"
//     }
// }
