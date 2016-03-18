// the_count = [1, 2, 3, 4, 5]
// fruits = ['apples', 'oranges', 'pears', 'apricots']
// change = [1, 'pennies', 2, 'dimes', 3, 'quarters']
// 
// # this first kind of for-loop goes through a list
// for number in the_count:
// 	print "This is count %d" % number
// 	
// # same as above
// for fruit in fruits:
// 	print "A fruit of type: %s" % fruit
// 	
// # also we can go through mixed lists too
// # notice we have to use %r since we don't know what's in it
// for i in change:
// 	print "I got %r" % i
// 	
// # we can also build lists, first start with an empty one
// elements = []
// # example assigning range without the need of a for-loop
// elements = range(6)
// 
// # then use the range function to do 0 to 5 counts
// for i in range(0, 6):
// 	print "Adding %d to the list." % i
// 	# append is a function that lists understands
// 	elements.append(i)
// 	
// # now we can print them out too
// for i in elements:
// 	print "Elements was: %d" % i
// 	
var theCount = [1, 2, 3, 4, 5];
var fruits = ['apples', 'oranges', 'pears', 'apricots'];
var change = [1, 'pennies', 2, 'dimes', 3, 'quarters'];

for (var i = 0; i <= theCount.length; i++) {
    console.log("This is count " + i );
}

for (var i in fruits) {
    console.log("A fruit of types: " + fruits[i]);
}

for (var i in change) {
    console.log("I got " + change[i]);
}

var elements = [];


for (var i = 0; i < 6; i++) {
    console.log("Adding " + i + " to the list.");
    elements.push(i);
}

for (var i = 0; i < elements.length; i++) {
    console.log("Elements was: " + elements[i]);
}
