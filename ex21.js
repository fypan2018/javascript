// def add(a, b):
// 	print "ADDING %d + %d"  % (a, b)
// 	return a + b
// 	
// def subtract(a, b):
// 	print "SUBTRACTING %d - %d" % (a, b)
// 	return a - b
// 	
// def multiply(a, b):
// 	print "MULTIPLYING %d * %d" % (a, b)
// 	return a * b
// 	
// def divide(a, b):
// 	print "DIVIDING %d / %d" % (a, b)
// 	return a / b
// 	
// print "Let's do some math with just functions!"
// 
// age = add(30, 5)
// height = subtract(78, 4)
// weight = multiply(90, 2)
// iq = divide(100, 2)
// 
// print "Age: %d, Height: %d, Weight: %d, IQ: %d" % (age, height, weight, iq)
// 
// #A puzzle for the extra credit, type it in anyway.
// print "Here is a puzzle."
// 
// what = add(age, subtract(height, multiply(weight, divide(iq, 2))))
// 
// print "That becomes: ", what, "Can you do it by hand?" 

function add(a ,b) {
    console.log("ADDING " + a + ' + ' + b); 
    return a + b;
}

function subtract(a, b) {
    console.log('SUBTRACTING '+ a + ' - ' + b);
    return a - b;
}

function multiply(a, b) {
    console.log("MULTIPLYING " + a + ' * ' + b);
    return a * b;
}

function divide(a, b) {
    console.log("DIVIDING " + a + ' / ' + b);
    return a / b;
}

console.log("Let's do some math with just functions!");

var age = add(30, 5);
var height = subtract(78, 4);
var weight = multiply(90, 2);
var iq = divide(100, 2);

console.log("Age: " + age + ', Height: ' + height + ', Weight: ' + weight + ', IQ: ' + iq);

console.log("Here is a puzzle.");

var what = add(age, subtract(height, multiply(weight, divide(iq, 2))));

console.log("That becomes: " + what + ". Can you do it by hand?");


