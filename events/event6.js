const generateNumber = (event)=>{

    console.log(event)
    const mydiv = document.getElementById("mydiv")
    //console.log(mydiv)
    const randomNo = Math.floor(Math.random()*1000)
    //console.log(randomNo)
    mydiv.innerHTML = "<h1>"+randomNo+"</h1>"
    
    var no = randomNo;
    var rem=0;
    var sum=0;

    while(no>0){

        rem = no % 10
        sum = rem + (sum*10)
        no = Math.floor(no/10)

    }
    console.log("sum",sum)
    if(randomNo ==sum){
        alert("palindrome..."+sum)
    }

}