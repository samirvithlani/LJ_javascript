const emojis = ["😂", "🥳", "😎", "🔥", "🤩", "😜", "🎉", "💖"];

const startRain = () => {
    const emoji = document.createElement("div"); //<div>
    emoji.className = "emoji"; //<div class ="emoji">
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]; //<div>🎉</div>

    document.body.appendChild(emoji);

    let x = Math.random() * window.innerWidth;
    let speed = 2 + Math.random() * 25; // Speed between 2 and 5 px per frame

    emoji.style.position = "absolute";
    emoji.style.left = `${x}px`;
    emoji.style.top = "0px"; // Set initial top value

    var fall = setInterval(() => {
        let top = parseInt(emoji.style.top);
        if (top > window.innerHeight) {
            emoji.remove();
            clearInterval(fall);
        } else {
            emoji.style.top = `${top + speed}px`;
        }
    }, 50);

    // Use setTimeout to control new emoji spawns
    setTimeout(startRain, 300);
};

// Start the rain effect
startRain();
