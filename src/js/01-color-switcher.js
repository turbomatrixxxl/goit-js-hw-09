function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
console.log(body);

const startButton = document.querySelector('[data-start]');
console.log(startButton);

const stopButton = document.querySelector('[data-stop]');
console.log(stopButton);

const changeIntervalInMilliseconds = 1000;

let lastBodyBgColor = null;
let timerId = null;

function changeBgColor() {
  body.style.backgroundColor = getRandomHexColor();
  lastBodyBgColor = body.style.backgroundColor;
}

startButton.addEventListener('click', ev => {
  timerId = setInterval(changeBgColor, changeIntervalInMilliseconds);
  startButton.disabled = true;
  //   console.log(timerId);
});

stopButton.addEventListener('click', ev => {
  body.style.backgroundColor = lastBodyBgColor;
  //   console.log(lastBodyBgColor);
  clearInterval(timerId);
  startButton.disabled = false;
});
