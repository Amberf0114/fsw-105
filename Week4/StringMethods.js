// Part 1: Concatinated Uppercase/Lowercase
var string = "Hello"

function capitalizeAndLowercase1(a) {
    return a.toUpperCase() + a.toLowerCase();
}
console.log(capitalizeAndLowercase1(string))

// Part 2: Return a number half the length and rounded down
var string2 = "Hello World"

function findMiddleIndex(str) {
    if (str.length%2 == 0) {
        return str.slice(0,str.length/2);
   } else {
       return str.slice(0,str.length/2);(Math.floor(str));
    }
}
console.log(findMiddleIndex(string2))

//Part 3: Return the first half of the string using .slice


function returnFirstHalf(str) {
    return str.slice(0,str.length/2);
}
console.log(returnFirstHalf(string2))

//Part 4: return first half CAPS, last half lower, and if string has odd number of characters, first half gets cut short a character


function capitalizeAndLowercase(str) {
    var fHalf = str.slice(0, str.length/2)
    var sHalf = str.slice((str.length - 1)/ 2)
    return fHalf.toUpperCase() + sHalf.toLowerCase()
}
console.log(capitalizeAndLowercase(string))
console.log(capitalizeAndLowercase(string2))
