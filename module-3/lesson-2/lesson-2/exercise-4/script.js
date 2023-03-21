// ## Завдання 4

// Напишіть функцію `getAvarageScore`, яка отримує довільну кількість оцінок як аргументи функції так повертаю середню оцінку:

// function getAvarageScore(...scores) {
//   let scoreSum = 0;
//   for (const score of scores) {
//     scoreSum += score;
//   }
//   const avarageScore = Math.round(scoreSum / scores.length);
//   return avarageScore;
// }

// console.log(getAvarageScore(8, 9, 10));
// console.log(getAvarageScore(6, 8, 12, 10, 12));

//*____________________________________________
// Об'єднайте об 'єкти' user, additionalInfo та scores в один об'єкт anketa та виведіть його у консоль: `

// const user = { name: "Влада", lastName: "Любит корги" };

// const additionalInfo = { age: 22, favoriteBook: "Источник" };
// const scores = { history: 12, biology: 8, english: 32 };
// const anketa = { ...user, ...additionalInfo, ...scores };

// console.log(anketa);

// Спитайте у користувая ПІБ (призвище, ім'я, по-батькові), і розділіть цю строку потім на 3 зміних: userLastName, userName та userMiddleName, використовуючи оператор spread.

// const userFIO = prompt("What is yor name?");
// const FIOArray = userFIO.split(" ");

// const [userLastName, userName, userMiddleName] = FIOArray;
// console.log(FIOArray);
// ?__________________________________________________;

// const user = {
//   name: "Тайвин",
//   lastName: "Ланнистер",
//   status: "глава дома Ланнистеров",
//   castle: "Утес Кастерли",
//   words: "Услышь мой рёв!",
//   sword: "Светлый рёв",
//   vasalls: ["Рейны", "Веларионы"],
// };
// const { name, lastName, marriage = false } = user;
// // console.log(marriage);
// console.log(user);

// Нам треба створити окремий масив (houseNames) в якому будуть збережені назви всіх великих домів Вестеросу, та окремий масив (housesCastles) в який будуть збережені назви замків Великих домів Вестеросу.

// const houses = [
//   { name: "Ланістер", castle: "Утес Кастерлі", words: "Почуй мій рев" },
//   { name: "Старки", castle: "Вінтерфел", words: "Зима поряд" },
//   { name: "Грейджої", castle: "Пайк", words: "Ми не сіємо" },
// ];

// const housesNames = [];
// const housesCastels = [];

// for (const house of houses) {
//   housesNames.push(house.name);
//   housesCastels.push(house.castel);
// }

// console.log(housesNames);
// console.log(housesCastels);

// const houses = [
//   { name: "Ланістер", castle: "Утес Кастерлі", words: "Почуй мій рев" },
//   { name: "Старки", castle: "Вінтерфел", words: "Зима поряд" },
//   { name: "Грейджої", castle: "Пайк", words: "Ми не сіємо" },
// ];

// const housesNames = [];
// const housesCastels = [];

// _______________________________

// for (const house of houses) {
//   housesNames.push(house.name);
//   housesCastels.push(house.castle);
// }

// console.log(housesNames);
// console.log(housesCastels);

// _________________________________________

// for (const house of houses) {
//   const { name, castle } = house;
//   housesNames.push(name);
//   housesCastels.push(castle);
// }

// console.log(housesNames);
// console.log(housesCastels);

// ________________________________________

// for (const { name, castle } of houses) {
//   housesNames.push(name);
//   housesCastels.push(castle);
// }
// console.log(housesNames);
// console.log(housesCastels);

// const jsFileName = " 22     scripdd  ddt.js hgjgjdd   rr.js    ";
// console.log(jsFileName.trim());

// let newArray = [];
// for (let i = 0; i < 100; i++) {
//   newArray[i] = i + 1;
// }
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   // console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// ________________app________________________________
// let herosGameOfTrones = [];

// function displayHero() {
//   return herosGameOfTrones;
// }

// function addHero(hero) {
//   herosGameOfTrones.push(hero);
// }

// function killHero(hero) {
//   for (let i = 0; i < herosGameOfTrones.length; i++) {
//     if (hero === herosGameOfTrones[i]) {
//       herosGameOfTrones.splice(i, 1);
//     }
//   }
// }

