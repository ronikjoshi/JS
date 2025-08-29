//console.log("2" > 1)                //output: true

//comparing to different data types does not always give predictable result

/*
console.log(null > 0)               //output: false 
console.log(null == 0)              //output: false
console.log(null >= 0)              //output: true
*/
/*
Reason for above results:
An equality check == and comparison >,<.>=,<= works differently
Comparison convert null to a number, treating it as 0.
Thats why null >= 0 is true and null > 0 is false.
*/

/*
console.log(undefined > 0)               //output: false 
console.log(undefined == 0)              //output: false
console.log(undefined >= 0)              //output: false
*/

/*
// strict check ===
// It checks values and data types also
console.log("2" == 2)                   //output: true
console.log("2" === 2)                  //output: false
*/


// ++++++++++++++++++++++Types of data types ++++++++++++++++++++++++++++

/*
Primitive: (copy is passed)

1- string
2- number
3- boolean
4- null
5- undefined
6- symbol
7- BigInt

Non Primitive (Reference is allocated directly)

1- Arrays
2- Objects
3- Functions

Java script is dynamically typed language. This means that variable types are determined at
the runtime, and you do not need to explicitly declare the type of a variable before using it.
Example: let x = 10; //x is now a number

C++, typescript, java are statically typed.

Java is more flexible but can lead to potential runtime errors if not handled carefully.
*/

/*
//Symbol (retrunn type 'symbol')

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)
*/

/*

Type of value                      Result

Undefined                          'undefined'
Null                               'object'
Boolean                            'boolean'
Number                             'number'
String                             'string'
Object                             'object'
Function                           'function'
BigInt                             'bigInt'

Data type of Non - primitive data types are called functions and object function for functions
*/
