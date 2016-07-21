/*
=======================================================

** Week 1 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

EXAMPLE:
// 1. Log your 'hello world' to the console.
console.log("Question 1")
console.log("hello world")

BASIC TRACK: 1-7
ADVANCED TRACK: 8-11
=======================================================
*/



// 1. Log your name to the console (as a string).
console.log("Christina");




// 2. Declare a new variable called 'name',
//    and then log it to the console.
var name = "Christina"
console.log(name)




// 3. Declare two variables with number values.
//    Add, subtract, multiply and divide them.
var cats = 8
var dogs = 5
console.log(cats*dogs)

var totalPets = (cats + dogs *2)
console.log(totalPets)

var otherPets = (totalPets / 2 )
console.log(otherPets)

var allPets =(totalPets + otherPets)
console.log(allPets)

// 4. Declare two variables with string values.
//    Create a third variable that concatenates the two strings
//    that also places a space between the strings.

var friedFood = ("Fries")
var bakedFood = ("Pizza")
var junkFood = ("Pizza + Fries")


// 5. Add, subract, multiply and divide the strings '5' and '3'.
//    Observe the results and brieftly explain the results within the console.

"5 + 3" The result just sent me back "5 + 3"
"5 - 3" The result just sent me back "5 - 3"
"5 * 3" The result just sent me back "5 * 3"
" 5 / 3" The result just sent me back " 5 / 3"

// 6. Create an simple alert stating anything you wish.

alert("Bender is great!");



// 7. Create a prompt that asks a user to pick a number.
//    Then double user's answer.


var userAnswer = prompt("Pick a number");
var multipliedUserAnswer = parseInt(userAnswer) * 2;
console.log(multipliedUserAnswer);


// ADVANCED TRACK

// 8. Ask for a user's name, age and city.
//    In a single command display/log the sentence:
//   "My name is __. I'm __ years old, and I live in __."


var name = prompt("What's your name?");
var age = prompt("How old are you?");
var city = prompt("What City are you from?");

console.log("My name is " + name + ". I'm " + age + " years old, and I live in " + city + ".");


// 9. Create an alert that displays the response from a prompt. You can prompt the user for any kind of fun response.

var response = prompt("Who's your favorite game character?");
alert(response + " is awesome!!!");



// 10. Create the formula to determine the area of a rectangle.
//     The rectangle is: 2 inches by 3 inches
//     Display the result in the console.

var lengthRect = 3;
var widthRect = 2;
var areaRect = (lengthRect * widthRect);
console.log("The area of this rectangle is " + areaRect);


// 11. Prompt a user for their name. Find the length (number of characters) of their name and display the result in the console.
var name = prompt ("What is your name?");
console.log(name.length)
