// Напишите 2 промиса:
// - первый через 2 секунды успешно завершается, записывая в result массив книг ниже;
// - второй через 1 секунду завершается с ошибкой с текстом "Not found";

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

console.log(promis);

const promis2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = new Error("not found");
    reject(error);
  }, 1000);
});

console.log(promis2);
