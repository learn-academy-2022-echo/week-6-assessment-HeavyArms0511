// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe('sentencemaker', () => {
  it('takes in an array of objects and returns an array with a sentence about each person with their name capitalized', () => {
    expect(sentencemaker(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// FAIL  ./code-challenges.test.js
// sentencemaker
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)

// ● sentencemaker › takes in an array of objects and returns an array with a sentence about each person with their name capitalized

//   ReferenceError: sentencemaker is not defined



// b) Create the function that makes the test pass.

//PSUEDOCODE:
// Create a function called sentencemaker
// Input:
  // try to figure out how to use HoF
  // Take in an array
  // Iterate through the array 
    // use the .map method and the .name on the array to iterate only through the name values.
    // split the names into two strings instead of first and last name in one string.
  
  // capitilize the string in the name key
    // .map the array that I just made with the array.name and take in the array and run a function by taking the charAt the 0 index and uppercase it.
    // then slice the uppercase into the front of the string.
  // return a sentence using string interpolation
    // use the arry.occupation to access the occupation key and their values.
// Expected Output:
  // ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

  

const sentencemaker = (array) => {
  return array.map(array => array.name
    .split(" ").map(letter => letter.charAt(0).toUpperCase() + letter.slice(1)).join(" ") + ` is ${array.occupation}.`
  )
}
  
// PASS  ./code-challenges.test.js
// sentencemaker
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


describe('remainder', () => {
  it('takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3', () => {
    expect(remainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainder(hodgepodge2)).toEqual([2, 1, -1])
  })
})


// FAIL  ./code-challenges.test.js
// sentencemaker
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)
// remainder
//   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

// ● remainder › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

//   ReferenceError: remainder is not defined


// b) Create the function that makes the test pass.

// PSUEDOCODE:
// create a function called remainder
// Input:
  //take in a mixed array
  //create a new array called newArr and iterate through the mixed array using .filter.
  // filter out everything that is not an integer
  // return the new array while using .map() to iterate through and use the modulo method (% 3) to get the remainders
  // Expected Output:
  // hodgepodge1 = Expected output: [ 2, 0, -1, 0 ]
  // hodgepodge2 = Expected output: [ 2, 1, -1 ]


  const remainder = (array) => {
    let newArr = array.filter(value => typeof value === "number")
    return newArr.map(value => value % 3)
  }


//   PASS  ./code-challenges.test.js
//   sentencemaker
//     ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)
//   remainder
//     ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


describe('sumAll', () => {
  it('takes in an array of numbers and returns the sum of all the numbers cubed', () => {
    expect(sumAll(cubeAndSum1)).toEqual(99)
    expect(sumAll(cubeAndSum2)).toEqual(1125)
  })
})

// FAIL  ./code-challenges.test.js
//   sentencemaker
//     ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)
//   remainder
//     ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
//   sumAll
//     ✕ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)

//   ● sumAll › takes in an array of numbers and returns the sum of all the numbers cubed

//     ReferenceError: sumAll is not defined



// b) Create the function that makes the test pass.

// PSUEDOCODE:
// Create a function called sumAll
// Input:
  // Take in an array
  // let a local variable to zero so we can use the .reduce() method later in the function
  // create another variable that is an array and iterate through the array using the .map() and cube each value (** 3)
  // then have the sum = the array.reduce((a,b) => a+b, 0)
// Expected Output:
  // cubeAndSum1 = 99
  // cubeAndSum2 = 1125


  const sumAll = (array) => {
    let sum = 0
    let newArr = array.map(value => value ** 3)
    return sum = newArr.reduce((a,b) => a+b, 0)
  }


//   PASS  ./code-challenges.test.js
//   sentencemaker
//     ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)
//   remainder
//     ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
//   sumAll
//     ✓ takes in an array of numbers and returns the sum of all the numbers cubed

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total