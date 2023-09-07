// singleton
// object.create

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "aditya",
    "full name": "Aditya Tomar",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipuer",
    email: "adi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "saturday", "sunday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "Adi@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "Adi@Microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
