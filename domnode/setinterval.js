var count =0
var id = setInterval(()=>{
    count++;
    console.log("count  = ",count)
    if(count==10){
        clearInterval(id)
    }
},1000)

