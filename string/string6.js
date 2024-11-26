var data = "hi this is india india is my country";

var count =0;

for(let i=0;i<data.length;i++){
    if(data[i]==" "){
        count++;
    }
}
console.log("space count...",count)
console.log("word count...",count+1)


var userName = "amit kumar";
var username1 ="";
for(let i=0;i<userName.length;i++){
    //amit kumar
    if(userName[i]!=" "){
        //amitkumar
        username1 = username1 + userName[i];
    }

}
console.log("username1...",username1)