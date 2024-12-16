var data = "hi this is India";
//var ss = data.substring(3,8)
var ss = data.substring(3)
//var ss = data.slice(3,10)
console.log(ss)


var se =1
var ee =7

var mydata = "hi this is Royal Technosoft"
var ss1="";

if(!se>=0 || ee<mydata.length){
    for(let i=se;i<ee;i++){

    ss1 = ss1 + mydata[i];

    }
}
else{
    console.log("checck ending index...")
}
console.log(ss1)