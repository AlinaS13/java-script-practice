const elem = document.querySelector(".text");
console.log(elem);

const elem2 = document.querySelectorAll("li");
console.log(elem2);

const elem3 = elem.querySelector("p");
console.log(elem3);

// Створіть об'єкт `student` з такими полями:
// - name "Alex";
// - lastName: "Regent";
// - `tabel` із такими властивостями:
//     - english зі значенням "8";
//     - history зі значенням "9";
//     - physicalCulture зі значенням "12";

// Додайте в об'єкт метод `getHighestScore`, який повертає найвищу оцінку,
// метод  `geLowestScore`, який повертає найнижчу оцінку, так метод `geLowestScore`, який повертає найнижчу оцінку,так метод `geAverageScore`, який повертає середню оцінку.

// const student = {
//   name: "Alex",
//   lastName: "Regent",
//   tabel: {
//     english: 8,
//     history: 9,
//     physicalCulture: 12,
//   },
//   getHighestScore() {
//     const scores = Object.values(this.tabel);
//     let highestScore = scores[0];
//     for (const score of scores) {
//       if (score > highestScore) {
//         highestScore = score;
//       }
//     }

//     return highestScore;
// },
// console.log(student.getHighestScore());
// };
// geLowestScore(){
//     const values = Object.values(this.tabel);
//     let number = values[0];
//     for (const value of values) {
//         if (values < number) {
//             number = value;
//         }
//     }
//     console.log(number);
//     return number;
// }

// geAverageScore(){
//     const values = Object.values(this.tabel);
//     let total = 0;
//     for (const value of values) {
//         total += value;
//     }
//     return (total / values.length).toFixed(1);
// },
// }
// console.log(student.geAverageScore());
