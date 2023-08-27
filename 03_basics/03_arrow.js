const user = {
    username: "aditya",
    price:999,

    welcomeMessage: function() {

        console.log(`${this.username} , welcome to website`)
        // console.log(this); 
    }     
    
}

// user.welcomeMessage()
// user.username = "adi"
// user.welcomeMessage()

// console.log(this); 

// function chai() {
//     let username = "ADITYA"
//     console.log(this.username)
// }

// chai();

const chai = () => {
    let username = "Aditya"
    console.log(this);
}

// chai() 

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// }

// const addTwo = (num1, num2) =>  num1 + num2;   

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "Aditya"})
  

console.log(addTwo(3,7));

const myArray = [2,5,3,7,8]
