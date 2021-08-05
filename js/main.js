// CLOCK ROTATION AND DATE
const hours = document.getElementById('clock-hours'),
  minutes = document.getElementById('clock-minutes'),
  seconds = document.getElementById('clock-seconds')

const clock = () => {
  let date = new Date()

  let hh = date.getHours() * 30
  let mm = date.getMinutes() * 6
  let ss = date.getSeconds() * 6

  hours.style.transform = `rotateZ(${hh + mm / 12}deg)`
  minutes.style.transform = `rotateZ(${mm}deg)`
  seconds.style.transform = `rotateZ(${ss}deg)`
}

setInterval(clock, 1000) // 1000 = 1s

// CLOCK:TEXT

const textHours = document.getElementById('text-hours'),
  textMinutes = document.getElementById('text-minutes'),
  textAmPm = document.getElementById('text-AmPm'),
  dateDay = document.getElementById('date-day'),
  dateMonth = document.getElementById('date-month'),
  dateYear = document.getElementById('date-year')

const clockText = () => {}
