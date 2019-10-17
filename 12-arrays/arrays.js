// Exercise 1
// Reverse an Array
// Write a function to reverse an array.
// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ []

/*

Solution to Exercise 1



function reverse (array){
   return array.reverse();
}

console.log (reverse ([1, 2, 3, 4]));
console.log (reverse ([9, 9, 2, 3, 4]));
console.log (reverse ([]));

*/


// Exercise 2
// Return the Last Element in an Array
// Create a function that accepts an array and returns the last item in the array.
// Examples
// getLastItem([1, 2, 3]) ➞ 3
// getLastItem(["cat", "dog", "duck"]) ➞ "duck"
// getLastItem([true, false, true]) ➞ true


// Exercise 3
// Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.
// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false

/*

Solution to Exercise 3

function check(array, number){
   return array.includes(number);
}
console.log (check([1, 2, 3, 4, 5], 3));
console.log (check([1, 1, 2, 1, 1], 3));
console.log (check([5, 5, 5, 6], 5));
console.log (check([], 5));

*/

// Exercise 4
// Convert Number to Corresponding Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
// Number	Month Name
// 1	      January
// 2	      February
// 3     	March
// 4	      April
// 5	      May
// 6	      June
// 7     	July
// 8     	August
// 9	      September
// 10	      October
// 11	      November
// 12	      December
// Examples
// monthName(3) ➞ "March"
// monthName(12) ➞ "December"
// monthName(6) ➞ "June"
// Notes
// You can expect only integers ranging from 1 to 12 as test input.

/*

Solution 1 to Exercise 4

function monthName (monthNumber){
   var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   return months[monthNumber - 1];
}
console.log (monthName(3));

*/

/*

function monthName (monthnumber){
   var monthnumber = number;
   if (1 = January;
       2 = February;
       3 = March;
       4 = April;
       5 = May;
       6 = June;
       7 = July;
       8 = August;
       9 = September;
       10 = October;
       11 = November;
       12 = December;)

   return number.toString(monthName);
   
}

console.log (monthName (3);
*/

/*
Iko's Solution to Exercise 4

function monthName (X){
   var months = {
   1:"January",
   2:"February",
   3:"March",
   4:"April",
   5:"May",
   6:"June",
   7:"July",
   8:"August",
   9:"September",
   10:"October",
   11:"November",
   12:"December",
   } 
   return (months[X]);
}

console.log (monthName (3));
*/

/*

Array solution to exercise 4

function Array (X){
   var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   return months [(X-1)];
}

console.log (Array (5));

*/

// Exercise 5
// Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.
// Examples
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]
// countdown(1) ➞ [1, 0]
// countdown(0) ➞ [0]

// Exercise 6
// Get Student Names
// Create a function that takes an array of students and returns an array of student names.
// Examples
// getStudentNames([
//   { name: "Steve" },
//   { name: "Mike" },
//   { name: "John" }
// ]) ➞ ["Steve", "Mike", "John"]

// Exercise 7
// Maximum Difference
// Given an array of integers, return the difference between the largest and smallest integers in the array.
// Examples
// difference([10, 15, 20, 2, 10, 6]) ➞ 18
// // 20 - 2 = 18
// difference([-3, 4, -9, -1, -2, 15]) ➞ 24
// // 15 - (-9) = 24

// Exercise 8
// Secret Society
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.
// Examples
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
// societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
// Notes
// The secret society's name should be entirely uppercased.