//Refactored function that takes a number and returns true if it is a positive number, false if it is a negative number.

const isNumberPositive = (number) => number > 0;




console.log(isNumberPositive(-1));
console.log(isNumberPositive(10));
console.log(isNumberPositive(0));



//Refactored function that takes a number of days and converts it into an age.

const convertDaysToAge = (days) => console.log(Math.round(days / 365.25));


convertDaysToAge(3650);
convertDaysToAge(6570);



//Refactored function that takes three numbers and returns the largest of the three numbers.

const getLargestNumber = (...numbers) => console.log(Math.max(...numbers));
    

getLargestNumber(2 ,1, 4);
getLargestNumber(6, 2, 3);



//A function that takes an array of names and returns the last name from the array of names. Refactored my own solution.

const getLastName = (...names) => console.log(names[names.length - 1]);

getLastName("Charlie","Rob", "Andy");
getLastName("Charlie");
getLastName("Charlie", "Dezy");



/* A function that takes an array of numbers and returns true if all of the numbers are positive.
It should return false if there are one or more negative numbers (or zero) in the array.
Refactored my own solution to use built in Math function*/

const allNumbersPositive = (...numbers) => Math.min(...numbers) > 0;

console.log(allNumbersPositive(2, 4, 5));
console.log(allNumbersPositive(-5, 4, 6));
console.log(allNumbersPositive(0, 4, 5));
console.log(allNumbersPositive(5, 4, -6, 3));

