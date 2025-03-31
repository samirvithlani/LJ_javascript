//const id = document.getElementById("ab")
//const id = document.querySelector("#ab") //#idname

//const class = document.querySelector(".ab") // name

const body = document.querySelector("#root");
console.log(body);

var tasks = [
  {
    id: 1,
    name: "get Backup",
    description: "miss session get backup.",
    status: "done",
    title: "backup",
  },
  {
    id: 2,
    name: "go to market",
    description: "go to market for purchase nothing.",
    status: "done",
    title: "market",
  },
];

const createNote = () => {
    body.innerHTML =""
  for (let i = 0; i < tasks.length; i++) {
    const div = document.createElement("div");
    div.className = "sticky-note";

    //ttitle
    const title = document.createElement("p");
    title.innerHTML = tasks[i].title;

    const description = document.createElement("p");
    description.innerHTML = tasks[i].description;

    div.appendChild(title);
    div.appendChild(description);

    body.appendChild(div);
  }
};
createNote()

const handleSubmit = (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("desc").value;

  const obj = {
    title: title,
    description: description,
  };

  tasks.push(obj)
  createNote()
};
