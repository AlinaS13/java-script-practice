//* В разметке у вас есть меню с классом `main-menu` и id `main-menu`. Сделайте
//* так, чтобы при нажатии на ссылку пункта меню он становился активным (к нему
// *добавлялся класс `active`, а у предыдущего активного пункта меню он исчезал).
//* Обработчик события `click` повесьте на все меню (`ul.main-menu`), а не на каждую
//* ссылку.

const mainMenu = document.getElementById("main-menu");

// mainMenu.addEventListener("click", function (event) {
//   const { target, currentTarget } = event;
//   if (target.tagName === "A") {
//     const preActiveLinck = currentTarget.querySelector(".active");
//     if (preActiveLinck) {
//       preActiveLinck.classList.remove("active");
//     }
//     target.classList.add("active");
//   }
// });

mainMenu.addEventListener("click", myFunction);

function myFunction(event) {
  const { target, currentTarget } = event;
  if (target.tagName === "A") {
    const preActiveLinck = currentTarget.querySelector(".active");
    if (preActiveLinck) {
      preActiveLinck.classList.remove("active");
    }
    target.classList.add("active");
  }
}
