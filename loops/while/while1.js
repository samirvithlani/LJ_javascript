// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }


var no =123;
var count = 0;
//123 / 10 = 12 replace //count =1
//12 / 10 = 1 replace  // count =2
//1 / 10 = 0 replace   // count =3

// while(no>0){

//     //no =  no / 10
//     //no = parseInt(no / 10);
//     no = Math.floor(no / 10);
//     console.log(no);
//     count++;


// }
// console.log("count....",count);

//var no = 876432
//876432 / 10 = 87643 replace //count =1
//87643 / 10 = 8764 replace  //count =2
//8764 / 10 = 876 replace    //count =3
//876 / 10 = 87 replace      //count =4
//87 / 10 = 8 replace        //count =5
//8 / 10 = 0 replace         //count =6

//find sum of digits
//123 = 1 + 2 + 3 = 6
//5678 = 5 + 6 + 7 + 8 = 26


// var no = 123;
// var rem;
// var sum=0;
// //123 % 10 = 3
// //123 / 10 = 12
// //
// while(no>0){

//     rem = no % 10; //3 2 1
//     sum = sum + rem; //0+3 = 3 , 3+2 = 5 , 5+1 = 6
//     no = Math.floor(no / 10); //12 //1 //0



// }
// console.log("sum....",sum); //6

// //153 = 1*1*1 + 5*5*5 + 3*3*3 = 153

// var no = 153; // rem*rem*rem + rem*rem*rem + rem*rem*rem
// var no = 1634;// rem*rem*rem*rem +


//armstrong....

var no =1634;
var temp1=no;
var digits =0;

//no of digits

while(temp1>0){

    temp1 = Math.floor(temp1 / 10);
    digits++;

}
console.log("digits....",digits);

var temp2 = no;
var rem = 0;
var sum =0;

while(temp2>0){

    rem = temp2 % 10; //3 5 1
    sum = sum +rem ** digits ;
    temp2 = Math.floor(temp2 / 10); //15 1 0

}

console.log("sum....",sum);



