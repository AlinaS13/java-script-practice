// Приплюсовать первое значение со вторым, пройтись по всем и найти наибольшее
const array = [3, 1, 0, 4, 7, 1, 3];

let maxValue = array[0] + array[1];

array.forEach((elem, index, array) => {
  result = elem + array[index + 1];
  if (result > maxValue) {
    maxValue = result;
  }
});
console.log(maxValue);
