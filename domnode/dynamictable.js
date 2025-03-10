var users = [
    {
        id:1,
        name:"Amit",
        age:30,
        salary:30000,
        gender:"male"
    },
    {
        id:2,
        name:"Sumit",
        age:25,
        salary:25000,
        gender:"male"
    },
    {
        id:3,
        name:"Rajvi",
        age:35,
        salary:35000,
        gender:"female"
    }
]

const tbody = document.getElementById("tablebody"); //<tbody> tag

for(let i=0;i<users.length;i++){
    const tr = document.createElement("tr"); //<tr> 3

    const idTD = document.createElement("td"); //<td></td>
    idTD.innerHTML = users[i].id; //<td>1</td>

    const nameTd = document.createElement("td");
    nameTd.innerHTML = users[i].name;

    const ageTd = document.createElement("td");
    ageTd.innerHTML = users[i].age;

    const salaryTd = document.createElement("td");
    salaryTd.style.backgroundColor = users[i].salary >=30000 ?"yellow":"black"
    salaryTd.innerHTML = users[i].salary;

    const genderTd = document.createElement("td");
    genderTd.style.color =  users[i].gender == "male"?"blue":"pink";
    //genderTd.style.color =  "blue"
    genderTd.innerHTML = users[i].gender;


    tr.appendChild(idTD); //<tr> <td>1</td> </tr>
    tr.appendChild(nameTd);
    tr.appendChild(ageTd);
    tr.appendChild(salaryTd);
    tr.appendChild(genderTd);

    tbody.appendChild(tr); // <tbody> <tr> </tr> </tbody>
}