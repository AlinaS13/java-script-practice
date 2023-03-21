// !-----------Завдфння 10 --- prompt--------------

// const userAnswer = Number(prompt('Введіть радіус круга'));
// const Pi = 3.1415926;

// const result = userAnswer ** 2 * Pi;
// console.log(result);

//! --------------Завдання 11 --- if-------

// const userAnswer = prompt("В якому році вийшов фільм Зоряні війни 4 ");

// if (userAnswer == 1977) {
//   alert("Вірно");
// }

// !-------------Завдання 12 ----- if ... else------

// const userAnswer = prompt("В якому році вийшов фільм Зоряні війни 4 ");

// if (userAnswer < 1977) {
//   alert("Заннадто рано");
// } else if (userAnswer > 1977) {
//   alert("Заннадто пізно");
// } else {
//   alert("Все вірно");
// }

// !--------------Завдання 13 тернарний оператор ? : -----------------

// const year = 1977;
// const result = year == 1977 ? "Все вірно" : "Невірно";
// console.log(result);

// !--------Завдання 14 if else if
// const sallaryPerDay = prompt("Введіть зарплату за день");
// const manth = prompt("Введіть місяць");
// let sallaryPerManth = 0;

// if (manth === "Січень") {
//   sallaryPerManth = 23 * sallaryPerDay;
// } else if (manth === "Лютий") {
//   sallaryPerManth = 20 * sallaryPerDay;
// } else if (manth === "Березень") {
//   sallaryPerManth = 27 * sallaryPerDay;
// }

// console.log(sallaryPerManth);

// !-------------------Завдання 15 switch-------------------------

// const sallaryPerDay = prompt("Введіть зарплату за день");
// const manth = prompt("Введіть місяць");
// let sallaryPerMonth = 0;

// switch (manth) {
//   case "Січень":
//     sallaryPerMonth = 23 * sallaryPerDay;
//     break;
//   case "Лютий":
//     sallaryPerMonth = 20 * sallaryPerDay;
//     break;
//   case "Березень":
//     sallaryPerMonth = 23 * sallaryPerDay;
//     break;
//   case "Квітень":
//     sallaryPerMonth = 22 * sallaryPerDay;
//     break;
//   case "Травень":
//     sallaryPerMonth = 23 * sallaryPerDay;
//     break;
//   case "Червень":
//     sallaryPerMonth = 22 * sallaryPerDay;
//     break;
//   case "Липень":
//     sallaryPerMonth = 23 * sallaryPerDay;
//     break;
//   case "Серпень":
//     sallaryPerMonth = 23 * sallaryPerDay;
//     break;
//   case "Вересень":
//     sallaryPerMonth = 22 * sallaryPerDay;
//     break;
//   case "Жовтень":
//     sallaryPerMonth = 23 * sallaryPerDay;
//     break;
//   case "Листопад":
//     sallaryPerMonth = 22 * sallaryPerDay;
//     break;
//   case "Грудень":
//     sallaryPerMonth = 23 * sallaryPerDay;
//     break;
//   default:
//     alert("Немає такого місяця");
// }
// console.log(sallaryPerMonth);

// !____________Альтернатива____________

// const sallaryPerDay = prompt("Введіть зарплату за день");
// const month = prompt("Введіть місяць");
// let sallaryPerMonth = 0;
// switch (month) {
//   case "Січень":
//   case "Березень":
//   case "Травень":
//   case "Липень":
//   case "Серпень":
//   case "Жовтень":
//   case "Грудень":
//     sallaryPerMonth = 23 * sallaryPerDay;
//     break;
//   case "Лютий":
//     sallaryPerMonth = 20 * sallaryPerDay;
//     break;
//   case "Квітень":
//   case "Червень":
//   case "Вересень":
//   case "Листопад":
//     sallaryPerMonth = 22 * sallaryPerDay;
//     break;
//   default:
//     alert("Немає такого місяця");
// }
// console.log(sallaryPerMonth);

//! ------------На практиці---------------

// За допомогою блоку if... else зробіть перевірку попереднього завдання.
//  Користувач може ввести дату раніше, пізніше, або точна дата.
//  Якщо користувач ввів дату раніше то вивести повідомлення “Це занадто рано”
//  Якщо пізніше “Час вже пройшов”
//  Якщо правильно то “Так все вірно!!!”

// const questionForUser = Number(
//   prompt("В якому році вийшов фільм Зоряні війни?")
// );
// if (questionForUser < 1977) {
//   alert("Це занадто рано!");
// } else if (questionForUser > 1977) {
//   alert("Час не прийшов!");
// } else {
//     alert("Так, усе вірно");
// }

// Перепишіть це завдання за допомогою тернарного оператору
// const year = propmt(“В якому році вийшов перший фільм Star Wars”);
// let message = “”
// if (year == 1977){
//  message = “Все вірно”
// }else{
//  message = “Невірно”
// }

// const year = 1977;
// const result = year == 1977 ? "Все вірно" : "Невірно";
// console.log(result);

// Уявимо собі що людина хоче порахувати свою зарплату за місяць перше що вона вводить зарплату за день, а 2 місяць за який вона хоче порахувати зарплату.
// Const sallaryPerDay = prompt(“Введіть зарплату за день”)
// const manth = prompt(“Введіть місяць”)
// let sallaryPerManth = 0

// const sallaryPerDay = prompt("Введіть зарплату за день");
// const manth = prompt("Введіть місяць");
// let sallaryPerMonth = 0;

