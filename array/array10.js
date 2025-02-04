var sales = [90,89,100,234,56,890,78,65,1200,999]
console.log(sales)

const sortSaleByValue = (a,b)=>{
    
    return a -b
}

//sales.sort()
sales.sort(sortSaleByValue)
//sales.sort((a,b)=>a-b)

console.log(sales)

var users = ["amit","sumit","ram","shyam","kunal","Zara"]

console.log(users)
users.sort()
console.log(users)


//prv = 90 89 + 179
//prv = 79 + 100 279

var total = sales.reduce((prv,next)=>{return prv + next},0)
console.log(total)


// var total =0;

// for(let i=0;i<sales.length;i++){

//     total = total + sales[i]
// }

// console.log(total)

