const daysOfWeek = [
  'Sun',
  'Mon',
  'Tues',
  'Wed',
  'Thurs',
  'Fri',
  'Sat'
]
const monthOfYear = [
  'Jan',
  'Feb',
  'Mar',
  'April',
  'May',
  'Jun'
]
const currentDate = new Date()
const day = currentDate.getDay()
const month = currentDate.getMonth()
console.log(month)

if (daysOfWeek[day] === daysOfWeek[0] || daysOfWeek[day] === daysOfWeek[6]) {
  console.log('The Weeknd')
}
else {
  console.log('Work Days')
}

if (monthOfYear[month] === 'Jan') {
  console.log('The month is January')
} else if (monthOfYear[month] === 'Feb'){
  console.log('The month is February')
}
else {
  console.log('The month is not January')
}

//operators , data types , conditional statements



1 + 1 
let greting = "hello" + " world"
// console.log(greting)
// + - / * % ++ --
// 88++
