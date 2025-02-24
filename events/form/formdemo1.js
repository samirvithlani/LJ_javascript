const submitHandler = (event)=>{
    event.preventDefault() 

    const nameOutput = document.getElementById("nameOutput")
    const ageOutput = document.getElementById("ageOutput")
    const countryOutput = document.getElementById("countryOutput")
    const output = document.getElementById("output")

    const name = document.getElementById("name") //<input>
    //console.log(name.value)
    nameOutput.innerHTML = name.value

    const age = document.getElementById("age")
    //console.log(age.value)
    ageOutput.innerHTML = "AGe = "+age.value

    const country = document.getElementById("country")
    //console.log(country.value)
    countryOutput.innerHTML = `Country = ${country.value}`


    const color = document.getElementById("color")
    console.log(color.value)

    output.style.color =color.value 

    
}