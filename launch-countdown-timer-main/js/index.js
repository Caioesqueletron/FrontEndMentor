(function app() {
    const countdownValue = {
      days: 8,
      hours: 23,
      minutes: 55,
      seconds: 41
    };
  
    const target = {
      days: document.getElementById('days'),
      hours: document.getElementById('hours'),
      minutes: document.getElementById('minutes'),
      seconds: document.getElementById('seconds')
     };
  
    function countdown() {
      let seconds;
      let minutes;
      let hours;
      let days;
  
      // Seconds's render
      if (countdownValue.seconds > 0) {
        countdownValue.seconds -= 1
        seconds = countdownValue.seconds < 10 ? `0${countdownValue.seconds}` : `${countdownValue.seconds}`;
        target.seconds.querySelector('.c-container-face-back').textContent = seconds;
        target.seconds.dataset.baseAfter = seconds;
        target.seconds.querySelector('.c-container').classList.add('flip');
        target.seconds.querySelector('.c-container').addEventListener('animationend', event => {
          if(event.animationName === 'flip') {
            target.seconds.querySelector('.c-container-face-front').textContent = seconds;
            target.seconds.dataset.baseBefore = seconds;
            target.seconds.querySelector('.c-container').classList.remove('flip');
          }
        })
      } else {
        countdownValue.seconds = 59;
      }
    }
  
    let run = setInterval(() => {
      if (countdownValue.days > 0 || countdownValue.hours > 0 || countdownValue.minutes > 0 || countdownValue.seconds > 0) {
        countdown();
      } else {
        clearInterval(run);
      }
    }, 1000);
  })();