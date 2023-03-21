// Напишите код таймера:
// - при нажатии на button с id="timer-start" он запускается и меняется каждую секунду;
// - при нажатии на button с id="timer-stop" он останавливается. При нажатии на button с id="timer-start" он запускается снова с предыдущего значения;
// - при нажатии на button с id="timer-reset" он останавливается и сбрасывается;
const timeContainer = document.getElementById("time");
const btnStart = document.getElementById("timer-start");
const btnStop = document.getElementById("timer-stop");
const btnReset = document.getElementById("timer-reset");

let timerId = 0;

const startTime = () => {
  btnStart.disabled = true;
  timerId = setInterval(() => {
    const time = timeContainer.textContent;
    timeContainer.textContent = Number(time) + 1;
  }, 1000);
};

const stopTime = () => {
  btnStart.disabled = false;
  clearInterval(timerId);
};

const resetTime = () => (timeContainer.textContent = "0");

btnStart.addEventListener("click", startTime);
btnStop.addEventListener("click", stopTime);
btnReset.addEventListener("click", resetTime);

// const options = {
//   onClose() {
//     if (btnStart === "active") {
//       btnStart.disabled = true;
//     } else {
//       btnStart.disabled = false;
//     }
//   },
// };

console.log(2 + 5 + "" + 1 + 0 - 10);
