const  userEmail = []

if( userEmail) {
    console.log("Got user email");
}

else {
    console.log("Don't have user email")
}


// falsy  values

// false, 0, -0, BigInt 0n , "", null, undefined, NAN  

// truethy  values
// "0" , 'false', " ", [], {}, function(){}

// if(userEmail.length === 0) {
//     console.log("Array is empty")
// }

const emptyobj = {}

if(Object.keys(emptyobj).length ===0) {
       console.log("Object is empty");
}