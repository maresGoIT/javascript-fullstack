'use strict';

/**
 Scrieți un script care, atunci când se trimite un formular, apelează funcția createPromise(position, delay) de atâtea ori de câte este specificat în
 câmpul amount. La fiecare apel, transmiteți-i numărul promise-ului creat (position) și întârzierea ținând cont de primul (delay) introdus de utilizator
 și pasul (step).

Modificați codul funcției createPromise astfel încât să returneze un promise care va fi executat sau respins după un delay. Valoarea promise-ului trebuie să fie
un obiect care conține proprietățile position și delay cu valorile parametrilor ce au același nume. Utilizați codul funcției inițiale pentru a alege ce vei face
cu acel promise - fie executat sau respins.

PASI Necesari

- Trebuie sa luam din formular valorile din input-uri;
- Iteratie care apeleaza functia create promise de x ori;
- createPromise -> returnam un promise care va fi returnat/respins dupa delay. 
    - resolve: {
        position: position,
        delay: delay,
    }
 */
async function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(event.target);
  let delay = parseInt(formData.get('delay'));
  const step = parseInt(formData.get('step'));
  const amount = parseInt(formData.get('amount'));

  for (let i = 1; i <= amount; i++) {
    try {
      const result = await createPromise(i, delay);
      console.log(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
    } catch (error) {
      console.log(`❌ Promisiunea ${error.position} a fost respinsă în ${error.delay}ms`);
    }

    delay += step;
  }
});
