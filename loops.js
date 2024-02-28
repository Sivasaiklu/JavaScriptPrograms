//loops


//for loop

for(let i=0;i<=5;i++){
    console.log("i = ", i);
}



//while

let i=1
while(i<=5){
    console.log("i= ",i);
    i++;
}



//do-while

let str="sivasai"
do{
    console.log(str);
}while(str=="vasanth")



//for-of loop --> strings

for(let val of str){
    console.log("val - ", val);
}



//for-in loop  --> objects, arrays

let student={
    name: "sivasai", age: 19, cgpa: 9.7,
}

for(let key in student){
    console.log("key - ", key, "and value -  ", student[key]);
}




//guess the number game

let gameNum = 16;
let userNum = prompt("Guess the number to win : ");

while(gameNum != userNum){
    userNum = prompt("Wrong! Guess Again : ");
}

console.log("Congratulations !!! You are Rocking");