// addHero("Jon Snow");
// addHero("Eddard Stark");

// addHero("Eddard Stark");

// // killHero("Eddard Stark");
// addHero("Serseya Lanister");
// console.log(displayHero());

//________________________________________

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(values);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   return totalSalary;
// }

// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// let newC = 1;

// while (newC < 10) {
//   console.log(newC);
//   newC++;
// }

// do {
//   newC = confirm("Hello");
// } while (newC <= 1);

// let num = 22;

// for (let i = 0; i <= num; i += 1) {
//   console.log(i);
// }
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const propName = "name";
// const user = {
//   age: 25,
// };

// console.log(user.name);
// user[propName] = "Генрі Сибола";
// console.log(user);

// const propName = "name";
// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взяте зі значення змінної propName
//   [propName]: "Генрі Сибола",
// };

// console.log(user);

// Візміть об'єкт `user`, створіть зміні `name` та `lastName` з відповідних властивостей
// об'єкту, а всі інші властивості збережіть у зміну `additionalInfo`

// const user = {
//   name: "Тайвин",
//   lastName: "Ланнистер",
//   status: "глава дома Ланнистеров",
//   castle: "Утес Кастерли",
//   words: "Услышь мой рёв!",
//   sword: "Светлый рёв",
//   vasalls: ["Рейны", "Веларионы"],
//   marriage: true,
// };

// const { name, lastName, ...additionalInfo } = user;
// console.log(user);
// console.log(additionalInfo);
// const user2 = { ...user };

// console.log(user2);

// Візміть об'єкт `user`, та створіть окрему зміну `daughter`, куди збережіть значеня із `user.children.daughter`. Використайте для цього вкладену деструктуризацію.

// const user = {
//   name: "Тайвин",
//   lastName: "Ланнистер",
//   status: "глава дома Ланнистеров",
//   castle: "Утес Кастерли",
//   words: "Услышь мой рёв!",
//   sword: "Светлый рёв",
//   vasalls: ["Рейны", "Веларионы"],
//   children: {
//     main: "Джейме",
//     daughter: "Серсея",
//     son: "Тирион",
//   },
// };

// // const {
// //   children: { daughter },
// // } = user;
// // // console.log(daughter);

// // console.log(user);

// console.log(daughter);

// Напишіть функцію `getBasicInfo`, яка отримує об'єкт типу `product` та повертає основну
// інформацію про товар:
// - name;
// - перший елемент масиву img;
// - price;

// у вигляді об'єкту. Зробіть так, щоб функція приймала лише ті властивості об'єкту product, які їй потрібні для виконаня завданя.

// const product = {
//   name: "iphone X",
//   img: ["./i.jpg", "./2.jpg", "./3.jpg"],
//   price: 14500,
//   article: 23324,
//   reviews: [
//     {
//       name: "Александра",
//       date: "12-03-2020",
//       text: "Работает как часы",
//     },
//   ],
//   techSpec: [
//     {
//       name: "Процессор",
//       value: "M1",
//     },
//   ],
// };

// function getBasicInfo({ name, img, price }) {
//   const basicInfo = {
//     name,
//     img: img[0],
//     price,
//   };
//   return basicInfo;
// }
// const myFunc = getBasicInfo(product);

// console.log(getBasicInfo(product));

// Напишіть функцію `getMinPrice`, яка отримує масив об'єктів та повертає найнижчу ціну.
// У функції використайте деструктуризацію об'єкту там метод `Math.min
// const products = [
//   {
//     name: "Acer Swift 3",
//     price: 18000,
//   },
//   {
//     name: "Lenovo X120S",
//     price: 12000,
//   },
//   {
//     name: "Huawei MateBook D",
//     price: 23000,
//   },
// ];

// function getMinPrice(products) {
//   const allPraces = [];
//   const allNames = [];
//   for (const { price, name } of products) {
//     allPraces.push(price);
//     allNames.push(name);
//   }
//   const minPrice = Math.min(...allPraces);
//   const index = allPraces.indexOf(minPrice);
//   const nameMinPrice = allNames[index];
//   return `${nameMinPrice} - ${minPrice} grn`;
// }

