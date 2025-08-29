// Array enables storing a collection of multiple items under a single variable name

//const myArr =[0,1,2,3,true,"Ronik"]

// JavaScript arrays are resizable and can contain a mix of different data types
// JavaScript array-copy-operations create a shallow copies (whose properties share the same references)(heap memory)
// Deep copies - do not share the same reference (stack memory)

//Ways of declaring array
const arra = ["shaktiman","nagraj"]
const newArray = new Array(1,2,3,4)

//Array methods
//array.push()
const myArr = [0,1,2,3,4,5]
myArr.push(6)
//console.log(myArr)

//array.pop(element)
myArr.pop()
//console.log(myArr)

//array.unshift(element) => add element to the beginning of the array
//This creates problem when there are lot of elements (10000+), then we need to move every element
myArr.unshift(6)
//console.log(myArr)

//array.shift(element) => removes first element of the array
myArr.shift()
//console.log(myArr)

//.includes(element) => if given element is present in the array or not
// returns only true or false (type - boolean)
//console.log(myArr.includes(9))

//.indexOf(index no) => looks value at given index no
//console.log(myArr.indexOf(9))
//console.log(myArr.indexOf(3))

//.join() => Adds all the elements of an array into a string seperated by the specified seperator string
const newArr = myArr.join()
//console.log(newArr)
//console.log(myArr)
//console.log(typeof newArr)

//join() = creates and returns a new string by concatenating all of the elements in the array, seperated by commas or a special seperator string.



//.slice(start, end) => returns a copy of a section of an array from start to end
//.splice(start,end) => changes the content of an array by removing or replacing existing elements add/or adding new elements in place

const myArra = [0,1,2,3,4,5]
//console.log(myArr.slice(1,3))
const myAr = [0,1,2,3,4,5]
//console.log(myAr.splice(1,4))
//console.log(myAr)