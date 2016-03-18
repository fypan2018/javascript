// #this one is like your scripts with argv
// def print_two(*args):
// 	arg1, arg2 = args
// 	print "arg1: %r, arg2: %r" % (arg1, arg2)
// 	
// #ok that *args is actually pointless, we can just do this
// def print_two_again(arg1, arg2):
// 	print "arg1: %r, arg2: %r" % (arg1, arg2)
// 	
// #this just takes on argument
// def print_one(arg1):
// 	print "arg1: %r" % arg1
// 	
// #this one takes no arguments
// def print_none():
// 	print "I got nothin'."
// 	
// print_two("Zed", "Shaw")
// print_two_again("Zed", "Shaw")
// print_one("First!")
// print_none()

function printTwoAgain(arg1, arg2) {
    console.log('arg1: ' + arg1 + ', arg2: ' + arg2); 
}

function printOne(arg1) {
    console.log("arg1: " + arg1);
}

function printNone() {
    console.log("I got nothin'.");
}
printTwoAgain('Kim', 'Crayton');
printOne("First!")
printNone();
