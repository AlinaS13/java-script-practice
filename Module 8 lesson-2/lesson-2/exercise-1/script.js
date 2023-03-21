// Напишите код простого To Do List - пользователь вводит в поле ввода название дела и при нажатии на кнопку "Добавить" она появляется в списке с id="to-do-list". У каждого дела должна быть кнопка "Удалить", при нажатии на которую дело удаляется из списка. Сделайте так, чтобы при перезагрузки страницы дела сохранялись в списке.

// 1.addItem та вставляємо на сторінкую
// 2.створити пустий масив усіх айтемсів
// 3.використовуючи JSONparce підвантаж айтемс
// 4.Загрузка айтемс - окрема функція
// 5. Зберігаємо введ дані користувача в пустий масив і очищається форма
// 6. повішати клік на кнопку видалення лішки за запитом людини

// const listForm = document.querySelector("#to-do-form");
// const toDoList = document.querySelector("#to-do-list");

// listForm.addEventListener("submit", addItems);

// const itemsArr = [];

// function addItems(name) {
//   const markap = `<li>${name}<button type ="button" class ="remove-button">Видалити</button></li>`;
//   toDoList.insertAdjacentHTML("afterbegin", markap);
// }

// const loadItems = () => {
//   const toDoItems = JSON.parse(localStorage.getItem("to-do"));
//   console.log(toDoItems);
//   const items = toDoItems ? toDoItems : [];
//   console.log(items);
//   itemsArr.push(...items);
//   itemsArr.forEach(addItems);
// };

// loadItems();

// const updateLocalStorage = (key, value) =>
//   localStorage.setItem(key, JSON.stringify(value));

// listForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const { name } = this;
//   itemsArr.push(name.value);
//   updateLocalStorage("to-do", itemsArr);
//   loadItems(name.value);
//   this.reset();
// });

// toDoList.addEventListener("click", function ({ target }) {
//   if (target.classList.contains("reove-button")) {
//     const li = target.closest("li");
//     const items = toDoList.querySelector("li");
//     const index = [].indexOf.call(items, li);
//     itemsArr.splice(index, 1);
//     updateLocalStorage("to-do", itemsArr);
//     li.remove();
//   }
// });

//!_____________________________________________

// const listForm = document.querySelector("#to-do-form");
// const toDoList = document.querySelector("#to-do-list");

// const itemsArrey = [];

// function addItems(name) {
//   const markUp = (
//     <li>
//       ${name}
//       <button class="remove-btn" type="button">
//         Delete
//       </button>
//     </li>
//   );
//   toDoList.insertAdjacentHTML("afterbegin", markUp);
// }

// const loadItems = () => {
//   const toDoitems = JSON.parse(localStorage.getItem("to-do"));
//   const items = toDoitems ? toDoitems : [];
//   itemsArrey.push(...items);
//   itemsArrey.forEach(addItems);
// };
// loadItems();

// const updeteLocalStorage = (key, value) =>
//   localStorage.setItem(key, JSON.stringify(value));

// listForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const { name } = this;
//   itemsArrey.push(name.value);
//   updeteLocalStorage("to-do", itemsArrey);
//   addItems(name.value);
//   this.reset();
// });

// toDoList.addEventListener("click", function ({ target }) {
//   if (target.classList.contains("remove-btn")) {
//     const li = target.closest("li");
//     const items = toDoList.querySelector("li");
//     const index = [].indexOf.call(items, li);
//     itemsArrey.splice(index, 1);
//     updeteLocalStorage("to-do", itemsArrey);
//     li.remove();
//   }
// });

const toDoForm = document.getElementById("to-do-form");
const toDoList = document.getElementById("to-do-list");

const toDoListItems = [];

const addToDoItem = (name) => {
  if (name === "") {
    return;
  }
  const item = `<li>${name} <button class="delete-to-do-item" type="button">Delete</button></li>`;
  toDoList.insertAdjacentHTML("afterbegin", item);
};

const loadItems = () => {
  const toDoItems = JSON.parse(localStorage.getItem("to-do"));
  const items = toDoItems ? toDoItems : [];
  toDoListItems.push(...items);
  toDoListItems.forEach(addToDoItem);
};

loadItems();

const upateLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

toDoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const { name } = this;
  toDoListItems.push(name.value);
  upateLocalStorage("to-do", toDoListItems);
  addToDoItem(name.value);
  this.reset();
});

toDoList.addEventListener("click", function ({ target }) {
  if (target.classList.contains("delete-to-do-item")) {
    const li = target.closest("li");
    const items = toDoList.querySelectorAll("li");
    const index = [].indexOf.call(items, li);
    toDoListItems.splice(index, 1);
    upateLocalStorage("to-do", toDoListItems);
    li.remove();
  }
});
