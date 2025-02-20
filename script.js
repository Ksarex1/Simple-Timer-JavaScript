const days = document.querySelector(".days")
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")

let datePicker = new Date(2025, 11, 31)
let dateCurrent = new Date()

updateDate()

setInterval(updateDate, 1000)
function updateDate() {
    dateCurrent = new Date()
    let raznost = datePicker - dateCurrent
    let currentDays = Math.floor(raznost / (1000 * 60 * 60 * 24))
    let currentHours = Math.floor((raznost % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let currentMinutes = Math.floor((raznost % (1000 * 60 * 60)) / (1000 * 60))
    let currentSeconds = Math.floor((raznost % (1000 * 60)) / (1000))
    days.innerHTML = currentDays
    hours.innerHTML = currentHours
    minutes.innerHTML = currentMinutes
    seconds.innerHTML = currentSeconds
}