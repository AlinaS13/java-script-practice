// Напишите функцию `isLeapYear`, которая получает год в качестве аргумента и возвращает true, если год высокосный, и false, если нет.

const isLeapYear = (year) => {
  const date = new Date(year, 2, 0);
  const days = date.getDate();
  return days === 29;
};

console.log(isLeapYear(2020));