// const productsMinPrice = getMinPrice(products);

// console.log(productsMinPrice);

// function getMinPrice(products) {
//   const finalPrace = [];
//   for (const { price } of products) {
//     finalPrace.push(price);
//   }
//   const minPrice = Math.min(...finalPrace);
//   return minPrice;
// }

// const productsMinPrice = getMinPrice(products);

// console.log(productsMinPrice);

// const newArray = [1, 2, "c", "d", "f"];
// const secondArray = [];
// function addSumElem() {
//   for (const elem of newArray) {
//     secondArray.push(elem);
//     return secondArray;
//   }
// }
// const a = newArray;

// console.log(a);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

// const values = Object.values(salaries);
//   // console.log(values);
//   // for (const sum of values) {
//   //   totalSalary += sum;
//   // }

//   for (const key in salaries) {
//     totalSalary += salaries[key];
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

//_______________________________________________________________________________________

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const value of colors) {
//   hexColors.push(value.hex);
//   rgbColors.push(value.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

//____________________________________________________________

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

//   for (const object of products) {
//     if (productName === object.name) {
//       return object.price;
//     }
//   }
//   return null;
// }
// const a = getProductPrice("Grip");
// console.log(a);

//*____________________________________________________________

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const result = [];
//   for (const array of products) {
//     if (array.hasOwnProperty(propName)) {
//       result.push(array[propName]);
//     }
//   }
//   return result;
// }

// console.log(getAllPropValues("price"));

//!________________________________________________________________

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const object of products) {
//     if (productName === object.name) {
//       return object.price;
//     }
//   }
//   return null;
// }
// const a = getProductPrice("Grip");
// console.log(a);

//?_______________________________________________________

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   for (const object of products) {
//     if (productName === object.name) {
//       return object.price * object.quantity;
//     }
//   }
//   return 0;
// }

// const a = calculateTotalPrice("Grip");
// console.log(a);

//?________________________________________________

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const { hex, fgb } of colors) {
//   hexColors.push(hex);
//   // rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

//?_________________________________________

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// console.log(highToday);

//?__________________________________

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const newObject = [];

//   // Change code above this line
// }

//**_____________________________________

// Change code below this line
// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }

// console.log(add(74, 11, 62, 46, 12, 36));

// function makeTask(data) {
//   const newObject = { ...data };
//   const {
//     priority = "Normal",
//     category = "General",
//     completed = false,
//     text,
//   } = newObject;

//   newObject.priority = priority;
//   newObject.category = category;
//   newObject.completed = completed;
//   return newObject;
// }

// console.log(makeTask({ text: "Buy bread" }));

//todo____________________________________________________
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   defaultData = { completed, category, priority };
//   console.log(defaultData);
//   return { ...defaultData, ...data };
//   // Change code above this line
// }

// makeTask({});

//*!__________________________________
// function addNumb(arg1, arg2) {
//   if (arg1 || arg2 === Number) {
//     arg1 + arg2;
//   }
//   return "It`s not a number";
// }

// addNumb();

// console.log(addNumb(2, 2));

//?____________________________________________

// function findMatches(array, ...args) {
//   const matches = [];
//   for (const arg of args) {
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//   }

//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

//!___________________________________________

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     let index = -1;
//     for (let i = 0; i < this.potions.length; i++) {
//       const elem = this.potions[i];
//       if (elem.name === newPotion.name) {
//         index = i;
//         break;
//       }
//     }
//     if (index !== -1) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     return this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     let index = -1;
//     for (let i = 0; i < this.potions.length; i++) {
//       const elem = this.potions[i];
//       if (elem.name === potionName) {
//         index = i;
//         break;
//       }
//     }

//     if (index === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }
//     return this.potions.splice(index, 1);
//   },

//   updatePotionName(oldName, newName) {
//     let index = -1;
//     for (let i = 0; i < this.potions.length; i++) {
//       const elem = this.potions[i];
//       if (elem.name === oldName) {
//         index = i;
//         break;
//       }
//     }

//     if (index === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
//     return this.potions.splice(potionIndex, 1, newName);
//   },
// };

// {
//   const potionIndex = this.potions.indexOf(oldName);

//   if (potionIndex === -1) {
//     return `Potion ${oldName} is not in inventory!`;
//   }

//   this.potions.splice(potionIndex, 1, newName);
//   },
// Change code above this line

//!_____________________________________________

// const myArray = [1, 2, 3, 4, 5, 6];
// let total = 0;
// for (let i = 0; i < myArray.length; i++) {
//   total += myArray[i];
// }
// console.log(total);

// let total = 0;
// for (const elem of myArray) {
//   total += elem;
// }

// console.log(total);

// const myArray = [1, 255, 3, 45, 5, 16];

// for (let i = 0; i < myArray.length; i++) {
//   myArray[i] += Math.round(myArray[i] * 1.1);
// }

// console.log(myArray);

//?________________________________

// const myArray = [1, 2, 6, 4, 255, 3, 45, 5, 16, 4, 6];

// let num = [];

// for (const elem of myArray) {
//   if (elem % 2 !== 0) {
//     num.push(elem);
//   }
// }

// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] % 2 === 0) {
//     num.push(myArray[i]);
//   }
// }

// console.log(num);

//!________________________________

// const logins = ["fantastic", "action", "blabla", "blabla", "policy"];
// const loginToFind = "policy";
// let message = "";

// for (let i = 0; i < logins.length; i++) {
//   const login = logins[i];

//   if (loginToFind === logins[i]) {
//     message = `Користувач ${loginToFind} є у базі`;
//     break;
//   }
//   message = `Користувач ${loginToFind} відсутній`;
// }

// console.log(message);

// for (const login of logins) {
//   if (loginToFind === login) {
//     message = `Користувач ${loginToFind} є у базі`;
//     break;
//   }
//   message = `Користувач ${loginToFind} відсутній`;
// }
// console.log(message);

// console.log(logins.includes(loginToFind));

// const message = logins.includes(loginToFind)
//   ? `Користувач ${loginToFind} є у базі`
//   : `Користувач ${loginToFind} відсутній`;

// console.log(message);

//todo__________________________________

// const numbers = [1, 2, 6, 4, 255, 3, 45, 5, 16, 4, 6];

// let smallNum = numbers[0];

// for (const number of numbers) {
//   if (number > smallNum) {
//     smallNum = number;
//   }
// }

// console.log(smallNum);

//*_______________________________________

// const values = ["fantastic", "action", "blabla", "blabla", "policy"];

// const newString = values.join(", ");

// console.log(newString);

//!___________________________________________

// const string = "JavaScript";

// let newString = "";

// for (const elem of string) {
//   if (elem === elem.toUpperCase()) {
//     newString += elem.toLowerCase();
//   } else {
//     newString += elem.toUpperCase();
//   }
// }
// console.log(newString);

// ?__________________________________________

// const numbers = [1, 2, 6, 4, 255, 3, 45, 5, 16, 4, 6];

// function maxNumber(numbers) {
//   let max = [0];

//   for (let number of numbers) {
//     if (max < number) {
//       max = number;
//     }
//   }
//   return max;
// }
// console.log(maxNumber(numbers));

//todo___________________________________

// const add = function (a, b) {
//   return a + b;
// };

// const d = add(2, 5);
// console.log(d);

//*______________________________________

// const calculetTotal = function (items) {
//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };

// console.log(calculetTotal([5, 5, 5, 5, 10]));

//?___________________________________________________

// const logins = function (values) {
//   for (const value of values) {
//     if (value === "action") {
//       return "action";
//     }
//   }
//   return "User is not fined";
// };

// console.log(logins(["fantastic", "action", "blabla", "blabla", "policy"]));

//*_______________________________________________________

// const logins = ["fantastic", "action", "blabla", "bla", "policy"];

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `User ${loginToFind} to fined`;
//     }
//   }
//   return `User ${loginToFind} is not fined`;

//   return allLogins.includes(loginToFind)
// ? `User ${loginToFind} to fined`
//     : `User ${loginToFind} to fined`;
// };

// console.log(findLogin(logins, "fantastic"));
// console.log(findLogin(logins, "actionff"));
// console.log(findLogin(logins, "blabla"));
// console.log(findLogin(logins, "policyff"));

//!_________________________________________________________

// function changeValue(...args) {
//   const newArray = [];

//   for (const arg of args) {
//     if (typeof arg === "number") {
//       newArray.push(String(arg));
//     } else {
//       newArray.push(Number(arg));
//     }
//   }
//   return newArray;
// }

// console.log(changeValue(1, "2", 6, "4", 255, "3"));

//?_________________________________________________________

// function flatArray(array) {
//   let newArray = [];
//   for (const elem of array) {
//     if (Array.isArray(elem)) {
//       for (const item of elem) {
//         newArray.push(item);
//       }
//     } else {
//       newArray.push(elem);
//     }
//   }
//   return newArray;
// }
//*_____________________________________________
// function flatArray(array) {
//   let newArray = [];
//   for (const elem of array) {
//     if (Array.isArray(elem)) {
//       newArray.concat(array);
//     }
//     return newArray;
//   }
// }

// console.log(flatArray(["a", 5, ["r", 3], [1, 3], 7, 9]));

//!_______________________________________

// const inputName = "color";
// const inputValue = "tomato";

// const colorVal = {
//   [inputName]: inputValue,
// };

// console.log(colorVal);

//?______________________________________

// const playlist = {
//   name: "My super list",
//   rating: 5,
//   traks: ["love", "hit", "global"],
//   trakCount: 3,
//   changeName(newName) {
//     //це метод обєкта
//   },
//   addTrak(trak) {
//     this.traks.push(trak);
//     this.trakCount = this.traks.length;
//     //це метод обєкта
//   },
// };

// playlist.changeName("New name");

// playlist.addTrak("New song");

// console.log(playlist);

//!___________Масив__обєктів__________

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kivi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// for (const friend of friends) {
//   console.log(friend);

//   friend.newProp = 123;
//   console.log(friends);
// }
// console.log(friends);

//*____________________________________
// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`);

//?_____________________________________

// const a = ["a", "b", "c"];
// const b = [1, 2, 3];
// const c = [[1, 3], 1234, "qwerty"];

// const d = [...a, ...b, ...c];

// console.log(d);

//!___щоб повністю розпиляти масив с__-використовуємо:c.flat()__________
// const a = ["a", "b", "c"];
// const b = [1, 2, 3];
// const c = [[1, 3], 1234, "qwerty"];

// const d = [...a, ...b, ...c.flat()];

// console.log(d);

//?___________________________________________________________

// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// // Передаємо інлайн функцію greet у якості колбека
// registerGuest("Манго", function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// // Передаємо інлайн функцію notify у якості колбека
// registerGuest("Полі", function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

//todo________________________________________________
// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Манго");

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// // processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаємо printValue як callback-функцію
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаємо prettyPrint як callback-функцію
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// // }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = null;
// const pointer = null;

// console.log(makePizza());

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName) {},
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, makePizza, onOrderError) {
//     function makePizza(pizzaName) {
//       if (pizzaName === pizzas[""]) {
//         return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//       }
//     }

//     function onOrderError(error) {
//       if (pizzaName !== pizzas[""]) {
//         return `Error! ${error}`;
//       }
//     }
//   },
// };

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, makePizza, onOrderError) {
//     function makePizza(pizzaName) {
//       if (pizzaName === pizzas[""]) {
//         return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//       }
//     }

//     function onOrderError(error) {
//       if (pizzaName !== pizzas[""]) {
//         return `Error! ${error}`;
//       }
//     }
//   },
// };

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     function makePizza(pizzaName) {
//       if (this.pizzas.includes(pizzaName)) {
//         return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//       }
//     }

//     // Callback for onError
//     function onOrderError(error) {
//       if (pizzaName !== this.pizzas.includes(pizzaName))
//         return `Error! ${error}`;
//     }
//   },
// };
// Change code above this line

// Callback for onSuccess

// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

//*___________________________________________________________
//! Приклад чистої і не чистої функції _______________
// const generateID = () => Math.floor(Math.random() * 10000);
// console.log(generateID())
// console.log(generateID())
// console.log(generateID())

//! Приклад чистої і не чистої функції _______________
// const add = (x, y) => x + y;
// console.log(add(2, 4));
// console.log(add(2, 4));
// console.log(add(2, 4));

9;
// Наприклад у нас був масив зарплат у гривні, а нам потрібен масив зарплат у доларах. Відповідно, що його отримати ми повині поділити кожний єлемент першого масиву на 37 – тобто виконати з кожним єлементом одну і ту ж дію. В якості аргументу метод map приємає callback-функцію, яка виконується для кожного єлементу масиву. Першим аргументом в цю функцію завжди потрапляє єлемент масива, а сама функція повертає транформований єлемент масиву, який потрапить у новий масив:
// 14:49
// const sallariesInUah = [15000, 27000, 45000];

// const newSal = sallariesInUah.map((number) => (number / 37).toFixed(2));

// console.log(newSal);
//_______________________________________

// У цьому прикладі ми передаємо у метод map функцію, яка знаходить у кожного товару значеня властивості price та повертає його – таким чином у масиві productsPrice у нас будуть усі ціни на товари, і все.
// const products = [
//   {
//     name: "Lenovo X120S",
//     price: 27500,
//   },
//   {
//     name: "iPhone 14",
//     price: 52000,
//   },
//   {
//     name: "GeFrce 4900",
//     price: 98200,
//   },
// ];

// const prod = products.map((product) => product.price);

// console.log(prod);

//_________________________________________

// I want my own implementation of the array's `map`
// I want it to work exactly the same but be named `map2`

// let foo = [1, 2, 3];
// const result = foo.map((item) => item * 2);
// console.log("Results of map2:", result);

// _________________________________________

// Перебрать массив и вывести в 1 массив положительные числа в другой
// отрицательные
// const array = [1, -2, 3, 1, 0, 4, 7, -5, -1];

// const positive = array.filter((item) => item >= 0);

// console.log(positive);

//___________________________
// Наприклад нам треба отримати зі списку курсів всі курси англійскої мови. Тому ми перебираємо масив об’єктів и порівнюємо властвість lang

// const courses = [
//   {
//     lang: "english",
//     grade: "1C",
//   },
//   {
//     lang: "english",
//     grade: "1B",
//   },
//   {
//     lang: "spanish",
//     grade: "1C",
//   },
//   {
//     lang: "france",
//     grade: "1B",
//   },
// ];

// const angel = courses.filter((item) => item.lang === "english");

// console.log(angel);

//_______________________________________

// У вас є масив зарплат `products`. Створіть масив `cheapProducts`, в який будуть входити усі товари, ціна яких нижче за 20000.

// const products = [
//   {
//     name: "lenovo X120S",
//     price: 17800,
//     quantity: 2,
//   },
//   {
//     name: "Playstation 5 Slim",
//     price: 24000,
//     quantity: 3,
//   },
//   {
//     name: "Darkside Genesis",
//     price: 1200,
//     quantity: 1,
//   },
// ];

// ?const cheapProducts = products.filter((item) => item.price < 20000);

// //! const cheapProducts = products.filter(({ price }) => price < 20000);

// console.log(cheapProducts);

//__________________________________________

// Найти сумму элементов массива

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 3, 4];
// const sum = array.reduce(
//   (previusValue, curentValue) => previusValue + curentValue,
//   0
// );

// console.log(sum);

//_______________________________________________

// todo_____приймаючи чотири аргументи: початкове значення (або значення попереднього виклику callback ), значення поточного елемента, поточний індекс і масив, по якому відбувається ітерація.

// Найти максимальный или минимальный элемент массива
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 3, 4];

