// Візміть об'єкт `user` та додайте йому такі методи:
// - `isFavoriteMovie`, який в якості аргументу отримує назву фільму та перевіряє, чи є він в списку улюблених у користувача (властивість об'єкту `favoriteMovies`);
// - `addFavoriteMovie` - який в якості аргументу отримує назву фільму та якщо його немає в списку улюблених, додає його та повертає true, інакше - повертає false;
// - `removeFavoriteMovie` - який в якості аргументу отримує назву фільму та якщо він є в списку улюблених, видяляє його та повертає true, інакше - повертає false;

const user = {
  name: "Годрик",
  lastName: "Гриффиндор",
  favoriteMovies: ["Dune", "Avatar", "Deadpool"],
};

//todo________________________________________________________

//!Тобто чому дорівнює зис стрілочної функції? THIS функції всередині якої вона була створена. Тобто THIS getFullName дорівнює об'єкту тесть (USER у нашому випадку) і у цієї стрілочної функції THIS при виклику теж буде дорівнює (USER). Відповідно якщо ми як обробник повісимо цю функцію. THIS у нас не перевизначиться.

//todo___________________________________________________________________

// Створіть функцію getFullName, яка повертає повне ім'я та викличте її для об'єктів
// user1 та user2. Всередині функцію використовуйте this.
//метод call

// const user1 = {
//   name: "Годрик",
//   lastName: "Гриффиндор",
// };
// const user2 = {
//   name: "Геллерт",
//   lastName: "Гриндевальд",
// };

// function getFullName() {
//   const { name, lastName } = this;
//   return `${name} ${lastName}`;
// }

// console.log(getFullName.call(user1));
// console.log(getFullName.call(user2));

// console.log(user2);

//Вивід мінімальної і максимальної оцінки з масиву scoreArr
//Метод apply

// const scoreArr = [8, 6, 7, 11, 4, 12, 9, 10];

// const minScore = Math.min.apply(this, scoreArr);
// console.log(minScore);
// const maxScore = Math.max.apply(null, scoreArr);
// console.log(maxScore);
