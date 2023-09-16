// console.log('A');

// Promise.reject('B')
//   .then(
//     value => console.log(value),
//     err => console.error('Eroare din then'),
//   )
//   .catch(err => console.error('Eroare din catch'))
//   .finally(() => console.log('D'));

// console.log('E');

//!==============================

// console.log('Request data...');

// setTimeout(() => {
//   console.log('Preparing data...');

//   const data = {
//     id: 1,
//     text: 'lorem ipsum dolor sit amet.',
//     status: 'important',
//   };

//   setTimeout(() => {
//     console.log('Data received: ', data);
//   }, 2000);
// }, 2000);

// console.log('Cod Executat dupa');

// console.log('Request data...');

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log('Preparing data...');

//     const data = {
//       id: 1,
//       text: 'lorem ipsum dolor sit amet.',
//       status: 'important',
//     };

//     if (!data.id) rej(new Error('No id!'));
//     res(data);
//   }, 2000);
// });

// console.log('Cod de executat dupa');

// promise
//   .then(data => {
//     console.log('Data changed');
//     data.status = 'ordinary';
//     return data;
//   })
//   .then(data => console.log(data))
//   .catch(err => console.error(err))
//   .finally(() => console.log('Promise end'));

// promise
//   .then(data => {
//     const p = new Promise(res => {
//       console.log('Data changed for second promise');
//       data.status = 'ordinary';
//       res(data);
//     });

//     p.then(data => console.log(data));
//   })
//   .catch(err => console.error(err))
//   .finally(() => console.log('Promise 2 end'));

//!==============================

// const statusMessage = document.getElementById('statusMessage');
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //   reject({
//     //     status: 'error',
//     //     message: 'A aparut o eroare',
//     //   });
//     resolve({
//       status: 'ok',
//       message: 'Totul a fost ok',
//     });
//   }, 2000);
// // });

// promise
//   .then(value => {
//     console.log(value);
//     statusMessage.innerHTML = `<h1>${value.status}</h1><p>${value.message}</p>`;
//   })
//   .catch(error => {
//     console.log(error.message);
//     statusMessage.innerHTML = `<h1>${error.status}</h1><p>${error.message}</p>`;
//   });

//!==============================

// const financeEl = document.getElementById('userFinance');
// const getIncomeFn = () => new Promise(res => setTimeout(() => res({ venituri: '5000%' }), 2000));
// const getExpensesFn = () =>
//   new Promise(res => setTimeout(() => res({ cheltuieli: '5000%' }), 4000));

// const promises = [getIncomeFn(), getExpensesFn()];
// financeEl.innerHTML = 'Astept dupa rezultate...';

// Promise.all(promises).then(value => {
//   const incomeRes = value[0];
//   const expensesRes = value[1];

//   financeEl.innerHTML = `<table>
//     <tr><th>Venituri</th><th>Cheltuieli</th></tr>
//     <tr><td>${incomeRes.venituri}</td><td>${expensesRes.cheltuieli}</td></tr>
//   </table>`;
//   console.dir(incomeRes);
//   console.dir(expensesRes);
// });

// //!==============================
// const sleep = ms => new Promise(res => setTimeout(() => res(ms), ms));

// Promise.all([sleep(2000), sleep(5000), sleep(500)]).then(value => {
//   console.log(value);
//   console.log('All promises');
// });

// Promise.race([sleep(2000), sleep(5000), sleep(500)]).then(value => {
//   console.log(value);
//   console.log('Race promises');
// });
