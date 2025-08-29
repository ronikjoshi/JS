// Explicitly defining a number data type

//const balance = new Number (100)
//console.log(balance)

//const score = 400
//console.log(score)

// .toString() = changes no to string
//console.log(balance.toString())
//console.log(typeof score)
//console.log(balance.toString().length)

// .toFixed(number) => number of digits after decimal)
//console.log(score.toFixed(2))

// .toPrecision(number) => range of significant digit 1-21
// returns a string
//const otherNumber = 23.6452
//console.log(otherNumber.toPrecision(4))
//console.log(typeof(otherNumber.toPrecision(4)))

//.toLocalString()
//const hundreds = 10000000
//console.log(hundreds.toLocaleString())
//console.log(hundreds.toLocaleString('en-IN'))

//Math.abs(negative no) => converts negative value to positive value
//console.log(Math.abs(-4))

//Math.round(no) => roundoff the decimal no to simple no
//console.log(Math.round(4.6))

//Math.ceil(no) => roundoff to upper no only (ceiling)
//console.log(Math.ceil(4.2))

//Math.floor(no) => roundoff to lower no only
//console.log(Math.floor(4.9))

//Math.min(value1, value2,....) => to find the lowest value in the array
//console.log(Math.min(4,3,6,8))

//Math.max(value1, value2,....) => to find the highest value in the array
//console.log(Math.max(4,3,6,8))

//Math.random() => to find random values. Values will always be between 0 to 1
//console.log(Math.random())

//console.log(Math.random()*10)
// Output between 0 to 10 and to avoid 0 we can add 1 to the end
//console.log(Math.random()* 10 + 1)
// better way to write
// console.log((Math.random()* 10) + 1)

//+++++++++++ IMP +++++++++++

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)
//minimum value will be 10 after using the random function