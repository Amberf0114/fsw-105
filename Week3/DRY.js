//returns the sum of 2 numbers
function add(a,b) {
    return a + b;
}
console.log(add(1,4))

//returns the largest of 3 numbers
function largest(a,b,c) {
    return Math.max(a,b,c);
}
console.log(largest(1,2,3));

//returns even or odd
function type(a) {
    if (a%2 == 0)
        return "even";
    else    
        return "false";
}
console.log(type(2));

//function accepts string parameter 
var string = "This is going to be more than twenty characters long.";

function accept(string) {
    if (string.length <= 20) {
        return string + string;
    } else {
        return string.slice(0,string.length/2);
    }
}
console.log(accept(string));