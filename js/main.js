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
    year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDay()

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

  // Get months of the year and show one
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  dateDay.innerHTML = day
  dateMonth.innerHTML = `${months[month]},`
  dateYear.innerHTML = year
}
setInterval(clockText, 1000) // 1000 = 1s

/*==================== DARK/LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  )
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](
    iconTheme
  )
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
