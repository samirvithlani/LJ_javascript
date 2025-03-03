const myButton = document.getElementById("button") //<button>
//console.log(myButton)
myButton.addEventListener("click",()=>{
    alert("Button Clicked")
})
myButton.addEventListener("mouseover",()=>{
    myButton.style.backgroundColor = "green"
    myButton.style.color = "white"
})
myButton.addEventListener("mouseout",()=>{
    myButton.style.backgroundColor = "red"
    myButton.style.color = "black"
})