const setColor = ()=>{

    const mydiv = document.getElementById("mydiv")//<div>
    console.log(mydiv)
    const color = document.getElementById("color")
    console.log(color.value)
    //mydiv.style.color ="red"
    mydiv.style.backgroundColor =color.value
}
const setHeight = ()=>{

    const mydiv = document.getElementById("mydiv")//<div>
    const height = document.getElementById("height")
    console.log(height.value)
    mydiv.style.height = height.value+"px"
}
const setWidth = ()=>{

    const mydiv = document.getElementById("mydiv")//<div>
    const width = document.getElementById("width")
    console.log(width.value)
    mydiv.style.width = width.value+"px"
}