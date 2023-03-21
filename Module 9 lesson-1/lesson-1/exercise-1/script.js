// Напишите код, при первом посещении пользователем страницы через 2 секунды после открытия страницы показывает всплывающее окно с приветствием (добавляет div с id="modal" класс "open") и закрывал его после 3х секунду показа.

const modal = document.getElementById("modal");

setTimeout(() => {
  modal.classList.add("open");
}, 2000);

setTimeout(() => {
  modal.classList.remove("open");
}, 5000);
