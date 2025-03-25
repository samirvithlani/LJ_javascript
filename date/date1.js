//date class --> object...

var date = new Date()
//0 --> jan
//11 --> Dec
//var date = new Date(2012,11,12,16,34,35)
//var date = new Date("14-02-2025") invalid date
//var date = new Date("2025-02-14T12:10:20")
console.log(date)

//1970 1st jan 00:00:00
console.log("time...",date.getTime())
console.log(date.getFullYear())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMonth())
console.log(date.getMinutes())


console.log(date.getUTCHours())