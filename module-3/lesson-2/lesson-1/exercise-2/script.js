// Створіть об'єкт `movie` з таким полями:
// - title - "Dune";
// - year - "2020";
// - genres: массив строк "fantastic", "action";

// Після створення об'єкту змініть значеня поля `year` на "2021" та виведіть
// його у консоль.

// Додайте об'екту властивість `director` зі значенням "Denis Villeneuve" та
// виведіть його у консоль.

const movie = {
  title: "Dune",
  year: "2020",
  genres: ["fantastic", "action"],
};
console.log(movie);
movie.year = "2021";
console.log(movie.year);
movie.director = "Devi Villnew";
console.log(movie.director);