// const min = array.reduce((acc, next) => Math.min(acc, next), array[0]);

// const min = array.reduce(() => Math.min(...array));

// console.log(min);

// const max = array.reduce((acc, next) => Math.max(acc, next), array[0]);
// console.log(max);

//___________________________________

// const products = [
//   {
//     name: "Lenovo X120S",
//     price: 27500,
//     quantity: 3,
//   },
//   {
//     name: "iPhone 14",
//     price: 52000,
//     quantity: 5,
//   },
//   {
//     name: "GeFrce 4900",
//     price: 98200,
//     quantity: 2,
//   },
// ];

// const quint = products.reduce((acc, product) => acc + product.quantity, 0);

// console.log(quint);

//________________________________

// Перед вами масив об'єктів. Кожен об'єкт – це товар у кошику. Кожен товар має властивість
// `price` - вартість за одиницю товару, та `quantity` - кількість цього товару.
// Порахуйте вартість всіх товарів, що зберігаються в масиві товарів, і виведіть її в консоль.

// const cart = [
//   {
//     name: "lenovo X120S",
//     price: 17800,
//     quantity: 2,
//   },
//   {
//     name: "Playstation 5 Slim",
//     price: 24000,
//     quantity: 3,
//   },
//   {
//     name: "Darkside Genesis",
//     price: 1200,
//     quantity: 1,
//   },
// ];

