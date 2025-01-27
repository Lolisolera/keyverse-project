/* JS4 builds on the previous challenges and adds the use of Array iterators, Arrays, For Loops, Conditionals (If, else, switch)
 *  & calling your own functions.
 */

/* 
  All challenges in this repository are separated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function that takes an array of Booleans and then removes the false values from the given array.
 * It should create a new array only consisting of the true values.
 *
 * @param {boolean[]} booleanArr [true, true, false, false, true]
 * @return {boolean[]} [true, true, true]
 */

export const removeFalseValues = (booleanArr) => {
  return booleanArr.filter(value => value === true);//The .filter() method creates a new array containing only the elements that satisfy the given condition.
};
const booleans = [true, true, false, false, true];
console.log(removeFalseValues(booleans));
// Output: [true, true, true]


/**
 * A function that takes an array of numbers that are between 0 and 1.
 * The function needs to create a new array with the numbers converted into a percentage
 *
 * @param {number[]} numbersArr [1, .5, .7, .25]
 * @return {string[]} ["100%", "50%", "70%", "25%"]
 */

export const createPercentageList = (numbersArr) => {

  return numbersArr.map(num => `${num * 100}%`);//the map method creates a new array with numbers converted to percentages
};//each number in numbersArr is multiplied by 100 to convert it to a percentage, and "%" is appended to create the desired format.
//Non-Mutation - The original array numbersArr is not modified. The function generates and returns a new array.
const numbers = [1, 0.5, 0.7, 0.25];
console.log(createPercentageList(numbers));
// Output: ["100%", "50%", "70%", "25%"]


/**
 * A function that takes an array of possessions and a name.
 * The functions needs to create a new array with the name prefixed to each item.
 *
 * @param {string[]} possessionsArr ["shoes", "jacket", "belt"]
 * @param {string} name "disco"
 * @return {string[]} ["disco shoes", "disco jacket", "disco belt"]
 */

export const createListOfPossessions = (possessionsArr, name) => {
  const possessionList = possessionsArr.map(//the map method iterate over each element in the possessionsArr array and creates a new array without changing the original
    (possession) => name + " " + possession //combines the name string with the current possession
  );
  return possessionList;//The map method generates a new array, which is stored in the variable possessionList.
};


/* Intermediate Challenges */

/**
 * Have a look at the String method split()
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 *
 * You may need to use it below.
 */

/**
 * A function that takes a string of numbers joined with a "+" and returns an array of those numbers.
 * The strings will need to be converted into numbers.
 * e.g 1 instead of "1"
 *
 * @param {string} numberString - "1+2+3+4+5"
 * @return {number[]} [1, 2, 3, 4, 5]
 */

export const convertStringToNumbersArray = (numberString) => {
  // Split the string by the "+" symbol, then map over the resulting array to convert each element to a number
  return numberString.split('+').map(Number);//the split method breaks the string into an array of substrings, and then the  map method converts each substring into a number.
};

/**
 * A function that takes a string of numbers joined with a "+" and creates a new array based on if the number is even or odd.
 * Every number in the string will need to checked.
 *
 * @param {string} numberString - "1+2+3+4+5"
 * @return {string[]} ['odd', 'even', 'odd', 'even', 'odd']
 */

export const createOddEvenArray = (numberString) => {
  // Split the string into an array of numbers
  const numbers = numberString.split('+').map(Number);//The split('+') method splits the string into an array of substrings based on the + delimiter.
  //map(Number) converts each substring into a number.

  // Map each number to 'odd' or 'even' based on its value
  const result = numbers.map(num => (num % 2 === 0 ? 'even' : 'odd'));//the map method iterates over the numbers.
  //For each number, check if num % 2 === 0 (even) or num % 2 !== 0 (odd). 
  return result;
};

console.log(createOddEvenArray("1+2+3+4+5")); // Output: ['odd', 'even', 'odd', 'even', 'odd']


/**
 * A function that takes an array of book titles and a search term.
 * The function needs to remove any book titles that do not include the search term.
 *
 * @param {string[]} booksArr ["JavaScript: The Definitive Guide", "JavaScript: The Good Parts", "The Google story", "React for Dummies"]
 * @param {string} - searchTerm - "Google"
 * @return {string[]} - ["The Google story"]
 */

export const filterBooksBySearch = (booksArr, searchTerm) => {
  return booksArr.filter(book => book.toLowerCase().includes(searchTerm.toLowerCase()));
};//The filter method iterates over each book title in booksArr and keep only the ones that satisfy the condition.
//Convert both the book and searchTerm to lowercase using toLowerCase() to ensure the search is case-insensitive.
//the includes method checks if the searchTerm is a substring of the current book.


const books = [
  "JavaScript: The Definitive Guide",
  "JavaScript: The Good Parts",
  "The Google story",
  "React for Dummies"
];
const searchTerm = "Google";

console.log(filterBooksBySearch(books, searchTerm));//The filtered array containing matching titles is returned.
// Output: ["The Google story"]



/* Advanced Challenges */

