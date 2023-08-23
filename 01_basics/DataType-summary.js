// # Primitive 

//       7 types :String, Number , Boolean, null , undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isloggedIn = false;
const outsiteTemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id ===anotherId);


const bigNumber =  29038475092872839475n;
// Reference (Non primitive)

// Array , Objects, Function

const heros = ["skatiman","naagraj", "doga"];
let myObj = {
    name:"aditya",
    age:"22",

}

const myFunction = function(){
    console.log("Hello world ");
}

console.log(typeof heros);