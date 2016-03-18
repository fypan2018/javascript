// ten_things = "Apples Oranges Crows Telephone Light Sugar"º
// 
// print "Wait there are not 10 things in that list. Let's fix that."
// 
// stuff = ten_things.split()
// more_stuff = ["Day", "Night", "Song", "Frisbee", "Corn", "Banana", "Girl", "Boy"]
// 
// while len(stuff) != 10:
// 	next_one = more_stuff.pop()
// 	print "Adding: ", next_one
// 	stuff.append(next_one)
// 	print "There are %d items now." % len(stuff)
// 	
// print "There we go: ", stuff
// 
// print "Let's do some things with stuff."
// 
// print stuff[1]
// print stuff[-1] #whoa! fancy
// print stuff.pop()
// print ' '.join(stuff) #what? cool!
// print '#'.join(stuff[3:5]) #super stellar!

var tenThings = "Apples Oranges Crows Telephone Light Sugar";

console.log("Wait there are not 10 things in that list. Let's fix that.");

var stuff = tenThings.split(' ');

var moreStuff = ['Day', 'Night', 'Song', 'Frisbee', 'Corn', 'Banana', 'Girl', 'Boy'];

while (stuff.length !== 10) {
    var nextOne = moreStuff.pop();
    console.log('Adding: ' + nextOne);
    stuff.push(nextOne);
    console.log("There are " + stuff.length + " items now.");
}

console.log('There we go: ' + stuff);

console.log("Let's do some things with stuff.");

console.log(stuff[1]);
console.log(stuff[stuff.length -1]);
console.log(stuff.pop());
console.log(stuff.join(' '));
console.log(stuff.slice([3], [5]).join('#'));
