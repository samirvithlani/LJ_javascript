// //var x = prompt("please enter your age")
// var x = parseInt(prompt("please enter your age:\n ok"))
// console.log("value of x = ",x+100) //"12"
// console.log(typeof x)

// //alert(x)



var no1 = parseInt(prompt("Enter No 1"))
var no2 = parseInt(prompt("Enter No 2"))
var choice = parseInt(prompt("Enter 1 for Add:\n Enter 2 Sub:\n Enter 3 For Mul"))


function add(no1,no2){
    return no1 + no2;
}
function sub(no1,no2){
    return no1 - no2;
}
switch(choice){


    case 1:
        var ans = add(no1,no2)
        alert(ans)
        break;
    case 2:
        var ans = sub(no1,no2)
        alert(ans)
    break;

}


