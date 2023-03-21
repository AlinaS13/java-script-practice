// Створіть об'єкт `tabel` із такими властивостями:
// - mathematics зі значенням "12";
// - physics зі значенням "11";
// - literature зі значенням "10";

// Запитайте у користувача оцінку по якому предмету він хоче знати. Якщо такого
// предмету немає в об'єкті - виведіть в консоль повідомлення "назва_предмету відсутній у списку". Якщо він є - виведіть у консоль повідомлення "ваша оцінка за назва_предмету значеня_оцінки"

const tabel = {
  mathematics: 12,
  physics: 11,
  literature: 10,
};

const subjectname = prompt("Оцінку по якому предмету Ви хочете знати?");
console.log(tabel[subjectname]);
if (!tablel.hasOwnProperty(subjectname)) {
  // if (tabel[subjectname] === undefined) {

  console.log(`${subjectname} відсутній у списку`);
} else console.log(`ваша оцінка за ${subjectname} ${tabel[subjectname]}`);
