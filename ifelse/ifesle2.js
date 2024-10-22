var age =19;
var weight = 50;

if(age>=18){

    console.log("step 1 passed ...")
    if(weight>=50){
        console.log("step 2 passed ...")
    }
    else{
        console.log("eat more...")
    }
}
else{
    console.log("Not eligible")
    console.log("please wait for ",18-age," years")
}