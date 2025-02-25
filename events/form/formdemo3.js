const submitHandler = (event) => {
  event.preventDefault();

  const nameError = document.getElementById("nameError");
  const ageError = document.getElementById("ageError");
  const genderError = document.getElementById("genderError");
  const hobbyError = document.getElementById("hobbyError")

  const name = document.getElementById("name"); //
  const age = document.getElementById("age");
  if (name.value.trim().length == 0) {
    console.log("Name is required*");
    nameError.innerHTML = "Name is Required*";
    nameError.style.color = "red";
  } else {
    nameError.innerHTML = "";
  }

  if (age.value.trim().length == 0) {
    ageError.innerHTML = "age is required*";
    ageError.style.color = "red";
  } else {
    ageError.innerHTML = "";
    if (age.value < 18 || age.value > 60) {
      ageError.innerHTML = "min age should be 18 and max 60";
    } else {
      ageError.innerHTML = "";
    }
  }

  var isGender = false;
  const gender = document.getElementsByName("gender");
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      isGender = true;
    }
  }

  if (isGender == false) {
    genderError.innerHTML = "gender is required*";
  } else {
    genderError.innerHTML = "";
  }

  var hobbyCount=0;
  const hobbies = document.getElementsByName("hobbies")
  for(let i=0;i<hobbies.length;i++){
    if(hobbies[i].checked){
        hobbyCount++;
    }
  }
  if(hobbyCount<2){
    hobbyError.innerHTML = "min 2 hobbies are required*"
  }
  else{
    hobbyError.innerHTML = ""
  }


};
