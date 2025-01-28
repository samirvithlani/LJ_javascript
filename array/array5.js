var users = ["ram","shyam","sumit","sanjay","saan"]

var filtUser =  users.filter((user)=>{
    return user.length>4 // true false... [predicate st]
})
//name length >4

// for(let i=0;i<users.length;i++){


//     //ram
//     //shyam
//     if(users[i].length>4){
//         filtUser.push(users[i])
//     }
// }
console.log(filtUser)

var filtUser2 = users.filter((user)=>{
    return user.startsWith("sh")
})
console.log(filtUser2)