




















// Primitive

// 7 type :String,Number, Boolearn, null , underfined, Symbol, BigIng
  
const score = 100;
const scoreValue = 100.3;

const isloggedIn = false;
const outSideTemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

// const bigNumber = 243523987234n

// Referene (Non primitive)

// Array, Objects, Fuctions

const heros =["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "aditya",
    age: 22,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof outsideTemp);
console.log(typeof myfunction);
console.log(typeof heros);
console.log(typeof Symbol);