var readlineSync = require('readline-sync');

var num1 = readlineSync.questionInt("Please enter the first number: " + '');
var num2 = readlineSync.questionInt("Please enter the second number: " + '');
var enteredOperator = readlineSync.question("What operation do you want to perform? Enter add/sub/mult/div: " + '');

function add(a,b) {
    return a+b;
}
function sub(a,b) {
    return a-b;
}
function mult(a,b) {
    return a*b; 
}
function div(a,b) {
    return a/b;
}

function calculator(a,b,c) {
    if (c == "add") {
        return add(a,b);
    } else if (c === "sub") {
        return sub(a,b);
    } else if (c === "mult") {
        return mult(a,b);
    } else if (c === "div") {
        return div(a,b);
    }
}
console.log("Result is: " + calculator(num1,num2,enteredOperator));
