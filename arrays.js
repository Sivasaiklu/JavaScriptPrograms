
// arrays

let arr = [1,2,3,4,5,6,7];
console.log(arr);



// push is used to add at the end

arr.push(8);
console.log(arr);



//pop is used to delete at end and return

arr.pop();
console.log(arr);



// prints array length

size = arr.length;
console.log(size);



// toString used to convet array to string

console.log(arr.toString())



// concat is used to add multiple arrays

let heros = ["allu arjun", "akhil", "ram"]
let heroines = ["anushka", "samantha", "tapsi"]

console.log(heros.concat(heroines));



// unshift is used to add at the start

arr.unshift(25);
console.log(arr);



// shift is used to delete at start

arr.shift();
console.log(arr);



// slice is used to return piece of string 

console.log(arr.slice(2,4));


// splice is used to manipulate the original array like add, remove, replace

let hero = ["allu arjun", "akhil", "ram", "prabhas"];
heros.splice(2,2, "nani", "arjun");
console.log(hero);



// looping in the array (i) for loop

for(let i=0; i<size; i++){
    console.log(`index ${i} is ${arr[i]}`);
}




// looping using for - of loop

for(let val of arr){
    console.log(val);
}

