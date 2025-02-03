var marks = [21,22,23,22,24,18,22]

//some

// var flag = false;

// for(let i=0;i<marks.length;i++){

//     if(marks[i]>=24){
//         flag = true;
//         break;
//     }
// }
// console.log(flag)


var flag = marks.some((m)=>{
    return m>=24;
})

console.log(flag)