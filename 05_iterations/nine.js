const myNums = [1,2,3];

// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc : ${acc} and curval: ${curval}`)
//    return acc + curval
// }, 0)


const myTotal = myNums.reduce((acc, curr) =>acc +curr, 0)

console.log(myTotal);

const shoppingCart = [
  {
    itemsName : "js course",
    price: 2999,
  },

  {
    itemsName : "py course",
    price: 5999,
  },

  {
    itemsName : "data science course",
    price: 12999,
  },

  {
    itemsName : "mobile course",
    price: 2999,
  },

]

const priceToPay = shoppingCart.reduce((acc ,item) => acc + item.price, 0)

console.log(priceToPay);