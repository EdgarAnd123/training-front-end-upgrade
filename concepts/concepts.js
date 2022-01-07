/* Object Literal */
let person = {
    firstName: 'Edgar',
    lastName: 'Sanchez',

    getFunction: function() {
        return `The name of the person is ${person.firstName} ${person.lastName}`
    },

    phoneNumber: {
        mobile: '1234512',
        landline: '646'
    }
}

console.log(person.getFunction());
console.log(person.phoneNumber.landline);

/* Functions */
function personage(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let person1 = new personage('Edgar', 'Sanchez');
let person2 = new personage('Andres', 'Hernandez');

console.log(`${person1.firstName}`);
console.log(`${person2.lastName} ${person2.lastName}`);

/* Object Create Method */
const coder = {
    isStudying: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}, am I studying?: ${this.isStudying}`);
    }
}

// Object.create() method
const me = Object.create(coder);
me.name = 'Mukul';
me.isStudying = true;
me.printIntroduction();

/* Classes */
class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }

    getDetails() {
        return `The name of the bike is ${this.name}`;
    }    
}

let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
 
console.log(bike1.name);    // Hayabusa
console.log(bike2.maker);   // Kawasaki
console.log(bike1.getDetails());

// Defining class in a Traditional Way.
function Vehiculo(name,maker,engine){
    this.name = name,
    this.maker = maker,
    this.engine = engine
};
 
Vehiculo.prototype.getDetails = function(){
    console.log('The name of the bike is '+ this.name);
}

let vehiculo1 = new Vehiculo('Hayabusa','Suzuki','1340cc');
let vehiculo2 = new Vehiculo('Ninja','Kawasaki','998cc');
 
console.log(vehiculo1.name);
console.log(vehiculo2.maker);
console.log(vehiculo1.getDetails());

/* Abstraction example */
function persons(fname,lname){
    let firstname = fname;
    let lastname = lname;
 
    let getDetails_noaccess = function(){
        return (`First name is: ${firstname} Last
            name is: ${lastname}`);
    }
 
    this.getDetails_access = function(){
        return (`First name is: ${firstname}, Last
            name is: ${lastname}`);
    }
}
let person3 = new persons('Mukul','Latiyan');
console.log(person3.firstname);
console.log(person3.getDetails_noaccess);
console.log(person3.getDetails_access()); 

/* Inheritance example */
class persona {
    constructor(name) {
        this.name = name;
    }

    toString(){
        return (`Name of person: ${this.name}`);
    }
}

class students extends persona {
    constructor(name,id) {
        super(name);
        this.id = id;
    }

    toString(){
        return (`${super.toString()},Student ID: ${this.id}`);
    }
}

let student10 = new students('Mukul',22);
console.log(student10.toString());