// const totalPrice = cart.reduce((acc, { price, quantity }) => acc + price * quantity,0);

// console.log(totalPrice);

//todo__________задача_____співбесіда______________
// Перед вами масив об'єктів. Кожен об'єкт – це співробітник у компанії. Кожен об'єкт має властивість
// `sallary` - його зарплата на місяць, та `department` - відділ, в якому він працює.
// Знайдіть та виведіть у консоль назву відділу з найбільшою середньою зарплатою.

// const employees = [
//   {
//     name: "Андрей",
//     sallary: 22000,
//     department: "sale",
//   },
//   {
//     name: "Святослав",
//     sallary: 33000,
//     department: "lawyer",
//   },
//   {
//     name: "Мария",
//     sallary: 44000,
//     department: "IT",
//   },
//   {
//     name: "Иван",
//     sallary: 55000,
//     department: "IT",
//   },
//   {
//     name: "Юрий",
//     sallary: 28000,
//     department: "lawyer",
//   },
//   {
//     name: "Алина",
//     sallary: 78000,
//     department: "sale",
//   },
//   {
//     name: "Алекс",
//     sallary: 105000,
//     department: "IT",
//   },
// ];

// const departmentsSal = employees.reduce((acc, { sallary, department }) => {
//   const departmentObj = acc.find((item) => item.name == department);
//   if (!departmentObj) {
//     const newDepartment = {
//       name: department,
//       sallaries: [sallary],
//     };
//     return [...acc, newDepartment];
//   }
//   departmentObj.sallaries.push(sallary);
//   return acc;
// }, []);

