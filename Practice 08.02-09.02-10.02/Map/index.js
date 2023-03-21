// 1) Представим ситуацию, в которой есть несколько записей для студентов
// с атрибутами: name, ID и marks.

// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// Постановка задачи: получить имена студентов и записать их заглавными буквами.

// Ожидаемый результат:

// ['JOHN', 'BABA', 'YAGA', 'WICK']

// const studentsName = studentRecords.map((student) =>
//   student.name.toUpperCase()
// );
// console.log(studentsName);
// console.log(studentRecords);

// 2)  Постановка задачи: вывести общее количество студентов с баллами больше 50,
// полученными после начисления поощрения в 15 баллов.

let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "John", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

// Используя map(), добавляется поощрение в 15 баллов студентам,
//  набравшим менее 50 баллов.
// Затем, используем filter() для массива студентов, возвращаемого функцией map().
//  Так мы найдем всех студентов с отметками больше 50.
// Наконец, мы использовали функцию reduce() для возвращаемого функцией filter()
//  массива студентов, чтобы вернуть сумму оценок.

const totalMarks = studentRecords
  .map(function (student) {
    if (student.marks < 50) {
      student.marks += 15;
    }
    return student;
  })
  .filter((item) => item.marks > 50)
  .reduce((acc, currentstudent) => acc + currentstudent.marks, 0);
console.log(totalMarks);
