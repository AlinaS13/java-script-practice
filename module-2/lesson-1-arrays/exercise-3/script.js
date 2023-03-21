// Створіть массив з назвами великих домів Вестеросу: "Старки", "Таллі", "Аррени", "Ланністери", "Баратеони", "Таргариєни", "Тирелли", "Грейджої",
// після чого створіть його копію. Змініть у копії 5 елемент массиву на "Бейліш"
// та виведіть у консоль 5 елемент першого масиву так копії

// const greatHouses = [
//   "Старки",
//   "Таллі",
//   "Аррени",
//   "Ланністери",
//   "Баратеони",
//   "Таргариєни",
//   "Тирелли",
//   "Грейджої",
// ];

// const copyGreatHouses = [];
// for (const greatHouse of greatHouses) {
//   copyGreatHouses.push(greatHouse);
// }

// copyGreatHouses[5] = "Бейліш";
// console.log(greatHouses);
// console.log(copyGreatHouses);

// Сидять мушкетери в таверні. Підходе людина та зипутиє у вишибали кого він шукає.
// Відповідно працівник таверни іде в зал перебирати всіх хто є в пошуках потрібної людини.

// const users = ["Атос", "Портос", "Арамис", "Дартаньян"];

// const user = prompt("Кого ви шукаєте?");
// let result = false;

// for (const value of users) {
//   if (value === user) {
//     result = true;
//     break;
//   }
// }
// if (result) {
//   console.log(`Зараз ${user} вийде`);
// } else {
//   console.log(`${user} не найден`);
// }

// const presidents = ["Клинтон", "Буш", "Обама", "Трамп", "Байден"];

// for (const president of presidents) {
//   if (president === "Трамп") {
//     continue;
//   }
//   console.log(president);
// }

// const planets = [
//   "Меркурий",
//   "Венера",
//   "Земля",
//   "Марс",
//   "Юпитер",
//   "Сатурн",
//   "Уран",
//   "Нептун",
// ];

// const copyplanets = planets.join();

// // console.log(copyplanets);
// console.log(`Планеты Солнечной системы: ${copyplanets}`);

// const holidays = ["Новий рік", "8 березня", "23 лютого", "31 грудня"];

// // нам треба замінити 23 лютого на 14 жовтня

// const index = holidays.indexOf("23 лютого");
// console.log(index);
// console.log(holidays);
// holidays[index] = "14 жовтня";
// console.log(holidays);
// console.log(holidays.indexOf("Різдво"));

// const a = [1, 2, 3, 4, 5];
// for (let i = 0; i < a.length; i += 1) {
//   console.log(a[i] + 10);
// }
// for (const elem of a) {
//   console.log(elem + 10);
// }

// for (const elem of a) {
//   console.log(elem);
//   console.log(elem + 10);
// }

// const array1 = [1, 2, 3];
// const array2 = array1;

// console.log(a === b);

// console.log([1, 2, 3] === [1, 2, 3]);

// array1[0] = 10;
// console.log(array2);

// array2[2] = 5;
// console.log(array2);

// const string = "1-! 2-! 3-! 4-! 5-!";

// console.log(string.split());

// const string2 = [1, 2, 3, 4, 5];
// console.log(string2.join(""));

// const string = [0, 90];
// string.push(1);
// const length = string.push(3, 10, 29, 106);
// console.log(string);
// console.log(length);

// const string2 = [1, 2, 3, 4, 5];
// const deletestring2 = string2.pop();
// console.log(deletestring2);

// function getExtremeElements(array) {
//   // Change code below this line

//   const result = [];
//   result.push(array.slice(0, 1).shift());
//   result.push(array.slice(-1));
//   return result;
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// _____________________________________________

// testFunction();

// function testFunction() {
//   const x = 5;
//   const y = 10;
//   console.log(x + y);
// }

// testFunction();

// const = function nextFunction()

// function testFunction(x, y) {
//   console.log(x * y);
// }
// testFunction(2, 5);

// function returnResult(a, b, c) {
//   const result = a + b * c;
//   return result;
// }
// const result = returnResult(5, 10, 2);
// console.log(result);

// function min(a, b) {
//   return a < b ? a : b;
// }

// console.log(min(2, 5));
// console.log(min(7, 5));
// console.log(min(1, 1));

// function returnResult(a, b, c) {
//   const result = a + b * c;
//   return result;
// }
// const result = returnResult(5, 10, 2);
// console.log(result);

// const sum = function testFun() {
//   const x = 5;
//   const y = 10;
// };

// console.log(sum);

// const keivSquare = calcCircleArea(20);
// console.log(keivSquare);
// const calcCircleArea = function (radius) {
//   const circleArea = 3.1516926 * radius ** 2;
//   return circleArea;
// };

// function getMaxValue(value1, value2, value3) {
//   if (value1 > value2 && value1 > value3) {
//     return value1;
//   } else if (value2 > value1 && value2 > value3) {
//     return value2;
//   } else {
//     return value3;
//   }
// }

// const maxNumber = getMaxValue(3, 7, 6);
// console.log(maxNumber);

// const a = 42;
// console.log(a);
// // 42
// function wrap(a) {
//   const b = a; // Без проблем, переменная a доступна в этой функции.
// }

// wrap(a);

// Пользователь вводит возраст. Напишите функцию,
//   которая проверяет, является ли введеное число
//   возврастом,и возвращает true,
//   если это правда, и false - если нет.
//   Критерии возраста:
//    - не пустая строка, пробел или null;
//    - целое число;
//    - больше 0
//   -->

