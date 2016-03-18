// print "You enter a dark room with two doors. Do you go through door #1 or door #2?"
// 
// door = raw_input("> ")
// 
// if door == "1":
// 	print "There's a giant bear here eating a cheese cake. What do you do?"
// 	print "1. Take the cake."
// 	print "2. Scream at the bear."
// 	
// 	bear = raw_input("> ")
// 	
// 	if bear == "1":
// 		print "The bear eats your face off. Good job!"
// 	elif bear == "2":
// 		print "The bear eats your legs off. Good job!"
// 	else:
// 		print "Well, doing %s is probably better. Bear runs away." % bear
// 		
// elif door == "2":
// 	print "You stare into the endless abyss at Cthulhu's retina."
// 	print "1. Blueberries."
// 	print "2. Yellow jacket clothespins."
// 	print "3. Understanding revolvers yelling melodies."
// 	
// 	insanity = raw_input("> ")
// 	
// 	if insanity == "1" or insanity == "2":
// 		print "Your body survives powered by a mind of jello. Good job!"
// 	else: 
// 		print "The insanity rots your eyes into a pool of muck. Good Job!"
// 		
// else:
// 	print "You stumble around and fall on a knife and die. Good job!"
// 	
var door = prompt("You enter a dark room with two doors. Do you go through door #1 or door #2?");

if (door == "1") {
    console.log("There's a giant bear here eating a cheese cake. What do you do?");
    console.log("1. Take the cake.");
    console.log("2. Scream at the bear.");
    
    var bear = prompt("Do you pick #1 or #2");
    
    if (bear == "1") {
        console.log("The bear eats your face off. Good job!");
    } else if (bear == "2") {
        console.log("The bear eats your legs off. Good job!");
    } else {
        console.log("Well, doing " + bear + " is probably better. Bear runs away."); 
    }
} else if (door == "2") {
    console.log("You stare into the endless abyss at Cthulhu's retina.");
    console.log("1. Blueberries.");
    console.log("2. Yellow jacket clothespins.");
    console.log("3. Understanding revolvers yelling melodies.");
    
    var insanity = prompt("Do you pick #1, #2 or #3");
    
    if (insanity == '1' || insanity == '2') {
        console.log("Your body survives powered by a mind of jello. Good Job!");
    } else {
        console.log("The insanity rots your eyes into a pool of muck. Good Job!");
    }
} else {
    console.log("You stumble around and fall on a knife and die. Good Job!");
}


