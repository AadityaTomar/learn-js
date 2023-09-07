// const tinderUser = new Object()

const tinderUser = {}

 tinderUser.id = "123abc"
 tinderUser.name = "siri"
 tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "aditya",
            lastname: "Tomar"
    }
}

}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "C", 4: "D"}
const obj4 = {5: "E", 6: "F"}

// const obj3 = {obj1, obj2}  

// const obj3 = Object.assign({},obj1, obj2, obj4) 

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3); 

const users = [
    {
        id: 1,
        email: "a@gmail.com",

    },
    {
        id: 2,
        email: "a@gmail.com",

    },
    {
        id: 3,
        email: "a@gmail.com",

    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedI'))
