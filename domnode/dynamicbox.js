const root = document.getElementById("root");

const createBox = () => {

    //function call.... random number of boxes
    

  root.innerHTML = "";
  const number = document.getElementById("number");
  const randomNo = Math.floor(Math.random() *number.value ) + 1;
  console.log(randomNo);
  for(let i=1;i<=number.value;i++){
    const box = document.createElement("div")//<div>
    box.style.width = "50px";
    box.style.height = "50px";
    box.style.backgroundColor = "red";
    box.style.margin = "10px";
    box.style.inlineBlock = "inline-block";
    box.style.display = "inline-block";
    box.innerHTML = "<h4><center>"+i+"</center></h4>";
    
    box.addEventListener("click",()=>{
        box.style.backgroundColor = "green";
        if(randomNo == i){
            box.innerHTML ="<h4><center>💣</center></h4>";
        }
    })

    root.appendChild(box);
  }
};
