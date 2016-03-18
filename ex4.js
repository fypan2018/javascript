// #var cars = 100
// cars = 100
// #var space_in_a_car = 4
// space_in_a_car = 4
// #var drivers = 30
// drivers = 30
// #var passengers = 90
// passengers = 90
// #var cars_not_driven = cars - drivers
// cars_not_driven = cars - drivers
// #var cars_driven = drivers
// cars_driven = drivers
// #var carpool_capacity = cars_driven * space_in_a_car
// carpool_capacity = cars_driven * space_in_a_car
// #var average_passengers_per_car = passengers / cars_driven
// average_passengers_per_car = passengers / cars_driven
// 
// print "There are", cars, "cars available."
// print "There are only", drivers, "drivers available."
// print "There will be", cars_not_driven, "empty cars today."
// print "We can transport", carpool_capacity, "people today."
// print "We have", passengers, "to carpool today."
// print "We need to put about", average_passengers_per_car, "in each car."

var cars = 100;

var spaceInACar = 4; 

var drivers = 30;

var passengers = 90;

var carsNotDriven = cars - drivers;

var carsDriven = drivers;

var carpoolCapacity = carsDriven * spaceInACar;

var averagePassengersPerCar = passengers / carsDriven;

console.log("There are " + cars + " cars available.");
console.log("There are only " + drivers + " drivers available.");
console.log("There will be " + carsNotDriven + " empty cars today.");
console.log("We can transport " + carpoolCapacity + " people today.");
console.log("We have " + passengers + " To carpool today.");
console.log("We need to put about " + averagePassengersPerCar + " in each car.");

