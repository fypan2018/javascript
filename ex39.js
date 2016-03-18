// # create a mapping of state to abbreviation
// states = {
// 	'Oregon': 'OR',
// 	'Florida': 'FL',
// 	'California': 'CA',
// 	'New York': 'NY',
// 	'Michigan': 'MI'
// }
// 
// # create a basic set of states and some cities in them 
// cities = {
// 	'CA': 'San Francisco',
// 	'MI': 'Detroit',
// 	'FL': 'Jacksonville'
// }
// 
// # add some more cities
// cities['NY'] = 'New York'
// cities['OR'] = 'Portland'
// 
// # print out some cities
// print '-' * 10
// print "NY State has: ", cities['NY']
// print "OR State has: ", cities['OR']
// 
// # print some states
// print '-' * 10
// print "Michigan's abbreviation is: ", states['Michigan']
// print "Florida's abbreviation is: ", states['Florida']
// 
// # do it by using the state then cities dict
// print '-' * 10
// state = states['Michigan']
// print "Michigan has: ", cities[state]
// state = states['Florida']
// print "Florida has: ", cities[state]
// 
// # print every state abbreviation
// print '-' * 10
// for state, abbrev in states.items():
// 	print "%s is abbreviated %s" % (state, abbrev)
// 	
// # print every city in state
// print '-' * 10
// for abbrev, city in cities.items():	
// 	print "%s has the city %s" % (abbrev, city)
// 	
// # now do both at the same time
// print '-' * 10
// for state, abbrev in states.items():
// 	print "%s state is abbreviated %s and has city %s" % (state, abbrev, cities[abbrev])
// 	
// print '-' * 10
// # safely get a abbreviation by state that might not be there
// state = states.get('Texas')
// 
// if not state:
// 	print "sorry, no Texas."
	
var things = ['a', 'b', 'c', 'd'];
console.log(things[1]);

//splice() starts with the first argument is the index you want affected, the second argument states how many elements to remove (0 is excepted), the third element are the elements to be added.
things.splice(1, 1, 'z');
console.log(things[1]);

console.log(things); 
console.log('--------------');
var stuff = {
    "name": "Zed",
    'age': 39,
    'height': 6 * 12 + 2
};

console.log(stuff.name);
console.log(stuff.age);
console.log(stuff.height);

stuff.city = 'San Francisco';
console.log(stuff.city);
console.log(stuff);
console.log('--------------');

stuff[1] = 'Wow';
stuff[2] = 'Neato';
//How to count the keys in an object
console.log(Object.keys(stuff).length);
console.log(stuff);
console.log(stuff[1]);
console.log(stuff[2]);
console.log('--------------');

console.log(stuff); 
delete stuff.city;
delete stuff[1];
delete stuff[2];
console.log(stuff); 
console.log('--------------');

var states = {
    'Oregon': 'OR',
    'Florida': 'FL',
    'California': 'CA',
    'New York': 'NY',
    'Michigan': 'MI'
};
console.log(states);

var cities = {
    'CA': 'San Francisco',
    'MI': 'Detroit',
    'FL': 'Jacksonville'
};
console.log(cities);
cities.NY = 'New York';
cities.OR = 'Portland';
console.log(cities);
//how to repeat a string
console.log('-'.repeat(14));
console.log('NY State has: ' + cities.NY);
console.log('OR State has: ' + cities.OR);

console.log('-'.repeat(14));
console.log('Michigan\'s abbreviation is: ' + states.Michigan);
console.log("Florida's abbreviation is: " + states.Florida);
console.log('-'.repeat(14));

console.log('Michigan has: ' + cities[states.Michigan]);
console.log('Florida has: ' + cities[states.Florida]);

console.log('-'.repeat(14));
for (state in states) {
    console.log(state + ' is abbreviated ' + states[state]);
};

console.log('-'.repeat(14));
for (city in cities) {
    console.log( city + ' has the city ' + cities[city]);
};

console.log('-'.repeat(14));
for (state in states) { 
    console.log(state + ' state is abbreviated ' + states[state] + ' and has city ' + cities[states[state]]);
};

console.log('-'.repeat(14));

if ('Texas' in states) {
   console.log('It\'s here');
} else {
     console.log('Sorry, no Texas.')
};