// function isAge(age) {
//   if (typeof age !== "number") {
//     return false;
//   }
//   if (age % 1 !== 0) {
//     return false;
//   }
//   if (age < 0) {
//     return false;
//   }

//   return true;

//   // return Number.isInteger(age) && age >= 0;
// }
// console.log(isAge(""));
// console.log(isAge(3.4));
// console.log(isAge(-1));
// console.log(isAge(34));
// console.log(isAge(25));
// ______________________________________________________
// <!--    Индекс массы тела.
// Напишите функцию, которая получает в качестве аргументов
// рост в см и вес в кг, и возвращает медицинское заключение
// на основе высчитаного индекса массы тела.
// Индекс массы тела = вес в кг / рост в метрах в квадрате.
// Медицинское заключение на основе индекса массы тела:
// - от 10 до 15 - анорексия;
// - от 15 до 25 - норма;
// - от 25 до 30 - лишний вес;
// - от 30 до 35 - I степень ожирения;
// - от 35 до 40 - II степень ожирения;
// - от 40 и выще - III степень ожирения;
// Помните - функция должна выполнять одно осмысленное действие! -->

// const calcWeightIndex = (h, w) => Math.round(w / (h / 100) ** 2);

// function calcWeightIndex(h, w) {
//   return Math.round(w / (h / 100) ** 2);
// }
// function getWeightIndexDiagnosis(height, weight) {
//   const weightIndex = calcWeightIndex(height, weight);
//   if (weightIndex >= 10 && weightIndex < 15) {
//     return "anorex";
//   }
//   if (weightIndex >= 15 && weightIndex < 25) {
//     return "norm";
//   }
//   if (weightIndex >= 25 && weightIndex < 30) {
//     return "bad";
//   }
//   if (weightIndex >= 30 && weightIndex < 35) {
//     return "wery-bad";
//   }
// }

// console.log(getWeightIndexDiagnosis(175, 88));
// console.log(getWeightIndexDiagnosis(177, 60));
// console.log(getWeightIndexDiagnosis(190, 48));

// function slugify(title) {
// Change code below this line

// title = title.split(" ");
// title = title.join("-");
// title = title.toLowerCase();
// title = title.split(" ").join("-").toLowerCase();
// return title;
//   title = title.replaceAll(" ", "-").toLowerCase();
//   return title;

//   // Change code above this line
// }
// console.log(slugify("Arrays for begginers"));

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(nonExtremeEls);

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);

// function makeArray(firstArray, secondArray, maxLength) {
//   let copyMakeArray = firstArray.concat(secondArray);
//   if (copyMakeArray.length > maxLength) {
//     return copyMakeArray.splice(0, maxLength);
//   }
//   return copyMakeArray;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = number; i > 0; i -= 1) {
//     sum = sum + i;
//     // console.log(sum);
//   }
//   return sum;
// }

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i += 1) {
//     sum = sum + i;
//     // console.log(sum);
//   }
//   return sum;
// }

// console.log(calculateTotal(3));

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// console.log(fruits);

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let item of order) {
//     total += item;
//     console.log(total);
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function findLongestWord(string) {
//   let longestWord = "";
//   const arrayOfWords = string.split(" ");
//   // console.log(arrayOfWords);
//   for (element of arrayOfWords) {
//     if (longestWord.length < element.length) {
//       longestWord = element;
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));

// function filterArray(numbers, value) {
//   let newArray = [];
//   for (let i = numbers; i > value; i++) {
//     newArray.push(i);
//   }
//   return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function filterArray(numbers, value) {
//   let newArray = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//     // console.log(numbers[i]);
//   }
//   return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// const arr = [21, 43, 65, 78, 33];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   if (fruits.includes(fruit)) {
//     // console.log(true);
//     return true; // Change this line
//   }
//   // console.log(false);
//   return false;
// }

// console.log(checkFruit("plum"));

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit);
// }

// function getCommonElements(array1, array2) {
//   let newArray = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i]) && !newArray.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
// }

// console.log(
//   getCommonElements([10, 20, 30, 40, 10, 10, 10], [4, 30, 17, 10, 40])
// );

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const orders of order) {
//     total += orders;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// Change code above this line
// }

// function filterArray(numbers, value) {
//   let filteredNumbers = [];
//   for (const number of filteredNumbers) {
//     number = numbers[i];
//     filteredNumbers.push(number);
//   }
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function getEvenNumbers(start, end) {
//   let newArray = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }
//   }
//   return newArray;
// }
// console.log(getEvenNumbers(3, 11));

// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; (i = array.length); i++) {
//     if (item === value) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   // Change code above this line
// }

// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; (i = array.length); i++) {
//     if (array[i] === value) {
//       return true;
//       break;
//     }
//   }
//   return false;
// }

// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// );

// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; (i = array.length); i++) {
//     if (array[i] === value) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(includes([1, 2, 3, 4, 5], 17));

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// console.log(apartment);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
//   console.log(key);
//   console.log(apartment[key]);
// }

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   // Change code above this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 }));

function countProps(object) {
  // Change code below this line
  let propCount = 0;
  const keys = Object.keys(object);
  for (const key of keys) {
    propCount += 1;
  }
  return propCount;
  // Change code above this line
}

console.log(countProps({ name: "Mango", age: 2 }));
