

function sayMyName() {
    console.log("A")
    console.log("D")
    console.log("I")
    console.log("T")
    console.log("Y") 
    console.log("A")
}

// sayMyName()  

// function addTwoNumber(number1, number2){
//      console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){

    // let result  = number1 + number2
    // return result;

    return number1 + number2
}


const result = addTwoNumber(3,5);

// console.log("Result : ",result) 

function loginUserMessage(username = "adi") {

    if(!username){
          console.log("PLease enter a username");
          return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Aditya"));
// console.log(loginUserMessage("aditya Tomar")); 

function calculateCartPrice(va1, val2, ...num1) {
     return num1;
}

console.log(calculateCartPrice(2,200,500,450));

const user = {

    username: "adi",
    price: 199,
}

function handleObject(anyobject) {
     console.log(`username is ${anyobject.username}  and price is${anyobject}`)
   
}


handleObject({
    username: "aditya",
    price:399,
});

const myNewArray = [200,400,100,600];

function returnSecondValue(getAarry){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,500]));