// #var x is set to "There are %d types of people." where %d(integers) will be replaced with 10
// x = "There are %d types of people." % 10
// #var binary is set to "binary"
// binary = "binary"
// #var do_not is set to "don't"
// do_not = "don't"
// #var y is set to "Those who know %s and those who %s." where %s will be replaced with variables: binary and d0_not
// y = "Those who know %s and those who %s." % (binary, do_not)
// 
// #prints x which is "There are 10 types of people."
// print x
// #prints y which is "Those who know binary and those who don't."
// print y
// 
// #prints "I said: "There are 10 types of people." (%r prints exact what I've typed and is used for debugging)
// print "I said: %r." % x
// 
// #prints "I also said: '"Those who know binary and those who don't."'
// print "I also said: '%s'." % y
// 
// #var hilarious is set to False
// hilarious = False
// #var joke_evaluation is set to "Isn't that joke so funny?! %r"
// joke_evaluation = "Isn't that joke so funny?! %r"
// 
// #prints "Isn't that joke so funny?! False"
// print joke_evaluation % hilarious
// 
// #var w is set to "This is the left side of..."
// w = "This is the left side of..."
// #var e is set to "a string with a right side."
// e = "a string with a right side."
// 
// #prints This is the left side of...a string with a right side.
// print w + e

var typesOfPeople = 10;

var x = "There are " + typesOfPeople + " types of people.";

var binary = "binary";

var doNot = "don't";

var y = "Those who know " + binary + " and those who " + doNot + "."; 

console.log(x);

console.log(y);

console.log("I said: " + x + '.');

console.log("I also said: " + y + '.');

hilarious = "False";

jokeEvaulation = "Isn't that joke so funny?! " ;

console.log(jokeEvaulation + hilarious);

w = "This is the left side of...";

e = "a string with a right side.";

console.log(w + e);
