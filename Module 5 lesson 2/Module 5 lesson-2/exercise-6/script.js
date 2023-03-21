// Напиши класс Client котрорый создает объект
//со свойствами login email
//Объяви приватные свойства #login #email,
//доступ к которым сделай через геттер и сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get clientData() {
//     return {
//       login: this.#login,
//       email: this.#email,
//     };
//   }

//   set changeEmail(newEmail) {
//     this.#email = newEmail;
//   }

//   set changeLogin(newLogin) {
//     this.#login = newLogin;
//   }
// }

// const ivan = new Client("hello", "111@email.com");

// ivan.changeEmail = '"222@email.com"';

// ivan.changeLogin = '"NewHello"';

// console.log(ivan);
// console.log(client.clientData.email);

//!_________________________________

// Напишіть клас `User`, який отримує такі властивості:
// -`name` - ім'я користувача;
// - `last name` - прізвище користувача;
// - `tabel` - масив оцінок.

// І має такі методи:
// - `avarageScore` – це геттер, який повертає середню оцінку;
// - статичний метод `getHightUser`, який отримує кілька об'єктів класу `User` і повертає об'єкт з найбільшою середньою оцінкою.

//

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog));
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line

//   getPrice() {
//     return this.price;
//   }
//   changePrice(price) {
//     this.price = newPrice;
//   }

//   // Change code above this line
// }
// console.log();

//!___________________________
// Напишіть клас User, який отримує такі властивості:
//*-`name` - ім'я користувача;
// - last name - прізвище користувача;
// - tabel - масив оцінок.

// І має такі методи:
// - avarageScore – це геттер, який повертає середню оцінку;
// - статичний метод getHightUser, який отримує кілька об'єктів класу User і повертає об'єкт з найбільшою середньою оцінкою.

// class User {
//   static getHightUser(users) {
//     const result = users.reduce((acc, user) => {
//       if (acc.avarageScore < user.avarageScore) {
//         return user;
//       }
//       return acc;
//     }, users[0]);
//     return result;
//   }

//   constructor({ name, lastName, tabel }) {
//     this.name = name;
//     this.lastName = lastName;
//     this.tabel = [...tabel];
//   }
//   get avarageScore() {
//     const { tabel } = this;
//     const totalScrumSum = this.tabel.reduce((acc, score) => acc + score, 0);
//     const result = (totalScrumSum / tabel.length).toFixed();
//     return Number(result);
//     // const result = Math.round(totalScrumSum / tabel.length);
//     // return result;
//   }
// }

// const user1 = new User({ name: "Alex", lastName: "Did", tabel: [3, 4, 5] });
// const user2 = new User({ name: "Oleh", lastName: "Gik", tabel: [2, 4, 1] });
// // console.log(user1.avarageScore);
// // console.log(user2.avarageScore);
// // console.log(User.getHightUser([user1, user2]));
// console.log(User.avarageScore);
// console.log(user1);
//!_________________________________

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.items.splice(this.items.indexOf(itemToRemove), 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//*____________hw-----------11_______________________
// class StringBuilder {
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {}
//   padStart(str) {}
//   padBoth(str) {}
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//*______________________________________

// const Car = function (value) {
//   console.log(this);
//   this.a = value;
// };

// const myCar = new Car(10);
// console.log(myCar);

// const myCar2 = new Car(20);
// console.log(myCar);

// console.log(Math.PI.Math.round());

obj1 = {
  a: " i am string",
  b: 22,
  c: 122,
};

// console.log(obj1);
// const obj2 = { ...obj1 };
// console.log(obj1);

let modalWindow = '<div class="modal"><h1>Send email</h1></div>';
console.log(document.getElementById("put-thml-here"));
document.getElementById("put-thml-here").innerText = modalWindow;
