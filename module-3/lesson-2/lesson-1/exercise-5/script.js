// ## Завдання 5

// Створіть об'єкт `tabel` із такими властивостями:
// - english зі значенням "8";
// - history зі значенням "9";
// - physicalCulture зі значенням "12";

// Так виведіть у консоль середню оцінку за всі предмети.

//____________________________

const tabel = {
  english: 8,
  history: 9,
  physicalCulture: 12,
};

const array = Object.values(tabel);
let total = 0;
for (elem of array) {
  total += elem;
}

console.log((total / array.length).toFixed(1));
//___________________________________

// const tabel = {
//   english: 8,
//   history: 9,
//   physicalCulture: 12,
// };

// let scoreSum = 0;
// let scoreCount = 0;
// for (const subject in tabel) {
//   scoreSum += tabel[subject];
//   scoreCount++;
// }

// const avarageScore = (scoreSum / scoreCount).toFixed(1);
// console.log(avarageScore);
