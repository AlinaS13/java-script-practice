// 1)  Дан массив с числами. Найдите сумму этих чисел
// const arr = [5, -3, 6, -5, 0, -7, 8, 9];
// const arrSum = arr.reduce((acc, elem)=>acc+ elem,0)
// 2) Дан массив с числами. Найдите сумму первых N элементов до первого нуля.
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента,
//  так как дальше стоит элемент с числом 0.

// const arr2 = [1, 2, 3, 0, 4, 5, 6];
// let answer = 0;
// const arrSum = arr2.reduce(function (acc, elem) {
//   if (elem === 0) {
//     answer = acc;
//   } else {
//     return acc + elem;
//   }
// }, 0);
// if (answer == undefined) {
//   answer = arrSum;
// }
// console.log(answer);

// 3)Дан массив с числами. Узнайте сколько
// элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти

// const arr3 = [1, 2, 3, 0, 4, 5, 6];

// let num = 1;
// const result = arr3.reduceRight(function (acc, elem) {
//   if (acc > 10) {
//     console.log(num);
//     return;
//   } else {
//     num++;
//     return acc + elem;
//   }
// });

// 4) Посчитать среднее значение всех элементов массива
// const numbers = [2, 3, 11, 15, 20, 3, 5, 8, 10, 16, 2, 11, 14, 15, 18];

// const getAverage = (arr) => {
//   const total = numbers.reduce((acc, elem) => {
//     return acc + elem;
//   }, 0);
//   return total / numbers.length;
// };

// console.log(getAverage(numbers));

// 5) Посчитать количество джедаев в массиве USERS
// const users = [
//   {
//     username: "lando12",
//     jedi: false,
//   },
//   {
//     username: "kvaigon99",
//     jedi: true,
//   },
//   {
//     username: "anakin skywalker",
//     jedi: false, // DARK SIDE ISN'T JEDI WAY!!!
//   },
//   {
//     username: "littlegreenpug",
//     jedi: true,
//   },
//   {
//     username: "ray",
//     jedi: true,
//   },
//   {
//     username: "padmebestqueenever",
//     jedi: false,
//   },
// ];

// const countJedi = (users) => {
//   return users.reduce((acc, user) => {
//     if (user.jedi) {
//       acc++;
//     }
//     return acc;
//   }, 0);
// };

// console.log(countJedi(users));

// 6) Получить массив только из джедаев
// const documents = [
//   {
//     content: "Ты был мне как брат! Я любил тебя!",
//     author: "Obi-Wan Kenobi",
//     date: "2017-01-17 07:13:07",
//   },
//   {
//     content: "База повстанцев находится на Дантуине.",
//     author: "Leia Organa",
//     date: "1999-02-19 16:56:11",
//   },
//   {
//     content:
//       "Страх открывает доступ к темной стороне! Страх рождает гнев, гнев рождает ненависть, ненависть — залог страданий.",
//     author: "Yoda",
//     date: "2019-11-27 21:33:56",
//   },
// ];

// 7) Склеить несколь обектов в 1 общий. У нас есть контент,автор
// и дата когда этот документ был создан. Наша задача склеить все эти документы в 1.
// отобразить всех авторов и взять дату последнего документа.
//Должно получиться
// Конечный результат должен выглядеть так:
// {
// content: "Ты был мне как брат! Я любил тебя!
//    База повстанцев находится на Дантуине.
//    Страх открывает доступ к темной стороне!
//    Страх рождает гнев, гнев рождает ненависть, ненависть — залог страданий.",
// authors: [Obi-Wan Kenobi, Leia Organa, Yoda],
// date: "2019-11-27 21:33:56"
// }

const documents = [
  {
    content: "Ты был мне как брат! Я любил тебя!",
    author: "Obi-Wan Kenobi",
    date: "2017-01-17 07:13:07",
  },
  {
    content: "База повстанцев находится на Дантуине.",
    author: "Leia Organa",
    date: "1999-02-19 16:56:11",
  },
  {
    content:
      "Страх открывает доступ к темной стороне! Страх рождает гнев, гнев рождает ненависть, ненависть — залог страданий.",
    author: "Yoda",
    date: "2019-11-27 21:33:56",
  },
];

const joinerFunction = (documents) => {
  return documents.reduce(
    (acc, elem) => {
      acc.content = acc.content + " " + elem.content;
      acc.author.push(elem.author);
      if (!acc.date || new Date(acc.date) <= new Date(elem.date)) {
        acc.date = elem.date;
      }
      return acc;
    },
    {
      content: "",
      author: [],
      date: null,
    }
  );
};

console.log(joinerFunction(documents));
