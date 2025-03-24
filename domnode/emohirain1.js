const emojis = ["😂", "🥳", "😎", "🔥", "🤩", "😜", "🎉", "💖"];

const startRain = ()=>{

    const emoji = document.createElement("div") //<div>
    console.log(emoji)
    emoji.className = "emoji" //<div class ="emoji">
    const randomIndex = Math.floor(Math.random()*emojis.length)
    console.log(randomIndex)
    emoji.innerHTML = emojis[randomIndex] //<div>🎉</div>
    const body = document.getElementById("body")
    body.appendChild(emoji)

    let x = Math.random() * window.innerWidth
    let speed = Math.random() * 2000;

    emoji.style.left = `${x}px`
    //emoji.style.left = x+"px"

    var fall  = setInterval(()=>{
        let top  = parseInt(emoji.style.top || 0)
        console.log(top)
        if(top>window.innerHeight){
            emoji.remove()
            clearInterval(fall)
        }
        else{
            console.log("here...")
            emoji.style.top = `${top+speed}px`
        }
        
    },50)

    setInterval(()=>{startRain()},300)

    


}