// objects in JS 

const student = {
    name: "sivasai",
    age: 20,
    cgpa: 9.5,

    printStudentInfo (){
        console.log(`${this.name} age is ${this.age} and his cgpa is ${this.cgpa}`);
    }
}


//  classes in JS

class TataCar {

    start(){
        console.log("car started");
    }

    stop(){
        console.log("car stopped");
    }

}
// creating objects for TataCar

let nexon = new TataCar();
let indigo = new TataCar();



// constructors in classes

class Car {

    constructor(name, mileage){
        this.name = name;
        this.mileage = mileage;
    }

    printCarInfo(){
        console.log(`${this.name} car has ${this.mileage} mileage`);
    }
    
}


let car1 = new Car("nexon", 20);
let car2  = new Car("indigo", 19);


// inheritance in JS

class Person{
    eat(){
        console.log("person eats");
    }
}

class Adult extends Person{
    marry(){
        console.log("adult marry");
    }
}

let a1 = new Adult();


// classes example


class User{

    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(this.name, this.email);
    }
    
}

let s1 = new User("sivasai", "sivasainookala@gmail.com");
let s2 = new User("kushal", "kushal@gmail.com");


class Admin extends User{

    constructor(name, email){
        super(name, email);
    }

}

let admin1 = new Admin("dean", "dean@gmail.com");