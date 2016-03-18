// people = 30
// cars = 40 
// trucks = 15
// 
// if cars > people:
// 	print "We should take the cars."
// elif cars < people:
// 	print "We should not take the cars."
// else: 
// 	print "We can't decide."
// 	
// if trucks > cars:
// 	print "Thats' too many trucks."
// elif trucks < cars:
// 	print "Maybe we could take the trucks."
// else:
// 	print "We still can't decide."
// 	
// if people > trucks:
// 	print "Alright, let's just take the trucks."
// else: 
// 	print "Fine, let's stay home then."	
// 	
var people = 30;
var cars = 40;
var trucks = 15;

if(cars > people) {
    console.log("We should take the cars.");
} else if(cars < people) {
    console.log("We should not take the cars.");
} else {
    console.log("We can't decide.");
}

if(trucks > cars) {
    console.log("That's too many trucks.");
} else if (trucks < cars) {
    console.log("Maybe we could take the trucks.");
} else {
    console.log("We still can't decide.");
}

if (people > trucks) {
    console.log("Alright, let's just take the trucks.");
} else {
    console.log("Fine, let's say home then.");
}

