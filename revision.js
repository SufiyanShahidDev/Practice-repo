
// Array Syntax

// array.map((element, index, array) => {
//    return newValue;
// })

let prices = [100, 200, 300];

let pricesWithTax = prices.map(price => price * 1.1);

console.log(pricesWithTax);

// filter() syntax

// array.filter((element) => condition)

let numbers = [5, 12, 8, 20];

let result = numbers.filter(num => num > 10);

console.log(result);