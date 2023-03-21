// Створіть копію масиву з використаням оператору spread:
// ```
// const houses = ["Грейджои", "Баратеоны", "Мартеллы", "Старки", "Аррены", "Тиреллы", "Таргариены"];
// ```
// Змінять останій елемент масиву `houses` на "Таргарієни" та виведіть обидва масива у консоль.

// const houses = [
//   "Грейджои",
//   "Баратеоны",
//   "Мартеллы",
//   "Старки",
//   "Аррены",
//   "Тиреллы",
//   "Таргариены",
// ];
// const housesCopy2 = houses;
// console.log(housesCopy2);
// const housesCopy = [...houses];
// console.log(housesCopy);
// houses[houses.length - 1] = "Таргарієни";
// console.log(houses);

// const admins = ["Repeta", "Olegio", "SuperAdmin"];
// const visitors = ["Alex", "Vika", "N124Z"];
// // const users = admins.concat(visitors);
// const users = [...admins, ...visitors];
// console.log(users);

const sallaries = [1000, 2000, 5000, 10000];
const minSallary = Math.max(...sallaries);
const maxSallary = Math.min(...sallaries);
console.log(minSallary);
console.log(maxSallary);
