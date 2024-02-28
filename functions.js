// function example

function priinter(){
    console.log("This is a function");
}

priinter();

// arrow function

let sum = (a,b) => {
    return a+b;
}

console.log(" sum using arrow function: ", sum(2,3));


// function to count no.of vowels in string

function countVowels(str){
    let v=0;
    for(let i=0; i<str.length; i++){
        if(str[i] =='a' || str[i] =='e' || str[i] =='i' || str[i] =='o' || str[i] =='u' )
            v++;
    }
    return v;
}

const s = "sivasaikumar";
console.log(`the no.of vowels in ${s} are `, countVowels(s));

// by using arrow function to print no.of consonants

const countConsonants = (str) => {
    let c=0;
    for(let i=0; i<str.length; i++){
        if(!(str[i] =='a' || str[i] =='e' || str[i] =='i' || str[i] =='o' || str[i] =='u' ))
            c++;
    }
    return c;
}

console.log(`the no.of consonants in ${s} are `, countVowels(s));


// print the square of the val in the array using forEach loop

let arr = [1,2,3,4,5,6];

console.log("The array is : ", arr);

console.log("for each loop");

arr.forEach( (val) => {
    console.log(val**2);
})

// map function example -> return a new array

console.log("map function");

arr.map( (val) => {
    console.log(val);
})


// filter function -> return a new array


console.log("filter function ")

let evenArr = arr.filter( (val) => {
    return val%2 == 0;
})

console.log("even numbers using filter function", evenArr);


// reduce function -> it performs operations on array and return only single value
// reduce function example to find sum of array elements

let sumOfArr = arr.reduce( (res, curr) => {
    return res+curr;
})

console.log("sum of the array elements using reduce function: ", sumOfArr)


// given an array of student marks. filter out marks of students scored 90

let marks = [78, 98, 90, 94, 87, 33, 67];

let toper = marks.filter( (m) => {
    return m >= 90;
})

console.log("Marks :" ,marks);
console.log("Above 90 marks are: ", toper);


// take n as a user input, generate an array from 1 to n. find sum and product of the values in the array using reduce function

const n = prompt("Enter a value: ");

let array = [];

for(let i=1; i<=n; i++){
    array[i-1] = i;
}

console.log(`the array from 1 to ${n} is`, array);

let arrSum = array.reduce( (res, curr) => {
    return res+curr;
})

let arrProd = array.reduce( (res, curr) => {
    return res*curr;
})

console.log(`the sum of the array values from 1 to ${n} is`, arrSum);
console.log(`the product of the array values from 1 to ${n} is`, arrProd);


console.log("Thank You!!!")



