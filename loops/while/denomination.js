var amount =50;
var note500 =0,note200=0,note100=0,note50=0,note20=0,note10=0,note5=0,note2=0,note1=0;

while(amount>0){

    if(amount>=500){
        note500++; //1
        amount = amount - 500; //499
    }
    if(amount>=200){
        note200++; //1 //2
        amount = amount - 200; //299 //99
    }
    console.log("amount....",amount);
    if(amount>=100){
        note100++; 
        amount = amount - 100; 
    }
    if(amount>=50){
        note50++; //1
        amount = amount - 50;  //49
    }
    if(amount>=20){
        note20++; //2
        amount = amount - 20; //9
    }
    if(amount>=10){
        note10++; 
        amount = amount - 10; 
    }
    if(amount>=5){
        note5++; 
        amount = amount - 5; 
    }
    if(amount>=2){
        note2++; 
        amount = amount - 2; 
    }
    if(amount>=1){
        note1++; 
        amount = amount - 1; 
    }
}
console.log("note500....",note500);
console.log("note200....",note200);
console.log("note100....",note100);
console.log("note50....",note50);
console.log("note20....",note20);
console.log("note10....",note10);
console.log("note5....",note5);
console.log("note2....",note2);
console.log("note1....",note1);