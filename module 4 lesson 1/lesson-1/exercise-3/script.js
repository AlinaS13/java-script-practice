// // Перепишіть метод `user.getModifySallaries` у попередньому завдані, використовуючи метод
// // масиву `forEarch`.

// const user = {
//   name: "Годрик",
//   lastName: "Гриффиндор",
//   sword: "Годрик Гриффиндор",
//   sallaries: [13000, 15000, 12500],

//   getModifySallaries(callback) {
//     const newSallaries = [];
// for (const elem of this.sallaries) {
//   const newElem = callback(elem);
//   newSallaries.push(newElem);
// }
//     this.sallaries.forEach((elem) => {
//       const newElem = callback(elem);
//       newSallaries.push(newElem);
//     });
//     return newSallaries;
//   },
// };

// function convertToUSD(elem) {
//   const result = Math.round(elem / 40);
//   return result;
// }

// console.log(user.getModifySallaries(convertToUSD));

// // const items = ["item1", "item2", "item3"];

// // for (let i = 0; i < items.length; i++) {
// //   console.log(items[i]);
// // }

// // const itemsS = ["item1", "item2", "item3"];
// // items.forEach(function (elem, index, arr) {
// //   console.log(elem, index, arr);
// // });

// function calculateTotalPrice(orderedItems) {

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   return totalPrice;
// }

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   numbers.forEach(function (number, i) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
// Change code below this line

// for (let i = 0; i < firstArray.length; i += 1) {
//   if (secondArray.includes(firstArray[i])) {
//     commonElements.push(firstArray[i]);
//   }
// }

//   firstArray.forEach(function (value, index) {
//     if (secondArray.includes(value)) {
//       commonElements.push(value);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// let totalPrice = 0;

// const calculateTotalPrice = (orderedItems) =>
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function changeEven(numbers, value) {
//   newArr = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArr = numbers[i] + value;
//     }
//     return newArr;
//   }

//   const doubledNumbers = changeEven(numbers, value);
// }

// function changeEven(numbers, value) {
//   // Change code below this line
//   let newArr = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArr.push(numbers[i] + value);
//     } else {
//       newArr.push(numbers[i]);
//     }
//   }
//   return newArr;
//   // Change code above this line
// }

// console.log(changeEven([17, 24, 68, 31, 42], 100)); //[17, 124, 168, 31, 142]`

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach((element) => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// const students = [
//   { name: "Манго", courses: ["математика", "фізика", [1, 2, 3, [1]]] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// console.log(students.flatMap((student) => student.courses));

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

//? деструктуризація__________const titles = books.map(({ title }) => title);
//! аналог пепереднього без деструктуризації_______const titles = books.map(books => books.title);

console.log(titles);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const names = students.map((student) => student.name);
// console.log(names);

//*___________________________________________________________
//! Приклад чистої і не чистої функції _______________
const generateID = () => Math.floor(Math.random() * 10000);
// console.log(generateID())
// console.log(generateID())
// console.log(generateID())

//! Приклад чистої і не чистої функції _______________
const add = (x, y) => x + y;
console.log(add(2, 4));
console.log(add(2, 4));
console.log(add(2, 4));
