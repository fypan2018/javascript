// i = 0
// numbers = []
// 
// while i < 6:
// 	print "At the top i is %d" % i
// 	numbers.append(i)
// 	
// 	i = i + 1
// 	print "Numbers now: ", numbers
// 	print "At the bottom i is %d" % i
// 	
// print "The numbers: "
// 
// for num in numbers:
// 	print num
	
var i = 0;
var numbers = [];

while (i < 6) {
    console.log("At the top i is " + i);
    numbers.push(i);
    
    i = i + 1;
    console.log("Number now: " + numbers);
    console.log("At the bottom i is " + i);
}
console.log('The numbers: ');
for (num in numbers) {
    console.log(num);
} 

