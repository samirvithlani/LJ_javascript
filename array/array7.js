var users = ["amit","ajay","kunal","ram"]

var x = users.find((u)=>{
    //return u == "ram"
    return u = u.length>4;
})
console.log(x)
if(x!=undefined){
    console.log("elem present")
}
else{
    console.log("elem is not present")
}