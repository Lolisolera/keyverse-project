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

export const removeFalseValues = (booleanArr: boolean[]): boolean[] => {//this means that this function is going to return an array of booleans.
  const trueValues = booleanArr.filter(boolean => boolean);//The filter() method is used to achieve this by testing each value and only keeping those that evaluate to true.
  return trueValues;
};



/** 
 * 
 * A function that takes an array of numbers that are between 0 and 1.
 * The function needs to create a new array with the numbers converted into a percentage
 *
 * @param {number[]} numbersArr [1, .5, .7, .25]
 * @return {string[]} ["100%", "50%", "70%", "25%"]
 */

export const createPercentageList = (numbersArr: number[]): string[] => {
  return numbersArr.map(number => `${number * 100}%`);//the map FUNCTION will return a new array by applying the given function to each element in the numbersArr.
};//number * 100: This converts the number (which is between 0 and 1) into a percentage.
// The result is then converted to a string, and the percentage sign % is appended

//usage:
const numbers = [1, 0.5, 0.7, 0.25];
const percentages = createPercentageList(numbers);

console.log(percentages); // ["100%", "50%", "70%", "25%"]



/**
 * A function that takes an array of possessions and a name.
 * The functions needs to create a new array with the name prefixed to each item.
 *
 * @param {string[]} possessionsArr ["shoes", "jacket", "belt"]
 * @param {string} name "disco"
 * @return {string[]} ["disco shoes", "disco jacket", "disco belt"]
 */

export const createListOfPossessions = (possessionsArr: string[], name: string): string[] => {
  const possessionList = possessionsArr.map(possession => name + " " + possession);
  return possessionList;
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

export const convertStringToNumbersArray = (numberString: string): number[] => {
  return numberString.split("+").map(Number);//splits  the string at each + and returns an array of substrings (e.g., ["1", "2", "3", "4", "5"]).
};//the map(number)converts each element of the new array into a number (from "1" - 1, etc)


//
/**
 * A function that takes a string of numbers joined with a "+" and creates a new array based on if the number is even or odd.
 * Every number in the string will need to checked.
 *
 * @param {string} numberString - "1+2+3+4+5"
 * @return {string[]} ['odd', 'even', 'odd', 'even', 'odd']
 */

export const createOddEvenArray = (numberString: string): string[] => {
  return numberString.split("+").map(num => {//split Splits the string into an array of substrings (e.g., ["1", "2", "3", "4", "5"]).
    //.map(num => { ... }): Iterates over each substring in the array

    const number = Number(num); //and Converts each string to a number using Number(num).
    return number % 2 === 0 ? "even" : "odd";//if %2 is even
  });
};

//usage:
const numberString = "1+2+3+4+5";
const result = createOddEvenArray(numberString);

console.log(result); // ['odd', 'even', 'odd', 'even', 'odd']



/**

 * A function that takes an array of book titles and a search term.
 * The function needs to remove any book titles that do not include the search term.
 *
 * @param {string[]} booksArr ["JavaScript: The Definitive Guide", "JavaScript: The Good Parts", "The Google story", "React for Dummies"]
 * @param {string} - searchTerm - "Google"
 * @return {string[]} - ["The Google story"]
 */

export const filterBooksBySearch = (booksArr: string[], searchTerm: string): string[] => {
  const searchResult = booksArr.filter(book => book.includes(searchTerm));
  return searchResult;//The filter method creates a new array with elements that satisfy the condition.
  //Each book is checked to see if it contains the searchTerm using includes.
  //Returns true if the searchTerm exists in the book title.
  //Filters out books that do not include the searchTerm.
  //includes refers to strings in this example.
};




///
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

export const formatStringArray = (stringArr: string[]): string => {
  const cleanedArr = stringArr.map(string => {//Replace forEach with map.forEach doesn’t return anything while
    // map creates a new array based on the transformation of each element. 
    //This ensures cleanedArr is correctly populated with the cleaned strings.
    const cleanStr = string.trim().toLowerCase();//string.trim() removes leading and trailing whitespace from each string.
    return cleanStr;
  });

  const joinedString = cleanedArr.join("+");// combines the cleaned strings with a + separator.

  return joinedString;
};

console.log(result);




/** /
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

export const formatString = (string: string): string[] => {
  // Remove anything that is NOT a letter
  const cleanedString = string.replace(/[^a-zA-Z]/g, "");//replace method removes all characters that are not letters

  // Split converts the cleaned string into an array of letters
  const formattedArray = cleanedString.split("").map((char, index) => {//The map() method iterates over each character in the array.
    // Apply uppercase for even indexes, lowercase for odd indexes
    return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    //for even indexes, the character is converted to uppercase
    //for odd indexes, the character is converted to lowercase 
  });

  return formattedArray; //the function returns the formatted array of letters.
};





/**////FROM HERE:
// Expert Challenges


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

export const fizzBuzz = (mixedArray: any[]): string[] => {
  // Step 1: Filter the array to keep only positive numbers or positive numbers as strings
  const cleanedArray = mixedArray.filter(item => {
    // Check if the item is a positive number or a positive numeric string
    return (
      (typeof item === "number" && item > 0) ||
      (typeof item === "string" && /^[1-9]\d*$/.test(item))// check if the item is a positive numeric string
    );///^[1-9]\d*$/ is a regualr expression.
    // the ^: Asserts the start of the string.
    //[1-9]: Matches a single digit between 1 and 9 (no leading zeros).
    //\d*: Matches zero or more additional digits (0-9) after the first digit.
    //$: Asserts the end of the string.
  });

  // Step 2: Create a new array with the FizzBuzz logic
  const fizzBuzzArray = cleanedArray.map(item => {//map method transform each item in the cleaned array
    // Convert item to a number for the FizzBuzz logic
    const num = typeof item === "string" ? parseInt(item, 10) : item;//parseInt method converts numeric strings to numbers
    //If item is a string, it will be converted into a number using parseInt(item, 10).
    //10 sets the decimal base for the conversion.
    //item remains unchanges
    if (num % 15 === 0) {//multiples of 3 and 5 "FizBuzz"
      return "FizzBuzz";
    } else if (num % 3 === 0) {  //multiples of three replace the number with "Fizz".
      return "Fizz";
    } else if (num % 5 === 0) {//multiples of five replace the number with "Buzz".
      return "Buzz";
    } else {
      return num.toString(); // Convert other numbers to strings
    }
  });

  return fizzBuzzArray;
};

