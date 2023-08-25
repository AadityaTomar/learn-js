// singleton  

// objects literals

// Object.create   

const mySym = Symbol("key1")

const JsUser = {
                                                                  
    name:"Aaditya",
    "full name": "Aaditya Tomar",
    [mySym]:"mykey1",
    age:18,
    location:"UK",
    email: "aditya@gamil.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"],

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Aaditya@chatgpt.com"
// Object.freeze(JsUser) 

JsUser.email = "Aditya@microsoft.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`hello JS user`);
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user,  ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());

