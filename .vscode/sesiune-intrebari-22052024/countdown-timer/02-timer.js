/* Logica
 *   Algoritmul așteaptă ca utilizatorul să inițieze numărătoarea inversă.
 *   Apoi, preia și validează data introdusă de utilizator.
 *   Dacă data este validă, se calculează timpul rămas și se actualizează afișajul în mod repetat, la fiecare secundă.
 *   Când timpul rămas ajunge la zero, numărătoarea se oprește și se afișează un mesaj corespunzător.
 **/

// salveaza in variabile butonul de start si datetime picker
const startButton = document.querySelector('[data-start]');
const datetimePicker = document.getElementById('datetime-picker');

// adaugam event pentru click pe buton
startButton.addEventListener('click', () => {
  const chosenDate = datetimePicker.value; //get selected date

  if (chosenDate === '') {
    alert('Please choose a date');

    return;
  }

  const timerContainer = document.querySelector('.timer');
  if (!timerContainer) {
    alert('Un element cu clasa .timer e necesar in UI');

    return;
  }

  // Apelam functia
  startCountdown(new Date(chosenDate), timerContainer);
});

// Functia principala care se ocupa de afisat pe UI si numaratoare
function startCountdown(startDate, timerContainer) {
  const daysSpan = timerContainer.querySelector('[data-days]');
  const hoursSpan = timerContainer.querySelector('[data-hours]');
  const minutesSpan = timerContainer.querySelector('[data-minutes]');
  const secondsSpan = timerContainer.querySelector('[data-seconds]');

  function updateTimer() {
    const now = new Date();
    const timeRemaining = startDate.getTime() - now.getTime();

    if (timeRemaining < 0) {
      // Timpul a expirat
      timerContainer.innerHTML = "Time's Up!";
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    daysSpan.textContent = pad(days);
    hoursSpan.textContent = pad(hours);
    minutesSpan.textContent = pad(minutes);
    secondsSpan.textContent = pad(seconds);
  }

  function pad(num) {
    return num.toString().padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}
