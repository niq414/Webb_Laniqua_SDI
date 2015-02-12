// Laniqua Webb February 11, 2015 Expressions Worksheet


//Dog Years
//Calculate how old Sparky is in dog years using his actual age

var humanYears = 1;

var dogYears = 7;

var humanYears = prompt("How old is Sparky in human years?");

var sparkyAge = humanYears * dogYears;
console.log ("Sparky is " + sparkyAge + " in dog years");
alert("Sparky is " + sparkyAge + " in dog years");


//Slice of Pie Part 1

//Calculating how many slices of pizza each person at the party will get at the party

var partyPeople = 1;
var pizzasOrdered = 1;
var pizzaSlices = 1;

var partyPeople = prompt("How many people are at the party?");
var pizzasOrdered = prompt("How many pizzas were ordered?");
var pizzaSlices = prompt("How many slices are in each pizza?");

var eachPerson = pizzasOrdered * pizzaSlices / partyPeople
console.log("eachPerson");
alert("Each person will have " + eachPerson + " slices of pizza.")

//Slices of Pie part 2
//calculate how many leftover slices of Pizza Sparky can have

var pizzaSlices = 1;
var partyPeople = 1;
var pizzasOrdered = 1;

var partyPeople = prompt("How many people are at the party?");
var pizzasOrdered = prompt("How many pizzas were ordered?");
var pizzaSlices = prompt("How many slices are in each pizza?");

var eachPerson = pizzasOrdered * pizzaSlices / partyPeople

var leftOver = pizzasOrdered * pizzaSlices % partyPeople
console.log("leftOver");
alert("Sparky will have " + leftOver + " leftover slices of pizza.")

//Average Shopping Bill
//Calculate the average amount spent on groceries over the past five weeks.

var groceryBill = [0, 1, 2, 3, 4];

var groceryBill0 = prompt("How much was spent for week 1?");
var groceryBill1 = prompt("How much was spent for week 2?");
var groceryBill2 = prompt("How much was spent for week 3?");
var groceryBill3 = prompt("How much was spent for week 4?");
var groceryBill4 = prompt("How much was spent for week 5?");

var totalSpent = groceryBill[0] + groceryBill[1] + groceryBill[2] + groceryBill[3] + groceryBill[4];

var averageSpent = totalSpent / 5;
console.log("You have spent a total of $" + totalSpent + " on groceries over the past five weeks. That is an average of $" + averageSpent + " per week!");
alert("You have spent a total of $" + totalSpent + " on groceries over the past five weeks. That is an average of $" + averageSpent + " per week!")


//Discounts
//Calculate the discounted price for an item with and without sales tax


var originalPrice = 1;
var discountPercent = 1;
var winterBoots = 1;
var salesTax = 1;

var originalPrice = prompt("What is the original price?");
var discountPercent = prompt("What is the discount percent?");
var salesTax = prompt("How much is the sales tax?");

var noTax = originalPrice * discountPercent
var withTax = noTax + salesTax
console.log("The total price of the item is " + noTax + " after tax the total comes to " + withTax);
alert("The total price of the item is " + noTax + " after tax the total comes to " + withTax)