/**
 * A function that takes a list, cleans each item and joins them with a +.
 * When it "cleans" it removes whitespace and makes sure the string is lowercase.
 *
 * This function is failing the tests can you figure out why?
 * The bug is within the function, the tests are fine.
 * Can you get it to pass the tests?
 *
 * @param {string[]} stringArr ["  dIsco", " ShOes "]
 * @return {string} "disco+shoes"
 */

export const formatStringArray = (stringArr) => {

  const cleanedArr = stringArr.map((string) => string.trim().toLowerCase());
  //use map instead of forEach.The map method is used to create a new array by applying the transformation (trim and toLowerCase) to each element.
  //This ensures the new created cleanedArr contains the modified strings.
  const joinedString = cleanedArr.join("+");
  //the join method combines the elements into a single string, separated by "+".
  return joinedString;
};


console.log(formatStringArray(["  dIsco", " ShOes "]));
// Output: "disco+shoes"



/**
 * A function that takes a string, cleans it and formats it based on a condition.
 *
 * It will need to remove anything that is NOT a letter from the string.
 * - e.g numbers, punctuation, whitespace.
 *
 * If the index of the letter is even the letter needs to be Uppercase.
 * If the index of the letter is odd the letter needs to be Lowercase.
 *
 * @param {string} string " 22 $$He LL--O!%^& "
 * @return {string[]} [ 'H', 'e', 'L', 'l', 'O' ]
 */

export const formatString = (string) => {
  // Remove non-letter characters and split the string into an array of letters
  const cleanedString = string.replace(/[^a-zA-Z]/g, "");//The replace method removes all characters that are not letters (a-z, A-Z).
  //[^a-zA-Z] matches everything except letters, and the g flag ensures all such characters are removed.


  // Format the letters based on their index- splitting into an array
  const formattedArray = cleanedString.split("").map((char, index) => {//After cleaning, the string is split into an array of individual letters using split("").
    //The map method is used to iterate over the array of letters.
    return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    //If the index is even, the letter is transformed to uppercase using toUpperCase().
    //If the index is odd, the letter is transformed to lowercase using toLowerCase().
  });

  return formattedArray;// the function returns an array of formatted letters.
};

console.log(formatString(" 22 $$He LL--O!%^& "));
// Output: [ 'H', 'e', 'L', 'l', 'O' ]   -- this satisfies the condition




//* Expert Challenges

/**
 * A function that takes an array and FizzBuzzes it.
 *
 * It should remove anything from the given array that is NOT a POSITIVE number or a POSITIVE number as a STRING.
 *
 * If we were given [-1, "disco", "3", 5, "15", 2, 0]
 * We would be left with this ["3", 5, "15", 2]
 *
 * It then needs to create a NEW array from this clean array based on the conditions below:
 *
 * For multiples of three replace the number with "Fizz".
 * For multiples of five replace the number with "Buzz".
 * For numbers which are multiples of both three and five replace the number with "FizzBuzz".
 * All the other numbers need to be strings.
 *
 * @param {*[]} mixedArray [-1, "disco", "3", 5, "15", 2, 0]
 * @return {string[]} [ "Fizz", "Buzz", "FizzBuzz", "2" ]
 */

export const fizzBuzz = (mixedArray) => {

  // Step 1: Filter out non-positive numbers and invalid strings
  const cleanedArray = mixedArray.filter((item) => {//The filter method keeps only items that are positive numbers 
    // Keep only positive numbers or positive numbers as strings
    return (
      (typeof item === "number" && item > 0) ||
      (typeof item === "string" && !isNaN(Number(item)) && Number(item) > 0)
    );//The filter method keeps only items that are positive numbers 
  });

  // Step 2: Apply FizzBuzz logic
  const fizzBuzzArray = cleanedArray.map((item) => {//The map method iterates over the filtered array.
    const num = typeof item === "string" ? Number(item) : item; // Convert strings to numbers
    //typeof item === "string":checks if the variable item is of type string.
    //If the condition (typeof item === "string") is true, the value of num will be the result of Number(item).
    //If the condition is false, the value of num will be item itself.
    //Number(item):If item is a string (like "3"), Number(item) converts it to a number (e.g., 3).
    //If the string can't be converted to a valid number (e.g., "abc"), it returns NaN. In this code, invalid strings are filtered out earlier, so this won't happen here.
    //item: if item is already a number, no conversion is needed, and it’s directly assigned to num.

    //see EXAMPLE at the end of this code
    if (num % 3 === 0 && num % 5 === 0) {
      return "FizzBuzz";
    } else if (num % 3 === 0) {
      return "Fizz";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else {
      return num.toString(); // Convert other numbers to strings
    }
  });

  return fizzBuzzArray;
};

console.log(fizzBuzz([-1, "disco", "3", 5, "15", 2, 0]));
// Output: [ "Fizz", "Buzz", "FizzBuzz", "2" ]


//EXAMPLE:
/*If item = "15" (a string):

typeof item === "string" is true, so num = Number(item) becomes 15.
If item = 7 (a number):

typeof item === "string" is false, so num = item remains 7.
This ensures the rest of the logic in the code can safely treat num as a number.*/