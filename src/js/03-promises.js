const form = document.querySelector('.form');

const delayInp = form.querySelector("input[name = 'delay']");

const step = form.querySelector("input[name = 'step']");

const amount = form.querySelector("input[name = 'amount']");

const createPromiseButton = form.querySelector('button');

import Notiflix from 'notiflix';

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         // Fulfill
//         resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       } else {
//         // Reject
//         reject(`❌ Rejected promise ${position} in ${delay}ms`);
//       }
//     }, delayInp.value);
//   });
// }

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
