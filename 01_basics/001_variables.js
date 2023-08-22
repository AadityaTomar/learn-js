const  accountId = 144553;
let accountEmail = "Aditya@google.com";
var  accountPassword = "12345";
accountCity = "Jaipur";

let accountState;

// accountId = 2;  // not allowed 

console.log(accountId);

accountEmail = "ad@adi.com";
accountPassword = "212121";
accountCity = "Bengaluru";

/*
  Prefer not to use var 
  because of issue in block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);