var marks = [12,22,34,56,78,90]

console.log(marks)
//console.log(marks[0])
marks.push(100)
console.log(marks)
var removedELm = marks.pop()
console.log("remving...",removedELm)
console.log(marks)


marks.unshift(99)
console.log(marks)
var removedELm = marks.shift()
console.log("remving...",removedELm)
console.log(marks)

// for(let i=0;i<marks.length;i++){
//     console.log(marks[i])
// }