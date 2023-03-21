// ## Завдання 3

// Візьміть об'єкт массиви `user` та створіть його копію `user2`:
// ```
// const user = {
//     name: "Alexandr",
//     lastName: "Repeta",
//     age: "Infinity"
// };
// ```

// Змініть у другому об'єкті поле `age` на 30 та виведіть обидва об'єкта у консоль.

const user = {
  name: "Alexandr",
  lastName: "Repeta",
  age: "Infinity",
};

const userCopy = { ...user };
userCopy.age = 30;

console.log(user);
console.log(userCopy);
