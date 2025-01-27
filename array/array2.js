var lang = ["gujarati","hindi","english","marathi","teligu"]


//1st param index pos,2nd param delete count..
console.log(lang)
//lang.splice(1,1)//1st index and 1 is delete count...
//lang.splice(2,3) 
//lang.splice(2,2,"kannad")
var removedElm = lang.splice(3,0,"kannad","malayalam","bihari")
console.log(removedElm)
console.log(lang)