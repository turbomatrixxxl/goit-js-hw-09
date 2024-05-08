const form = document.querySelector('.form');

const delayInp = form.querySelector("input[name = 'delay']");

const step = form.querySelector("input[name = 'step']");

const amount = form.querySelector("input[name = 'amount']");

const createPromiseButton = form.querySelector('button');

import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

createPromiseButton.addEventListener('click', ev => {
  ev.preventDefault();
  // console.log(delayInp.value);

  // console.log(step.value);

  // console.log(amount.value);

  for (let i = 1; i <= amount.value; i++) {
    const allDelay = parseInt(delayInp.value) + parseInt(step.value);
    const totalDelay =
      parseInt(delayInp.value) + parseInt(step.value) * (i - 1);
    createPromise(i, totalDelay)
      .then(result => {
        Notiflix.Notify.success(result, { timeout: allDelay });

        console.log(`✅ Fulfilled promise ${i} in ${totalDelay}ms`);
      })
      .catch(error => {
        Notiflix.Notify.failure(error, { timeout: allDelay });

        console.log(`❌ Rejected promise ${i} in ${totalDelay}ms`);
      });
  }
});
