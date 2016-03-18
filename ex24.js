// print "Let's practice everything."
// print 'You\'d need to know \'bout escapes with \\ that do \n newlines and \t tabs.'
// 
// poem = """
// \tThe lovely world
// with logic so firmly planted
// cannot discern \n the needs of love
// nor comprehend passion from intuition
// and requires an explanation
// \n\t\twhere there is none
// """
// 
// print "______________"
// print poem
// print "--------------"
// 
// five = 10 - 2 + 3 - 6
// print "This should be five: %s" % five
// 
// def secret_formula(started): 
// 	jelly_beans = started * 500
// 	jars = jelly_beans / 1000
// 	crates = jars / 100
// 	return jelly_beans, jars, crates
// 	
// start_point = 10000
// beans, jars, crates = secret_formula(start_point)
// 
// print "With a starting point of: %d" % start_point
// print "We'd have %d beans, %d jars, and %d crates." % (beans, jars, crates)
// 
// start_point = start_point / 10
// 
// print "we can also do that this way:"
// print "We'd have %d beans, %d jars, and %d crates." % secret_formula(start_point)

console.log("Let's practice everything");
console.log('You\'d need to know \'bout escapes with \\ that do \n newlines and \t tabs.');

var poem = '\
\tThe lovely world\
with logic so firmly planted\
cannot discern \n the needs of love\
nor comprehend passion from intuition\
and requires an explanation\
\n\t\twhere there is none.'

console.log('__________');
console.log(poem);
console.log("----------");

var five = 10 - 2 + 3 - 6;
console.log("This should be five: " + five);

function secretFormula(started) {
    var jellyBeans = started * 500;
    var jars = jellyBeans / 1000;
    var crates = jars / 100;
    return {
        jellyBeans: jellyBeans,
        jars: jars,
        crates: crates
    }  
}

var startPoint = 10000;
var result = secretFormula(startPoint);


console.log("With a starting point of: " + startPoint);
console.log("We'd have " + result.jellyBeans + ", beans " + result.jars + ', and ' + result.crates + " crates.");

var startPoint = startPoint / 10;

console.log("We can also do that this way: ");
console.log("We have " + result.jellyBeans + ' beans, ' + result.jars + ' jars, and ' + result.crates + ' crates.');
secretFormula(startPoint); 

