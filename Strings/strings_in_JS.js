

const name = "ronik"
const repoCount = 50

//console.log(name + repoCount + "value")
//console.log(name[0])
//console.log(name.length)



// Now a days people use backticks

//console.log(`Hello my name is ${name} and my repo is ${repoCount}`)

// It is called string interpolation

// Another way of declaring a string

const gameName = new String("ronikjoshi")

//console.log(gameName)
//console.log(gameName[0])
//console.log(gameName.length)
//console.log(gameName.toUpperCase())

// .charAt() => Looks for character at given index position
// console.log(gameName.charAt(2))

// .indexOf() => Given character on which index (char n is present on which index)
// I guess it only checks until first given character is found
// In case of no character, output is -1
// console.log(gameName.indexOf('n'))


// .substring(start, end) => substring from a major string (does not accept negative values)
//const newString = gameName.substring(0,4)
//console.log(newString)
// 4th string is not included


// .slice(start, end) => accept negative values
//const newString2 = gameName.slice(2,4)
//console.log(newString2)

// .trim() => removes starting and ending spaces
// const newStringOne = "   ronik    "
// console.log(newStringOne.trim())




// .replace(searchValue, replacement) => replaces a value with different value
const url = "https://ronik.joshi/ronik%98joshi"
console.log(url.replace('%98', '-'))



// .includes('searchString') => to check if given keywords are present or not
console.log(url.includes('ronik'))
console.log(url.includes('sundar'))


// .split('seperator') => seperates based on a given seperator
//  array => ['strings', 'strings', 'strings']

const gameNamee = new String("ronik.joshi.com")
console.log(gameNamee.split('.'))

// Read all functions on google => terminal => console (starting part of 11th video on how to open these functions)
