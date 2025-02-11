const loadImage = () => {
  const image = document.getElementById("image"); //<img>
  image.src = "./delete.jpg";
};

const generateNumber = () => {
  const rno = document.getElementById("rno"); //<h1>
  const won  =document.getElementById("won")
  var randomNo = Math.floor(Math.random() * 1000);
  rno.innerHTML = randomNo;

  if (
    randomNo == 111 ||
    randomNo == 222 ||
    randomNo == 333 ||
    randomNo == 444 ||
    randomNo == 555 ||
    randomNo == 666 ||
    randomNo == 777 ||
    randomNo == 888 ||
    randomNo == 999
  ) {
    console.log("you won...");
    won.innerHTML ="you won...."
  }else{
    won.innerHTML =""
  }
};
