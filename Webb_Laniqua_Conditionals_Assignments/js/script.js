//Laniqua Webb - February 19th 2015 - Conditionals Assignment

//This is a calculator that will calculate the minimum amount of points a rewards card member will need in order to receive a free gift
//for the end of the year giveaway
//This calculator will determine the amounts of points the card member will need to get during the sales period by calculating the
//amount of points earned so far this year.

var handBags = 5;
var personalAccessories = 7;
var clothingArticles = 10;
var miscellaneousItems = 2;

var pointTotal = handBags * 5 + personalAccessories * 7 + clothingArticles * 10 + miscellaneousItems *2;

var handBags = prompt("How many handbags were purchased?");
var personalAccessories = prompt("How many personal accessories were purchased?");
var clothingArticles = prompt("How many clothing articles were purchased?");
var miscellaneousItems = prompt("How many miscellaneous items were purchased?");

//Determine how many pairs of shoes were purchased each quarter

var shoesPurchased = [0,1,2,3];

var shoesPurchased0 = prompt("How many shoes were purchased in the first quarter of the year?");
var shoesPurchased1 = prompt("How many shoes were purchased in the second quarter of the year?");
var shoesPurchased2 = prompt("How many shoes were purchased in the third quarter of the year?");
var shoesPurchased3 = prompt("How many shoes were purchased in the fourth quarter of the year?");

var shoeTotal = shoesPurchased[0] + shoesPurchased[1] + shoesPurchased[2] + shoesPurchased[3];

var shoeAverage = shoeTotal/4;
console.log("You have purchased a total of " + shoeTotal + " pairs of shoes for the year. That is an average of " + shoeAverage + " shoes each quarter!")

var shoePoints = 20;

var rewardPoints = shoeTotal * 5 + pointTotal;
console.log ("You have a earned a total of " + rewardPoints + " points!");
alert("You have a earned a total of " + rewardPoints + " points!");

if(rewardPoints >= 500){"You have earned a surprise gift card!"
}else{"Thank you for shopping with us this year"
}
if(rewardPoints >= 1000){"You have earned a free item!"
}
if(rewardPoints >= 1000 && shoeAverage > 2){"You have earned a surprise gift card and a free item!"
}