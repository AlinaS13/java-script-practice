// Напишите две функции
// letMeSeeYourName(callback) - спрашивает имя пользователя
//через prompt и вызывает callback функцию
//greet(name) - коллбек принимающий имя и логирующий в консоль
//строку "Привет <name>"
//Реализуй проверку, что prompt не пустой

function letMeSeeYourName(callback) {
  const name = prompt("Ваше імя?");
  if (!name) return;
  return callback(name);
}

const greet = (name) => `Привет ${name}`;

console.log(letMeSeeYourName(greet));
