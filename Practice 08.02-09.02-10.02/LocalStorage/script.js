// Задача
// У вас есть перечень продуктов и картинок к ним. Когда пользователь выбирает какой
// то продукт и нажимает на кнопку добавить то при перезагрузке страници этот продукт
// должен быть на месте и не исчезать только при нажатии на кнопку удалить
// он пропадает.
// Тоесть это задача на работу с localStorage. Сохраняем данные.

const add = document.getElementById("add");
const del = document.getElementById("del");
const select = document.querySelector("select");
const icon = document.querySelector(".icon");
const list = document.querySelector(".plates");
let l = "apple";
let state = {
  items: [],
};

const data = localStorage.getItem("data");
if (data) {
  state = JSON.parse(data);
}

window.onload = function () {
  const loaded = sessionStorage.getItem("loaded");
  if (loaded) {
    update();
  } else {
    sessionStorage.setItem("loaded", true);
  }
};

function update() {
  for (let i = 0; i < state.items.length; i++) {
    const liUpdate = document.createElement("li");
    liUpdate.innerHTML = state.items[i];
    list.appendChild(liUpdate);
  }
}

select.addEventListener("change", function (e) {
  l = this.value;
  // l = e.currentTarget.value;
  changeLogo();
});

function changeLogo() {
  icon.style.backgroundImage = 'url("img/' + l + '.svg")';
}

function addItem(e) {
  e.preventDefault();
  const liAdd = document.createElement("li");
  liAdd.textContent = l;
  list.appendChild(liAdd);
  state.items.push(l);
  localStorage.setItem("data", JSON.stringify(state));
}

function deleteItem(e) {
  e.preventDefault();
  localStorage.clear();
  list.innerHTML = "";
  state.items = [];
}

add.addEventListener("click", addItem);

del.addEventListener("click", deleteItem);
