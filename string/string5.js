//string -->char --> ascii|unicode values
//A ->65 ,Z ->90
//a ->97 ,z ->122
//space ->32
//0 ->48 ,9 ->57


var user = "Amit";
console.log(user[0])
console.log(user.charAt(0))

console.log(user.charCodeAt(0))//0th index -->char code
console.log(user.codePointAt(0))//0th index -->char code


//String class function 

console.log("65",String.fromCharCode(65))

// for(let i=65;i<=90;i++){
//     console.log(i,String.fromCharCode(i))
// }


var country = "india";
country = country.toUpperCase();
console.log(country)
country = country.toLowerCase();
console.log(country)

//A - a 
//65 - 97 = 32





