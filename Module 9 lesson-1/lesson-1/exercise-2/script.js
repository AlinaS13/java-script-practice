// Напишите код, который вызывает метод `getFullName` объекта `user` через 2 секунды после загрузки страницы.

const user = {
  name: "Александр",
  lastName: "Македонский",
  getFullName() {
    console.log(this);
    const fullName = `${this.name} ${this.lastName}`;
    // console.log(fullName);
    return fullName;
  },
};
// setTimeout(() => {
//   user.getFullName();
// }, 2000);

// setTimeout(user.getFullName.bind(user), 2000);

const user2 = {
  name: "Алекс",
  lastName: "Макед",
};

setTimeout(() => {
  user.getFullName.call(user2);
}, 2000);

// setTimeout(user.getFullName.bind(user2), 2000);
