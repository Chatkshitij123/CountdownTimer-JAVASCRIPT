let days = document.getElementById('days');
let hours = document.getElementById('hours');
let mins = document.getElementById('mins');
let secs = document.getElementById('secs');

const formatTime = (time) => {
return time < 10 ? `0${time}` : time;
}
const updateCountDown = (deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime;//milliseconds

    //calculate days, hours, mins and secs from timeDifference
    let calcSecs = Math.floor(timeDifference/1000) % 60;
    let calcMins = Math.floor(timeDifference/1000/60) % 60;
    let calcHours = Math.floor(timeDifference/1000/60/60) % 24;
    let calcDays = Math.floor(timeDifference/1000/60/60/24);
   
    days.textContent = formatTime(calcDays);
    mins.textContent = formatTime(calcMins);
    hours.textContent = formatTime(calcHours);
    secs.textContent = formatTime(calcSecs);
} 

const countDown = (targetDate) => {
 setInterval(() => updateCountDown(targetDate), 1000);
}

const targetDate = new Date("June 01 2024 07:00");
countDown(targetDate);
console.log(targetDate);
