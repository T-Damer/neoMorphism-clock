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

  return { date }
}
setInterval(clock, 1000) // 1000 = 1s

// CLOCK:TEXT
const textHours = document.getElementById('text-hours'),
  textMinutes = document.getElementById('text-minutes'),
  textAmPm = document.getElementById('text-ampm'),
  dateDay = document.getElementById('date-day'),
  dateMonth = document.getElementById('date-month'),
  dateYear = document.getElementById('date-year')

const clockText = () => {
  // Reusing date to be more accurate
  let { date } = clock()
  let hh = date.getHours(),
    mm = date.getMinutes(),
    ss = date.getSeconds(),
    ampm,
    month = date.getMonth(),
    year = date.getFullYear()

  // Establishing am-pm
  if (hh >= 12) {
    hh = hh - 12
    ampm = 'PM'
  } else {
    ampm = 'AM'
  }

  // Show am or pm
  textAmPm.innerHTML = ampm

  // Show zero before hh
  if (hh < 10) {
    hh = `0${hh}`
  }

  // Show hours
  textHours.innerHTML = `${hh}:`

  // Detecting 0 AM and changing to 12 AM
  if (hh == 0) {
    hh = 12
  }

  // Show mm
  textMinutes.innerHTML = mm

  // Show zero before hh
  if (mm < 10) {
    mm = `0${mm}`
  }
}
setInterval(clockText, 1000) // 1000 = 1s
