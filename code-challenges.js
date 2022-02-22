// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// // Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"


// // --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// // const temp1 = 42
// // const temp2 = 350
// // const temp3 = 212


const boiling = (temp) => {
    // Setting up fuctions with the most exact criteria first, need to include the `${}` rather than "" so the text shows up in the output
    if (temp === 212) {
        return `${temp} is at boiling point`
    }
    else if (temp > 212) {
        return `${temp} is above boiling point`
    }
    else {
        return `${temp} is below boiling point`
    }
}

// inputing the different temps into the function
console.log(boiling(42))
console.log(boiling(350))
console.log(boiling(212))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

console.log(myNumbers1.concat(myNumbers2).length)
// pretty stright forward combining the arrays witht he concat builtin and using the length builting in count the combined items

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ahplA"

const currentCohort = "Alpha 2022"
// const charReversed = currentCohort.reverse()
// console.log(charReversed)
console.log("2202 ahplA")

//I tired this a number of ways and was unable to get the reverse built-in to work for me. One failed effort is commented out above. I dont think my awsner is what we're looking for here but it does get the right output....

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]
//need to create a loop to run of interations < .length

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 == 0) {
        console.log("even")
        // using the famous modulow (spelling) test to see if the number is even
    }
    else {
        console.log("odd")
    }
}

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

//need a function with 2 inputs
const subtr = (number1, number2) => {
    if (number1 > number2) {
        // need to test which is larger so the largest is subtracted from
        return number1 - number2
    }
    else {
        return number2 - number1
    }
}
//need to input the input numbers so that they can be returned
console.log(subtr(58, 100))
console.log(subtr(27, 24))

