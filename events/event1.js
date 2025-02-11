const test = ()=>{
    alert("test function called...")
}

const changeText = ()=>{
    //h1 tag...

    const txt = document.getElementById("txt") //<h1></h1>
    //console.log(txt)
    //console.log(txt.innerHTML)
    //console.log(txt.innerText)
    txt.innerHTML ="HI"
    txt.style.color ="red"
}

const changeLink = ()=>{


    const link = document.getElementById("link") //<a>
    console.log(link)
    link.href = "https://www.hotstar.com"
    link.innerHTML = "Hotstar"

}