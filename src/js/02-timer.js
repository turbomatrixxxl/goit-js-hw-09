// Descris în documentație
import flatpickr from 'flatpickr';
// Import suplimentar de stil
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  let val = value.toString();
  if (val.length < 2) {
    value = val.padStart(2, '0');
  }
  return value;
}

let chosenDataInMiliseconds = 0;

let remainingTimeInMiliseconds = 0;

let remainingTimeComponents = {};

const input = document.getElementById('datetime-picker');

const startButton = document.querySelector('[data-start]');
startButton.disabled = true;
console.log(startButton);

const days = document.querySelector('[data-days]');
console.log(days);

const hours = document.querySelector('[data-hours]');
console.log(hours);

const minutes = document.querySelector('[data-minutes]');
console.log(minutes);

const seconds = document.querySelector('[data-seconds]');
console.log(seconds);

const currentDataInMilliseconds = new Date().getTime();
function chronometre(ms) {
  const timerId = setInterval(currentDataInMilliseconds, 1000);
}
// console.log(currentDataInMilliseconds);

input.addEventListener('change', ev => {
  console.log(ev.currentTarget.value);
  const chosenData = new Date(ev.currentTarget.value);
  chosenDataInMiliseconds = chosenData.getTime();
  //   console.log(chosenDataInMiliseconds);

  if (chosenDataInMiliseconds <= currentDataInMilliseconds) {
    // window.alert('Please choose a date in the future');
    Notiflix.Notify.failure('Please choose a date in the future');
  } else {
    startButton.disabled = false;
    options.defaultDate = ev.currentTarget.value;
  }
});

startButton.addEventListener('click', () => {
  startButton.disabled = true;

  let timerId = setInterval(function () {
    // Getting current time in required format
    let now = new Date().getTime();

    remainingTimeInMiliseconds = chosenDataInMiliseconds - now;
    // console.log(remainingTimeInMiliseconds);
    remainingTimeComponents = convertMs(remainingTimeInMiliseconds);
    // console.log(remainingTimeComponents);
    days.textContent = addLeadingZero(remainingTimeComponents.days);
    hours.textContent = addLeadingZero(remainingTimeComponents.hours);
    minutes.textContent = addLeadingZero(remainingTimeComponents.minutes);
    seconds.textContent = addLeadingZero(remainingTimeComponents.seconds);

    if (remainingTimeInMiliseconds < 0) {
      clearInterval(timerId);
      days.textContent = '00';
      hours.textContent = '00';
      minutes.textContent = '00';
      seconds.textContent = '00';
    }
  }, 1000);
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onchange: true,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const fp = flatpickr(input, options);
