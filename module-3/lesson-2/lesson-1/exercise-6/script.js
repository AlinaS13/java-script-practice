// Створіть об'єкт `tabel` із такими властивостями:
// - english зі значенням "8";
// - history зі значенням "9";
// - physicalCulture зі значенням "12";

// Так виведіть у консоль середню оцінку за всі предмети, використовучи
// метод `Object.keys`.

const tabel = {
  english: 8,
  history: 9,
  physicalCulture: 12,
};
let total = 0;
const keys = Object.keys(tabel);

for (const key of keys) {
  total += tabel[key];
}

console.log((total / keys.length).toFixed(1));
