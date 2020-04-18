
const mises = 100;
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const todayAdd3 = new Date();

todayAdd3.setHours(todayAdd3.getHours() + 3);
todayAdd3.getTime();

let tempDate = Date.parse(JSON.parse(localStorage.getItem('timerTempData'))) || todayAdd3;

// let tempDate = new Date('2020/04/19 10:39:50').getTime();

// If first visit, save to localStorage.
if (tempDate === todayAdd3) {
  localStorage.setItem('timerTempData', JSON.stringify(tempDate));
}

x = setInterval(() => {    
  let now = new Date().getTime();
  distance = tempDate - now;
  if (distance > 0 ) {
    document.getElementById('days').innerText = Math.floor(distance / (day));
    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
    document.getElementById("mises").innerHTML = distance.toString().substring(distance.toString().length - 3, distance.toString().length - 2) + '0';
  }
}, mises)

