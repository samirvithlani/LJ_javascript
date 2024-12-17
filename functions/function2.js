function sum(a,b){

    console.log("sum function called..")
    let ans = a + b;

    //return ans;
    return a + b;

}

var x = sum(100,200)
console.log("ans = ",x)



function greetings(name){


    return "Hello "+ name


}

var greet = greetings("MS")
console.log(greet)
greet = greetings("Amit")
console.log(greet)

function isValid(age){
    if(age>=18){
        return true;
    }
    else{
        return false
    }
}

var flag = isValid(20)
console.log(flag)

if(isValid(16)){
    console.log("valid..")
}
else{
    console.log("not valid")

}