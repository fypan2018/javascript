// #creates the function cheese_and_crackers
// def cheese_and_crackers(cheese_count, boxes_of_crackers):
// 	print "You have %d cheeses!" % cheese_count
// 	print "You have %d boxes of crackers!" % boxes_of_crackers
// 	print "Man that's enough for a party!"
// 	print "Get a blanket. \n"
// 
// #passes the function two arguments (20, 30)	
// print "We can just give the function numbers directly:"
// cheese_and_crackers(20, 30)
// 
// #creates two variables and sets their value and then passes the variables into the functions as arguments
// print "OR, we can use variables from our script:"
// amount_of_cheese = 10
// amount_of_crackers = 50
// 
// cheese_and_crackers(amount_of_cheese, amount_of_crackers)
// 
// #uses math to add numbers together and use their result as the functions arguments
// print "We can even do math inside too:"
// cheese_and_crackers(10 + 20, 5 + 6)
// 
// #uses variables and math together and uses their combined value as the functions arguments
// print "And we can combine the two, variables and math:"
// cheese_and_crackers(amount_of_cheese + 100, amount_of_crackers + 1000)
// 
// def name(first_name, last_name):
// 	print "My first name is %s" % first_name
// 	print "My last name is %s" % last_name
// 	
// name('Kim', 'Crayton')
// 
// your_first_name = "Sam"
// your_last_name = "Smith"
// 
// name(your_first_name, your_last_name)
// 
// print "What is your first name?"
// cat = raw_input()
// print "What is your last name?"
// dog = raw_input()
// 
// name(cat, dog)

// set prompt with set variables
function cheeseAndCrackers(cheeseCount, boxesOfCrackers) {
    console.log("You have " + cheeseCount + ' cheeses!');
    console.log("You have " + boxesOfCrackers + ' boxes of crackers!');
    console.log("Man that's enough for a party!");
    console.log("Get a blanket. \n");
}   
console.log("We can just give the function numbers directly:");
cheeseAndCrackers( 20, 30);

console.log("OR, we can use variables from our script:");

var amountOfCheese = 10;
var amountOfCrackers = 50;

cheeseAndCrackers(amountOfCheese, amountOfCrackers);

console.log("We can even do math inside too: ");
cheeseAndCrackers(10 + 20, 5 + 6);

console.log("And we can combine the two, variable and math: ");
cheeseAndCrackers(amountOfCheese + 100, amountOfCrackers + 1000);

function name(firstName, lastName) {
    console.log("My first name is " + firstName);
    console.log("My last name is " + lastName);
}

name("Kim", "Crayton");

var yourFirstName = 'Sam';
var yourLastName = 'Smith';

name(yourFirstName, yourLastName);

var cat = 'Mark';

var dog = 'Jackson';

name(cat, dog);

// using npm prompt
var prompt = require('prompt');

prompt.start();

function cheeseAndCrackers(cheeseCount, boxesOfCrackers) {
    console.log("You have " + cheeseCount + ' cheeses!');
    console.log("You have " + boxesOfCrackers + ' boxes of crackers!');
    console.log("Man that's enough for a party!");
    console.log("Get a blanket. \n");
}   
console.log("We can just give the function numbers directly:");
cheeseAndCrackers( 20, 30);

console.log("OR, we can use variables from our script:");

var amountOfCheese = 10;
var amountOfCrackers = 50;

cheeseAndCrackers(amountOfCheese, amountOfCrackers);

console.log("We can even do math inside too: ");
cheeseAndCrackers(10 + 20, 5 + 6);

console.log("And we can combine the two, variable and math: ");
cheeseAndCrackers(amountOfCheese + 100, amountOfCrackers + 1000);

function name(firstName, lastName) {
    console.log("My first name is " + firstName);
    console.log("My last name is " + lastName);
}

name("Kim", "Crayton");

var yourFirstName = 'Sam';
var yourLastName = 'Smith';

name(yourFirstName, yourLastName);

console.log("What is your first name?");
console.log("What is your last name?");

prompt.get(['first_name', 'last_name'], function (err, result) {

    name(result.first_name, result.last_name);
});