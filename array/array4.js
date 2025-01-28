var users = ["ram","shyam","sumit","sanjay","saan"]

//forEach..

//users[i]
users.forEach((u)=>{
    console.log(u)
})
//MAP
//var upperUser = []
// for(let i=0;i<users.length;i++){

//     upperUser.push(users[i].toUpperCase())
// }
var upperUser = users.map((u)=>{
    return u.toUpperCase()
})
console.log(upperUser)


var sales = [100,120,140,200,250,400,100]
var proSales = sales.map((s)=>{
    return s*1.2
})
// for(let i=0;i<sales.length;i++){


//         proSales.push(sales[i] * 1.2)

// }
console.log(proSales)