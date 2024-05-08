const form = document.querySelector('.form');
console.log(form);

const delayInp = form.querySelector("input[name = 'delay']");
console.log(delayInp);
console.log(delayInp.value);

const step = form.querySelector("input[name = 'step']");
console.log(step);
// console.log(step.value);

const amount = form.querySelector("input[name = 'amount']");
console.log(amount);
// console.log(amount.value);

const createPromiseButton = form.querySelector('button');
console.log(createPromissesButton);

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
    }, delayInp.value);
  });
}
// console.log(createPromise);

createPromiseButton.addEventListener('click', ev => {
  ev.preventDefault();
  console.log(delayInp);

  console.log(step);

  console.log(amount);

  // for (let i = 0; i < amount.value; i++) {
  //   setTimeout(() => {
  //     createPromise(i, step.value);
  //     // .then(({ position, delay }) => {
  //     //   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  //     // })
  //     // .catch(({ position, delay }) => {
  //     //   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  //     // });
  //     console.log(`✅ Fulfilled promise ${i} in ${step.value}ms`);
  //   }, step.value);
  // }
});

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   }),
