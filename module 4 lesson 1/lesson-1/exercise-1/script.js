// Візміть об'єкт `user` та додайте йому метод `getModifyTabel`, який в якості
// аргументу отримує колбек, та повертає новий об'єкт tabel (копію об'єкту user.tabel),
// де кожна оцінка - це результат роботи callback-функції (тобто щоб отримати оцінку
// для нового табелю вам треба стару оцінку передити в callback-функцію, яку ви отримуєте в якості аргументу, і результат її роботи записати як нову оцінку в новий табель).

// В якості аргументу в метод `user.getModifyTabel` створіть та передайте функцію
// `convert100to12`, яка отримує оцінку за 100-бальною системою та повертає її аналог з
// 12-бальної, откругляючи результат до найближчого цілого.

const user = {
  name: "Годрик",
  lastName: "Гриффиндор",
  sword: "Годрик Гриффиндор",
  tabel: {
    basicMagic: 70,
    flight: 40,
    fight: 100,
  },
  getModifyTabel(collback) {
    const newTabel = {};
    for (const key in this.tabel) {
      const score = this.tabel[key];
      const newScore = collback(score);
      newTabel[key] = newScore;
    }
    return newTabel;
  },
};

function convert100to12(score) {
  const newScore = Math.round((score / 100) * 12);
  return newScore;
}
console.log(user.getModifyTabel(convert100to12));

//!___________________________________
// function createCapitalize(str) {
//   const firstLetter = str[0].toUpperCase();
//   const newStr = `${firstLetter}${str.slice(1)}`;
//   return newStr;
// }

// function createUser(name, lastName, callback) {
//   const user = {
//     name: callback(name),
//     lastName: callback(lastName),
//     getFullName() {
//       const { name, lastName } = this;
//       const result = `${name} ${lastName}`;
//       console.log(result);
//       return result;
//     },
//   };

//   return user;
// }

// const newUser = createUser("alex", "гийом василь", createCapitalize);
// console.log(newUser);
