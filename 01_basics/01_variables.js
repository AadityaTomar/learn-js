const accountId = 123457
let accountEmail = 'aditya@google.com'
var accountPassword = "123456"
accountCity = 'Jaipur'

let accountState;

// accountId = 2 not allowed

accountEmail ="power@google.com"
accountPassword = "00009"
accountCity = "Benaluru"
console.log(accountId);

// Prefer not to use var
// because of issue in block scope and fuctional scope

console.table([accountEmail, accountId , accountPassword, accountCity,accountState])