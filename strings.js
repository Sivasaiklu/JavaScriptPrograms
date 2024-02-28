// strings and its methods


let str = "siva";

console.log(str);
console.log("string length is ", str.length);
console.log("Upper Case : ", str.toUpperCase());
console.log("Lower case : ", str.toLowerCase());
console.log(str.replace("i", "hi"));
console.log(str.charAt(3));

let str1 = "sivasai", str2 = "kumar";
console.log(str1.concat(str2));



//template literals example 1

let sentence = `My name is Sivasai`;
console.log(sentence);



//template literals example 2

let obj = { 
    item: "pen", 
    cost: 5, 
};

let res = `the cost of ${obj.item} is ${obj.cost}rs`;
console.log(res);




// ask user to enter fullname and display his username as @ followed by fullName followed by length of the fullName

let fullName = prompt("Enter Your Full Name without spaces :");

// let userName = "@"+fullName+fullName.length;  
let userName = `@${fullName}${fullName.length}` // two ways are correct we can use any of the way

console.log("According to your name the username is ", userName)