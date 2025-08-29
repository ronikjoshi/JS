/*

Types of memory in JS

- Stack memory
- Heap memory

When stack memory is used meaning you will get a copy of the declared variable 
and in case of heap memory you get a reference of original value meaning any change will be 
caused in the origianl value.

*/

/*
//Stack example:


let myName = "ronikjoshi"
let anotherName = myName
anotherName = "RJ"

console.log(myName)
console.log(anotherName)

*/

/*

In case of heap memory a reference is passed, changed to the second Object, function 
or array will change the first object, function or array as well.

*/