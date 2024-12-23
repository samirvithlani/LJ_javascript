function test(){
    console.log("no return type no arg...")
}

test();

const test1 = ()=>{
    console.log("arrwo function  no return type no arg..")
}
test1()

function add (no1,no2){
    return no1 + no2;
}

var ans = add(100,200)
console.log(ans)


const add1=(no1,no2)=>{
    return no1 + no2;
}

var ans = add1(100,20)
console.log(ans)

//single line arrow function

const add2 = (no1,no2)=>no1+no2;
var ans = add2(100,2000)
console.log(ans)




const getFullName = (fname,lname)=>fname+lname

var fullName = getFullName("ram","sharma")
console.log(fullName)





