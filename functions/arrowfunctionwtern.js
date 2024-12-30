// const isValid = (age)=>{
//     return age>=18?true:false
// }

const isValid = (age)=>age>=18?true:false

var flag = isValid(18)
console.log("flag",flag)


// var findMax = (no1,no2)=>{

//     return no1>no2?no1:no2;
// }

var findMax = (no1,no2)=>no1>no2?no1:no2;

var max = findMax(100,200)
console.log(max)


var isSpace = (name)=>name.includes(" ")?true:false

var ans = isSpace("amit thakkar")
console.log(ans)


const isEmpty = (data)=>data.length<=0? true:false

var empty = isEmpty("ok")
console.log("empty???",empty)

