const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hrHand = document.querySelector('.hour-hand');

function setDate () {
    const date = new Date();
    
    let secs = date.getSeconds();
    let secsDegree = (secs / 60) * 360 - 90;
    secHand.style.transform = `rotate(${secsDegree}deg)`;
    
    let mins = date.getMinutes();
    let minsDegree = (mins / 60) * 360 - 90;
    minHand.style.transform = `rotate(${minsDegree}deg)`;
    let hrs = date.getHours();
    let hrsDegree = (hrs / 12) * 360 - 90;
    hrHand.style.transform = `rotate(${hrsDegree}deg)`;
    console.log(hrs, mins, secs);
}

setInterval(setDate, 1000);