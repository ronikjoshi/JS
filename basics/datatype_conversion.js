"use strict";
// Ways to use typeof

/*
let age = 27
console.log(typeof age)
console.log(typeof (age))
*/

// +++++++++++++++++++++++++ Conversion to number +++++++++++++++++++++++++++++++++++++++++++++

//Conversion of string to number

/*
let score = "33"
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)                              //Output = 33
*/

/*
let score = "33abc"
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)                              //Output = NaN
*/

/*
//In case of null

let score = "null"
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)                              //Output = NaN
*/

/*
//In case of undefined

let score = "undefined"
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)                              //Output = NaN
*/

/*
//In case of boolean

let score = "true"
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)                              //Output = NaN
*/

/*
//In case of string

let score = "thank"
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)                              //Output = NaN
*/


// ++++++++++++++++++++++++++++++ Conversion to boolean +++++++++++++++++++++++++++++++++

/*
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)                         //Output = true
*/

/*
let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)                         //Output = false
*/

/*
let isLoggedIn = "string"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)                         //Output = true
*/

// ++++++++++++++++++++++++++++++ Conversion to string +++++++++++++++++++++++++++++++++


let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)                       //Output = string
console.log(stringNumber)                              //Output = 33


