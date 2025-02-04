// var user = {
//     id:101,
//     name:"amit"
// }

var users = [
    {
        id:101,
        name:"ram",
        age:23
    },
    {
        id:102,
        name:"amit",
        age:25
    },
    {
        id:103,
        name:"kunal",
        age:25
    },
]

// for(let i=0;i<users.length;i++){
//     console.log(users[i].id +  " "+users[i].name + " "+users[i].age)
// }

users.forEach((user)=>{
    console.log(user.id +  " "+user.name + " "+user.age)
})

//get all name from user 

var userNames = users.map((user)=>{
    return user.name
})
console.log(userNames)


//id:1000
//name:upperCase
//age:1

var newArray = users.map((user)=>{
    return {
        id:user.id +1000,
        name:user.name.toUpperCase(),
        age:user.age+1
    }
})
console.log(newArray)
