/*A function that takes a number and returns true if it is a positive number, 
false if it is a negative number, and logs a message "The number is 0" if the number is 0.*/

const isNumberPositive = (number) => {

    if (number < 0) {

        return false;

    } else if (number > 0) {

        return true;

    } else {

       return "The number is 0";
    } 
   
}



//A function that takes a number and returns true if it is a positive number, false if it is a negative number.

console.log(isNumberPositive(-1));
console.log(isNumberPositive(10));
console.log(isNumberPositive(0));

const isNumberPositive2 = (number) => number > 0;


console.log(isNumberPositive2(-1));
console.log(isNumberPositive2(10));
console.log(isNumberPositive2(0));



//A function that takes a number of days and converts it into an age.

const convertDaysToAge = (days) => {

    age = days / 365;
    console.log(Math.round(age));
}

convertDaysToAge(3650);
convertDaysToAge(6570);



//A function that takes three numbers and returns the largest of the three numbers.

const getLargestNumber = (num1, num2, num3) => {

        let largestNum; 

        if (num1 > num2) {
            largestNum = num1;
        } else if (num1 < num2) {
            largestNum = num2
        };

        if (num3 > largestNum) {
            largestNum = num3;
        }
    console.log(largestNum);

}

getLargestNumber(2 ,1, 4);
getLargestNumber(6,2,3);



//A function that takes an array of names and returns the last name from the array of names.

const getLastName = (array) => {

    if (array.length < 2) {
        console.log(array[0]);
    } else {
        console.log(array[array.length - 1]);
    }
}

getLastName(["Charlie","Rob", "Andy"]);
getLastName(["Charlie"]);
getLastName(["Charlie", "Dezy"]);



/* A function that takes an array of numbers and returns true if all of the numbers are positive.
It should return false if there are one or more negative numbers in the array.
I was not sure what to do with 0, so I desided to return false if there is any 0 in an array.*/

const allNumbersPositive = (array) => {

    for (let index = 0; index < array.length; index++) {
       if (array[index] <= 0) {
        return false;
       } 
    }
      return true;
}
console.log(allNumbersPositive([2, 4, 5]));
console.log(allNumbersPositive([-5, 4, 6]));

console.log(allNumbersPositive([0, 4, 5]));
console.log(allNumbersPositive([5, 4, -6, 3]));


