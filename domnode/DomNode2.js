const root = document.getElementById('root'); //<div>

const myButton = document.createElement("button")
myButton.innerHTML = "Click me"
myButton.addEventListener("click",()=>{
    alert("Hello")
})

root.appendChild(myButton)

var users = ["amit","sumit","shyam","seeta","geeta","akshit"]

const ulTag = document.createElement("ul") //<ul></ul>
for(let i=0;i<users.length;i++){


    const nameButton = document.createElement("button")
    nameButton.innerHTML = users[i]

    nameButton.addEventListener("click",()=>{
        alert(users[i])
    })

    const nameLI = document.createElement("li") //<li></li>,<li></li>,<li></li>
    nameLI.innerHTML = users[i]//<li>amit</li>,<li>sumit</li>,<li>shyam</li>
    nameLI.appendChild(nameButton)

    ulTag.appendChild(nameLI)//<ul><li>amit</li></ul>,<ul><li>amit</li><li>sumit</li></ul>,<ul><li>amit</li><li>sumit</li><li>shyam</li></ul>

}
root.appendChild(ulTag) //<div><ul><li>amit</li></ul></div>,<div><ul><li>amit</li><li>sumit</li></ul></div>,<div><ul><li>amit</li><li>sumit</li><li>shyam</li></ul></div>