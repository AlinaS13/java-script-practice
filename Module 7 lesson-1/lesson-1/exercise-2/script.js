// ## Завдання 2

// В разметке у вас есть список дел с классом `to-do-list`, завернутый в div с id `to-do`.
// Напишите такую логику:
// - при выборе дела, которое еще не сделано, оно становится "сделаным" (перечеркивается с помощью добавления класса `done`);
// - при повторном нажатии на "сделанное" дело оно становится "несделанным" (убирается класс `done`);
// - под списком дел выводится список сделанных дел, который меняется в зависимости от того, какое дело было отмеченно как "сделанное" или "несделанное";
// Используйте всплытие и перехват.

// Повесьте два отдельных обработчика события `click` на div с id `to-do` и каждый
// элемент списка.

const toDo = document.querySelector("#to-do");
const uList = toDo.querySelectorAll(".to-do-list");
const doResult = toDo.querySelector("#to-do-result");
const toDoItemHandler = ({ target }) => target.classList.toggle("done");

uList.forEach((item) => item.addEventListener("click", toDoItemHandler));

toDo.addEventListener("click", function ({ currentTarget }) {
  const itemsDone = currentTarget.querySelectorAll(".done");
  doResult.textContent = `Зроблено справ:${itemsDone.length}`;
});
