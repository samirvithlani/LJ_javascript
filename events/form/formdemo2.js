const submitHandler =(event)=>{

    event.preventDefault()

    const gender = document.getElementsByName("gender") //<input>,<inppt> -->gender arrray
    //console.log(gender)
    for(let i=0;i<gender.length;i++){

        if(gender[i].checked){
            console.log(gender[i].value)
        }
    }


}