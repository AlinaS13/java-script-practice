// Напишіть функцію `calcBodyMassIndex`, яка в якості аргументів отримує вагу в кг так зріст у см, і повертає індекс маси тіла, який розраховується за формулою:
// вага_у_кг / (зріст_у_метрах у квадраті).
// Зробіть її стрілочною та в одну строку.

// const calcBodyMassIndex = (w, h) => Math.round(w / (h / 100) ** 2);

// console.log(calcBodyMassIndex(77, 170));

const calcSum = (...arg) => {
  let sum = 0;
  for (const value of arg) {
    sum += value;
  }

  return sum;
};

const sum = calcSum(1, 3, 4, 5);
console.log(sum);
