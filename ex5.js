// name = 'Jack R. Smith'
// age = 35 #not a lie
// height = 74.0 #inches
// #converting in to cm (in * 2.54)
// height_cn = height * 2.54 #centimeters
// weight = 180.0 #lbs
// #converting lbs to kgs (lb / 2.2)
// weight_kgs = weight / 2.2 #kgs
// eyes = 'Blue'
// teeth = 'White'
// hair = 'Brown'
// 
// print "Let's talk about %s." % name
// print "He's %d inches tall." % height
// print "He's %d centimeters tall." %height_cn
// print "He's %d pounds heavy." % weight
// print "He's %d kilograms heavy." %weight_kgs
// print "Actually that's not too heavy."
// print "He's got %s eyes and %s hair." % (eyes, hair)
// print "His teeth are usually %s depending on the coffee." % teeth
// 
// #this line is tricky, try to get it exactly right
// print "If I add %d, %d, and %d I get %d." % (age, height, weight, age + height + weight)

var name = 'Jack R. Smith';
var age = 35;
var height = 74.0;
var heightCn = height * 2.54;
var weight = 180.0;
var weightKgs = weight / 2.2;
var eyes = 'Blue';
var teeth = 'White';
var hair = 'Brown';

console.log("Let's talk about " + name + '.');
console.log("He's " + height + " inches tall.");
console.log("He's " + heightCn + " centimeters talls.");
console.log("He's " + weight + " punds heavy.");
console.log("He's " + weightKgs + " kilograms heavy.");
console.log("Actually that's not too heavy.");
console.log("He's got " + eyes + " and " + hair + '.');
console.log("His teeth are usually " + teeth + " depending on the coffee.");

//this concatenates rather than adds the numbers
console.log("If I add " + age + ', ' + height + ', and ' + weight + ',' + " I get " + age + height + weight + '.');

//Solution 1: creates a var
var total = age + height + weight;

console.log("If I add " + age + ', ' + height + ', and ' + weight + ',' + " I get " + total + '.'); 

//Solutions 2: uses ( ) to first add the amounts together and then includes them in the string
console.log("If I add " + age + ', ' + height + ', and ' + weight + ',' + " I get " + (age + height + weight) + '.');
 
