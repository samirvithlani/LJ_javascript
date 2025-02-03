var marks = [21,22,24,18,21,19]
//if this user has marks >20 in all subject then print true or false...

// //every...
// var flag = true;

// for(let i=0;i<marks.length;i++){

//     if(marks[i]<20){
//         flag = false
//         break;
//     }

// }

// console.log(flag)

var flag = marks.every((m)=>{
    return m >20
})
console.log(flag)



