
// let hours = new Date('June 22 2023 12:00:00').getHours()

// if(hours >= 6 && hours < 12) {
//     alert('GOOD MORNING!')
// } else if(hours >=12 && hours < 18) {
//     alert('GOOD DAY!')
// } else if(hours >= 18 && hours < 22) {
//     alert('GOOD EVENING!')
// } else {
//     alert('GOOD NIGHT!')
// }
// console.log(hours);




let date = new Date('June 23 2023 17:02:00') 
let now = new Date()
let alarm = date - now
let days = Math.floor(alarm / 1000 / 60 / 60 / 24)
let hours = Math.floor(alarm / 1000 / 60 / 60) % 24
let minutes = Math.floor(alarm / 1000 / 60) % 60
let seconds = Math.floor(alarm / 1000) % 60
if(alarm <= 0) {
    alert('Урок начался!!!')
} else {
    console.log(`${days}:${hours}:${minutes}:${seconds}`); 
}

