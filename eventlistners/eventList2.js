const height = document.getElementById("height")
const width = document.getElementById("width")
const color =  document.getElementById("color")
const box = document.getElementById("box")
box.style.backgroundColor = "red"

height.addEventListener("keyup",()=>{
    console.log(height.value)
    box.style.height = height.value + "px"
})
width.addEventListener("keyup",()=>{
    console.log(width.value)
    box.style.width = width.value + "px"
})
color.addEventListener("change",()=>{
    console.log(color.value)
    box.style.backgroundColor = color.value
})
