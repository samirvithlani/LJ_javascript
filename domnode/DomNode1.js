const root = document.getElementById('root'); //<div>

const h1Tag = document.createElement("h1") //<h1>
h1Tag.innerHTML = "Hello World"
root.appendChild(h1Tag)


var users = ["ram","shyam","seeta","gita"]
for(let i=0;i<users.length;i++){

//h2,h2,h3,h4....
    const h2Tag = document.createElement("h2") //<h2></h2>,<h2></h2>,<h2></h2>
    h2Tag.innerHTML = users[i]//<h2>ram</h2>,<h2>shyam</h2>,<h2>seeta</h2>
    root.appendChild(h2Tag)//..<div><h2>ram</h2></div>

}