// // console.log(departmentsSal);

// const departmentList = departmentsSal.map(({ name, sallaries }) => {
//   const sellatiesSum = sallaries.reduce((total, item) => total + item, 0);
//   const avarageSallary = sellatiesSum / sallaries.length;

//   return { name, avarageSallary };
// });

// // console.log(departmentList);

// const richesDepart = departmentList.reduce((acc, { name, avarageSallary }) => {
//   if (avarageSallary > acc.avarageSallary) {
//     return avarageSallary;
//   }
//   return acc;
// }, departmentList[0]);

// console.log(richesDepart);

//?____________________________________________

// const departmentsAvarageSallaries = employees.reduce(
//   (acum, { department, sallary }) => {
//     const departmentObj = acum.find((item) => item.name === department);
//     if (!departmentObj) {
//       const newDepartment = {
//         name: department,
//         avarageSallary: sallary,
//       };
//       return [...acum, newDepartment];
//     }
//     const { avarageSallary } = departmentObj;
//     departmentObj.avarageSallary = (avarageSallary + sallary) / 2;

//     return acum;
//   },
//   []
// );

// const richestDepartment = departmentsAvarageSallaries.reduce((acum, item) => {
//   if (item.avarageSallary > acum.avarageSallary) {
//     return item;
//   }
//   return acum;
// }, departmentsAvarageSallaries[0]);

