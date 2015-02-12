//Laniqua Webb February 11, 2015 Expressions Assignment

//This is calculator that will calculate the amount of number 2 pencils a school will need for standardized testing based on the amount of students in each grade level


//Define the variables
// Third graders only need 2 pencils fourth graders need 3 and fifth graders need 4 pencils each for testing

var thirdGraders = 2;
var fourthGraders = 3;
var fifthGraders = 4;

//Prompts asks the user for the amount of students in each grade level

var thirdGraders = prompt("How many Third Graders will be taking the test?");
var fourthGraders = prompt("How many Fourth Graders will be taking the test? ");
var fifthGraders = prompt("How many Fifth Graders will be taking the test?");

//The total amount of pencils needed for testing is determined by multiplying the number of students in each grade by the amount of pencils needed for that grade level
var totalPencils = thirdGraders * 2 + fourthGraders * 3 + fifthGraders * 4;

//Give the total amount of pencils needed
console.log("You will need " + totalPencils + " for testing.");
//Create an alert that tells the user the total amount needed for testing.
alert("You will need " + totalPencils + " for testing.");

