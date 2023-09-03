const coding = ["js" , "ruby" , "java" , "python", "c++"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach((item) =>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item, index , arr)=> {
//     console.log(item, index , arr);
// })

const myCoding = [
    {
        langname: "javascript",
        langFileName: "js"
    },
    {
        langname: "java",
        langFileName: "java"
    },
    {
        langname: "python",
        langFileName: "py"
    },
]

myCoding.forEach( (item) =>{

    console.log(item.langname);
})
