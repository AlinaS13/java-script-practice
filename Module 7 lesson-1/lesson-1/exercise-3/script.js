// При клике на "button" с id btn-modal показывайте модалку (добавляете ей класс `show`). Модалка закрывается (убирается класс `show`) при клике на крестик внутри нее или на серую область вокруг нее.

const btnShowModal = document.getElementById("btn-modal");
const modal = document.getElementById("modal");
const modalClose = modal.querySelector(".modal-close");

btnShowModal.addEventListener("click", function (e) {
  modal.classList.add("show");
});

modalClose.addEventListener("click", function (e) {
  modal.classList.remove("show");
});

modal.addEventListener("click", function ({ target, currentTarget }) {
  if (target === currentTarget) {
    modal.classList.remove("show");
  }
});

window.addEventListener("keydown", function ({ code }) {
  if (code === "Escape") {
    modal.classList.remove("show");
  }
});
