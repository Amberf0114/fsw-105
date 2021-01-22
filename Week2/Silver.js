var numStr ="1";
if (numStr === 1) {
    console.log ("strict")
} if (numStr == 1) {
    console.log ('"loose or abstract"')
} else {
    console.log ("not equal at all")
}

var firstNum =1;
var secondNum =2;

if (firstNum <= secondNum && secondNum === 4) {
    console.log("yes")
} else {
    console.log("no")
}