// if (manth === "Січень") {
//   sallaryPerMonth = 23 * sallaryPerDay;
// } else if (manth === "Лютий") {
//   sallaryPerMonth = 20 * sallaryPerDay;
// } else if (manth === "Березень") {
//   sallaryPerMonth = 23 * sallaryPerDay;
// } else if (manth === "Квітень") {
//   sallaryPerMonth = 22 * sallaryPerDay;
// } else if (manth === "Травень") {
//   sallaryPerMonth = 23 * sallaryPerDay;
// } else if (manth === "Червень") {
//   sallaryPerMonth = 22 * sallaryPerDay;
// } else if (manth === "Липень") {
//   sallaryPerMonth = 23 * sallaryPerDay;
// } else if (manth === "Серпень") {
//   sallaryPerMonth = 23 * sallaryPerDay;
// } else if (manth === "Вересень") {
//   sallaryPerMonth = 22 * sallaryPerDay;
// } else if (manth === "Жовтень") {
//   sallaryPerMonth = 23 * sallaryPerDay;
// } else if (manth === "Листопад") {
//   sallaryPerMonth = 22 * sallaryPerDay;
// } else if (manth === "Грудень") {
//   sallaryPerMonth = 23 * sallaryPerDay;
// }

// console.log(sallaryPerManth);

// switch (month) {
//   case "Січень":
//     sallaryPerMonth = 23 * sallaryPerDay;
//     break;
//   case "Лютий":
//     sallaryPerMonth = 20 * sallaryPerDay;
//     break;
//   case "Березень":
//     sallaryPerMonth = 23 * sallaryPerDay;
//     break;
//   case "Квітень":
//     sallaryPerMonth = 22 * sallaryPerDay;
//     break;
//   case "Травень":
//     sallaryPerMonth = 23 * sallaryPerDay;
//     break;
//   case "Червень":
//     sallaryPerMonth = 22 * sallaryPerDay;
//     break;
//   case "Липень":
//     sallaryPerMonth = 23 * sallaryPerDay;
//     break;
//   case "Серпень":
//     sallaryPerMonth = 23 * sallaryPerDay;
//     break;
//   case "Вересень":
//     sallaryPerMonth = 22 * sallaryPerDay;
//     break;
//   case "Жовтень":
//     sallaryPerMonth = 23 * sallaryPerDay;
//     break;
//   case "Листопад":
//     sallaryPerMonth = 22 * sallaryPerDay;
//     break;
//   case "Грудень":
//     sallaryPerMonth = 23 * sallaryPerDay;
//     break;
//   default:
//     alert("Немає такого місяця");
// }
// console.log(sallaryPerMonth);

// const sallaryPerDay = prompt("Введіть зарплату за день");
// const month = prompt("Введіть місяць");
// let sallaryPerMonth = 0;
// switch (month) {
//   case "Січень":
//   case "Березень":
//   case "Травень":
//   case "Липень":
//   case "Серпень":
//   case "Жовтень":
//   case "Грудень":
//     sallaryPerMonth = 23 * sallaryPerDay;
//     break;
//   case "Лютий":
//     sallaryPerMonth = 20 * sallaryPerDay;
//     break;
//   case "Квітень":
//   case "Червень":
//   case "Вересень":
//   case "Листопад":
//     sallaryPerMonth = 22 * sallaryPerDay;
//     break;
//   default:
//     alert("Немає такого місяця");
// }
// console.log(sallaryPerMonth);

//   ----------Домашка --------

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = (subType = "pro" || "vip"); // Change this line

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent);

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic;
// const firstElement = courseTopic;
// const lastElement = courseTopic;

// console.log(courseTopic["JavaScript essentials"]);
// console.log(courseTopicLength[21]);
// console.log(firstElement["J"]);
// console.log(lastElement["s"]);

// function getSubstring(string, length) {
//   const substring = "Hello world"; // Change this line

//   return substring;
// }
// console.log(substring.slice(getSubstring.slice, 3));
// console.log(substring.slice(getSubstring.slice, 6));
// console.log(substring.slice(getSubstring.slice, 8));
// console.log(substring.slice(getSubstring.slice, 11));

// function getSubstring(string, length) {
//   const substring = string.slice(string, length); // Change this line

//   return substring;

// const myDream = {
//   travet: "Bali",
//   phone: "Iphone",
//   mony: 1000,
//   gold: 585,
// };

// console.log(myDream);

// console.log("Hello");
// alert("Hello");

// const answer = confirm("Is your js?");
// console.log(answer);

// const userName = prompt("Sum text");
// console.log(userName);
// console.log(typeof userName);

// ----------------Проби--------------
// Переприсвоєння значення let

// Варіант 1

// let value = 5;
// value = value + 10;
// console.log(value);
// value = value + 10;
// console.log(value);

// Варіант 2

// value += 10;
// console.log(value);
// value += 10;
// console.log(value);

// ------------------------------------

// const w = 0.2;

// const z = 0.6;

// const y = w + z;

// console.log(y.toFixed(5));

// const str1 = "qwerHHHHty qveHHrty qwekjJJJrty";

// console.log(str1.toLowerCase());

// const str1 = "Console Java scrypt";

// console.log(str1.slice());

// __________Цикли________________

// -------------while--------
// let counter = 1;
// while (counter <= 5) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// console.log("next");

//------------do....while-------------
// let number;
// do {
//   console.log("here");
//   number = prompt("Input number");
// } while (number <= 100);

// console.log(number);

//--------------for-------------------

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

const friends = ["mango", "kiwi", "banana"];
// console.table(friends);

const lastIndex = friends.length - 1;
console.log(lastIndex);
