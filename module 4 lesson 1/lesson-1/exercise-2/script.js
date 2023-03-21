// Візміть об'єкт `user` та додайте йому метод `getModifySallaries`, який в якості
// аргументу отримує колбек, та повертає новий масив `sallaries` - копію масиву `user.sallaries`, де кожне значеня - це результат роботи callback-функції.

// В якості аргументу в метод `user.getModifySallaries` створіть та передайте функцію
// `convertToUSD`, яка отримує зарплату у гривні так повертає її в доларах, откругляючи до найближчого цілого.
// ```

// const user = {
//   name: "Годрик",
//   lastName: "Гриффиндор",
//   sword: "Годрик Гриффиндор",
//   sallaries: [13000, 15000, 12500],
//   getModifySallaries(callback) {
//     const newSallaries = [];
//     for (const elem of this.sallaries) {
//       const newElem = callback(elem);
//       newSallaries.push(newElem);
//     }
//     return newSallaries;
//   },
// };

// function convertToUSD(elem) {
//   const result = Math.round(elem / 40);
//   return result;
// }

// console.log(user.getModifySallaries(convertToUSD));

//!_____________Імперативний___________________

// const values = [1, 2, 3, 4];
// let result = 0;
// for (let i = 0; i < values.length; i++) {
//   result += values[i] ** 2;
// }

// console.log(result);

//?_____________Декларативний________________

const getSumSquare = (arr) => arr.reduce((acc, value) => acc + value ** 2, 0);
const result = getSumSquare(values);
console.log(result);
