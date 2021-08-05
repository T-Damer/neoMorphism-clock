// CLOCK ROTATION AND DATE 
var hours = document.getElementById('clock-hours'),
minutes = document.getElementById('clock-minutes'),
seconds = document.getElementById('clock-seconds'),

var clock = () => {
    var date = new Date()

    var hh = date.getHours() * 30,
    mm = date.getMinutes() * 6,
    ss = date.getSeconds() * 6

    hours.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}

setInterval(clock, 1000) // 1000 = 1s
// CLOCK TEXT 