// console.log(richestDepartment);

//____________________________________

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// // const getUserNames = users.map((users) => users.name);
// // const getUserNames = (users) => users.map(({ name }) => name);

// const getUserEmails = (users) => users.map(({ email }) => email);

// console.log(getUserEmails);

// const prod = products.map((product) => product.price);

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genres, index) => allGenres.indexOf(genres) === index
// );

// console.log(allGenres);
// console.log(uniqueGenres);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getUsersWithEyeColor = users.filter((users, color) => {
//   if (eyeColor === color) {
//     return color;
//   }
// });

// const getUsersWithEyeColor = (users, color) =>
//   users
//     .filter((user) => user.eyeColor === color)
//     .map((user) => ({ eyeColor: user.eyeColor }));

// const getUsersWithFriend = (users, friendName) =>
//   users.filter((user) => user.friendName === "friends");

// console.log(getUsersWithFriend);

// const getFriends = (users) =>
//   users.filter((user, index, friends) => friends.indexOf(user) === index);

// const getFriends = (users) =>
//   users.filter((friend, index, array) => array.indexOf(friend) === index);

// const getUserWithEmail = (users, email) =>
//   users.find(({ email }) => email === user);

// console.log(getUserWithEmail);

// const allFriends =

// const getFriends = (user) =>
//   users
//     .filter((friend, index, allFriends) => allFriends.indexOf(friend) === index)
//     .flatMap((user) => user.friends);

