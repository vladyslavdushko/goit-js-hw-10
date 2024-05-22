import flatpickr from "flatpickr";
import iziToast from "izitoast";
import "flatpickr/dist/flatpickr.min.css";
import "izitoast/dist/css/iziToast.min.css";


const inputPicker = document.querySelector("#datetime-picker")
const startBtn = document.querySelector('[data-start]')
const timer = document.querySelector('.timer')

let userSelectedDate = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
   if((selectedDates[0] - Date.now()) < 0){
    startBtn.classList.remove('active')
    startBtn.classList.add('inactive')
    return iziToast.error({
      title: 'Error',
      message: 'Please choose a date in the future',
  });
   }else{
    startBtn.classList.remove('inactive')
    startBtn.classList.add('active')
    userSelectedDate = selectedDates[0]
   return;
   }
  
  },
};

flatpickr(inputPicker, options) 

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startBtn.addEventListener('click', startTimer)

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function startTimer(){

  if(!startBtn.classList.contains('active')){
    return
  }

  const day = timer.querySelector('[data-days]')
  const hour = timer.querySelector('[data-hours]')
  const minute = timer.querySelector('[data-minutes]')
  const second = timer.querySelector('[data-seconds]')

  startBtn.classList.remove("active")
  startBtn.classList.add("inactive")
  inputPicker.disabled = true;

  let startCount = setInterval(()=>{
    inputPicker.ariaDisabled = true;
    let difDate = userSelectedDate - Date.now()

    day.textContent =  addLeadingZero(convertMs(difDate).days);
    hour.textContent = addLeadingZero(convertMs(difDate).hours)
    minute.textContent = addLeadingZero(convertMs(difDate).minutes)
    second.textContent = addLeadingZero(convertMs(difDate).seconds)

    if(difDate <= 0){
    day.textContent = '00'
    hour.textContent = '00'
    minute.textContent = '00'
    second.textContent = '00'
    startBtn.classList.remove('inactive')
    startBtn.classList.add('active')
    inputPicker.disabled = false;

      return clearInterval(startCount)
    }
  }, 1000)


}