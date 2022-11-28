const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => { 
    const timer=setInterval(()=>{
      let mm=seconds/60%60;
      let ss=seconds%60;
      let hh=seconds/60/60%60;
      if(seconds>0){
        timerEl.innerHTML = `${Math.trunc(hh)}:${Math.trunc(mm)}:${Math.trunc(ss)}`
      }
      else{
        clearInterval(timer)
        timerEl.innerHTML='Время вышло'
      }
      seconds--;
    },1000) 
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value=inputEl.value.replace(/[^\d]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