// const getFriends = (user) =>
//   users
//     .flatMap((user) => user.friends)
//     .filter(
//       (friend, index, allFriends) => allFriends.indexOf(friend) === index
//     );

// console.log(getFriends());

// const getFriends = users.flatMap((user) => user.friends);

// console.log(getFriends);

// const isEveryUserActive = (users) =>
//   users.every((isActive) => isActive === users);

// console.log(isEveryUserActive());

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce(
//   (acc, averagePlayTime) => averagePlayTime * playtimes.length,
//   0
// );

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);

// const players = [
//   {
//     name: "Mango",
//     playtime: 1270,
//     gamesPlayed: 4,
//   },
//   {
//     name: "Poly",
//     playtime: 469,
//     gamesPlayed: 2,
//   },
//   {
//     name: "Ajax",
//     playtime: 690,
//     gamesPlayed: 3,
//   },
//   {
//     name: "Kiwi",
//     playtime: 241,
//     gamesPlayed: 1,
//   },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
//   (acc, player) => acc + player.playtime / player.gamesPlayed,
//   0
// );

// // const quint = products.reduce((acc, product) => acc + product.quantity, 0);

// console.log(totalAveragePlaytimePerGame);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getTotalFriendCount = (users) =>
//   users.reduce((acc, user) => acc + user.friends.length, 0);

// console.log(getTotalFriendCount(users));

// const calculateTotalBalance = (users) =>
//   users.reduce((acc, user) => acc + user.balance, 0);

// console.log(calculateTotalBalance(users));

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a < b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b > a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// console.log(releaseDates);

// const books = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const sortByName = (users) =>
//   [...users].sort((firstName, secondName) =>
//     firstName.name.localeCompare(secondName.name)
//   );

// console.log(sortByName);

// Change code below this line
// const sortedByAuthorName = [...books].sort((firstAutorName, secondAutorName) =>
//   firstAutorName.author.localeCompare(secondAutorName.author)
// );

// const sortedByReversedAuthorName = [...books].sort(
//   (firstAutorName, secondAutorName) =>
//     secondAutorName.author.localeCompare(firstAutorName.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (firstRating, secondRating) => secondRating.rating - firstRating.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (firstRating, secondRating) => firstRating.rating - secondRating.rating
// );
// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// console.log(inAscendingScoreOrder);
// console.log(inDescendingScoreOrder);
// console.log(inAlphabeticalOrder);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter((book) => book.rating >= MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort();

// console.log(names(books));

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// // const getNamesSortedByFriendCount = (users) =>
// //   [...users]
// //     .sort((a, b) => a.friends.length - b.friends.length)
// //     .map(({ name }) => name);

// // console.log(getNamesSortedByFriendCount(users));

// const getSortedFriends = (users) =>
//   users
//     .flatMap((users) => users.friends)
//     .filter((friend, index, friends) => friends.indexOf(friend) === index);

// //  .sort((firstName, secondName) =>
// //       firstName.name.localeCompare(secondName.name)
// //     )
// console.log(getSortedFriends(users));

// const names = books
//   .filter((book) => book.rating >= MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort();

const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return orders
      .map((order) => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = orders.map((order) => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return orders.filter((order) => order.email === email);
  },
  // Change code above this line
};
