var data = "india";

//var index = data.indexOf("i")
var index = data.indexOf("i")
console.log(index)

var index2 = data.lastIndexOf("i")
console.log(index2)


var lang = "hindi";
var index3 = lang.indexOf("i",2)
console.log(index3)


/*index of manual approch..*/ 


var data1 = "india"
var index4= -1;

for(let i=0;i<data1.length;i++){

    if(data1[i]=="i"){
        //console.log("index...",i)
        index4 = i;
        break;
    }
    
}
console.log("index...",index4)
