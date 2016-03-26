// print "How old are you?", 
// age = raw_input()
// print "How tall are you?",
// height = raw_input()
// print "How much do you weigh?",
// weight = raw_input()
// 
// print "So, you're %r old, %r tall and %r heavy." % (age, height, weight)

// set prompt as variables
var age = 35;
var height = '6\'4\"';
var weight = 130 + 'lbs';

console.log("So you're " + age + ' years old, ' + height + " tall and " + weight + ' heavy'); 

// using npm prompt

var prompt = require('prompt')

prompt.start();

console.log("How old are you?");
console.log("How tall are you?");
console.log("How much do you weigh?");

prompt.get(['age', 'height', 'weight'], function (err, result) {

console.log("So you're " + result.age + ' old ' + result.height + " and " + result.weight + ' heavy'); 
});