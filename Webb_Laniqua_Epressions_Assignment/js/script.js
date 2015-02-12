//Laniqua Webb February 11, 2015 Expressions Assignment

//This is calculator that will calculate the amount of number 2 pencils a school will need for standardized testing based on the amount of students in each grade level

var thirdGraders = 2;
var fourthGraders = 3;
var fifthGraders = 4;

var thirdGraders = prompt("How many Third Graders will be taking the test?");
var fourthGraders = prompt("How many Fourth Graders will be taking the test? ");
var fifthGraders = prompt("How many Fifth Graders will be taking the test?");

var totalPencils = thirdGraders * 2 + fourthGraders * 3 + fifthGraders * 4;

console.log("You will need " + totalPencils + " for testing.");
alert("You will need " + totalPencils + " for testing.")
