// ## Завдання 2

// Візьміть 2 массиви `admins` та `visitors` і об'єдняйте їх в один масив `users` за допомогою оператора spread:
// ```
// const admins = ["Repeta", "Olegio", "SuperAdmin"];
// const visitors = ["Alex", "Vika", "N124Z"];
// ```

const admins = ["Repeta", "Olegio", "SuperAdmin"];
const visitors = ["Alex", "Vika", "N124Z"];

const user = [...admins, ...visitors];
console.log(user);
