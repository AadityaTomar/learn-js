

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
console.log(loginUserMessage("aditya Tomar"));

