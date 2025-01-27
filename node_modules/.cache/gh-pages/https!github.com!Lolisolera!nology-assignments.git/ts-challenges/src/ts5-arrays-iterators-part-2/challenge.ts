/* JS5 builds on the previous challenges and adds the use of MORE Array iterators, Arrays, For Loops, Conditionals (If, else, switch)
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
 * A function that uses the REDUCE array iterator to total an array of scores.
 * The scores will be numbers.
 *
 * @param {number[]} numberArr [7, 7, 6, 2, 3, 2, 3]
 * @return {number} 30
 */

export const totalScoresArr = (scoresArr: number[]): number => {
  return scoresArr.reduce((total, score) => total + score, 0);//the "reduces" method iterates over each element in the array scoresArr.
};//total is the accumulator that holds the sum so far.
//score is the current element in the array.
//0 is the initial value of the accumulator (the starting point).




/**
 * A function that turns a string into an array and uses a ARRAY ITERATOR to reverse it.
 * It will need to keep spaces between words.
 * Once reversed it will need to turn the array back into a string.
 *
 * @param {string} toReverse "reverse"
 * @return {string} "esrever"
 */

export const reverseString = (toReverse: string): string => {

  const charArray = toReverse.split("");//"Split" converts the string into an array of Characters.

  const reversedArray = charArray.reverse();  // Reverse the order of the elements inside the array

  return reversedArray.join(""); // Join the reversed array back into a string
};

//use example:
const result = reverseString("reverse");
console.log(result);  // Output: "esrever"




/**
 * A function that arranges an array of characters alphabetically.
 * Each character will need to be lowercase.
 * A to Z case insensitive.
 *
 * @param {string[]} characterArr ["X", "B", "B", "b", "g", "l", "n", "x"]
 * @return {string[]} ["b", "b", "b", "g", "l", "n", "x", "x"]
 */

export const sortCharactersAlphabetically = (characterArr: string[]): string[] => {
  return characterArr
    .map(char => char.toLowerCase()) // Convert all characters to lowercase
    .sort(); // Sort characters alphabetically
};

//Test the function
const characterArr = sortCharactersAlphabetically(["X", "B", "B", "b", "g", "l", "n", "x"]);
console.log(result);  // Output: ["b", "b", "b", "g", "l", "n", "x", "x"]





/* Intermediate Challenges */

/**
 * A function that takes an array of numbers and returns an array of numbers ordered numerically
 *
 * You should do this WITHOUT modifying the original array
 *
 * @param {number[]} numberArr [6, 9, 55, 2, 9190, .5]
 * @return {number[]} [9190, 55, 9, 6, 2, 0.5]
 */

export const sortNumbersHighToLow = (numberArr: number[]): number[] => {

  return [...numberArr].sort((a, b) => b - a);// Create a copy of the original array and sort it in descending order
};


//test the function
const numberArr = [6, 9, 55, 2, 9190, 0.5];
const sortedNumbers = sortNumbersHighToLow(numberArr);

console.log(sortedNumbers); // Output: [9190, 55, 9, 6, 2, 0.5]
console.log(numberArr);       // Output: [6, 9, 55, 2, 9190, 0.5] (original array remains unchanged)





/**
 * A function that checks if a given item is 'in stock'.
 * You have been given a 'stock list' in the function body.
 *
 * If the item is in the stock list you need to return its index in the following string format.
 * "ITEM is in stock, it is on aisle INDEX."
 *
 * If the item is not in the stock list you need to return the following string format.
 * "Sorry ITEM is not in stock."
 *
 * @param {string} toCheck orange
 * @return {string} "orange is in stock, it is on aisle 2."
 */

export const checkItemInStock = (toCheck: string): string => {
  const stockList = [
    "apple",
    "banana",
    "orange",
    "coconut",
    "strawberry",
    "lime",
    "grapefruit",
    "lemon",
    "kumquat",
    "blueberry",
    "melon",
  ];


  const index = stockList.indexOf(toCheck.toLowerCase());// Find the index of the item in the stock list- case insensitive


  if (index !== -1) {  // Check if the item is in stock
    return `${toCheck} is in stock, it is on aisle ${index}.`;//toCheck is the item that i want to check
  } else {
    return `Sorry ${toCheck} is not in stock.`;
  }

};

console.log(checkItemInStock("blueberry")); // Output: "blueberry is in stock, it is on aisle 9."
console.log(checkItemInStock("peach"));  // Output: "Sorry peach is not in stock."





/**
 * A function that takes an array of colours and checks if EVERY colour is a primary colour.
 * The primary colours are ["red", "blue", "yellow"].
 * It will return true if they are ALL primary.
 * It will return false if they are NOT ALL primary.
 *
 * @param {string[]} coloursArr ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
 * @return {boolean} false
 */

export const checkPrimaryColours = (coloursArr: string[]): boolean => {

  const primaryColours = ["red", "blue", "yellow"];

  return coloursArr.every(colour => primaryColours.includes(colour.toLowerCase()));//includes method checks if a colour exists in the primaryColours array.
  //toLowerCase() ensures that the comparaison is case sensitive.
  //Every Method returns true if all elements in the array satisfy the condition.
};

//check the function:
console.log(checkPrimaryColours(["red", "red", "blue", "yellow"])); // Output: true
console.log(checkPrimaryColours(["purple", "blue"])); // Output: false





/* Advanced Challenges */

/**
 * A function that takes a strings and checks to see if it is a palindrome.
 * PALINDROME - a word, phrase, or sequence that reads the same backwards as forwards.
 * It will return true or false depending if it is a palindrome or not.
 *
 * @param {string} stringOne racecar
 * @return {boolean} true
 */

export const checkStringPalindrome = (stringOne: string): boolean => {

  const cleanedString = stringOne.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();// Remove any non-alphanumeric characters and convert the string to lowercase
  //(/[^a-zA-Z0-9]/g, "") is a regular expression to get hold of non alphanumeric characters.
  return cleanedString === cleanedString.split("").reverse().join("");// Compare the cleaned string with its reversed version
  //Splits the string into an array of characters
  //Reverses the array.
  //Joins it back into a string.

};
//use the function:
console.log(checkStringPalindrome("hello")); // false
console.log(checkStringPalindrome("level"));//true





/**
 * A function that totals a nested array of scores arrays.
 * It only needs to total each nested array.
 * e.g. [[1, 2], [2, 3]] = [3, 5]
 * The scores will be numbers.
 *
 * @param {number[]} numberArr [[7, 7, 6], [2, 3, 2], [3]]
 * @return {number[]} [20, 7, 3]
 */

export const totalNestedScoresArr = (scoresArr: number[][]): number[] => {
  return scoresArr.map((nestedArray) =>//The map method iterates over each nested array in the scoresArr.
    //Map processes each nested array to calculate its total.
    nestedArray.reduce((sum, score) => sum + score, 0)//The reduce method calculates the sum of all numbers in a nested array.
    //The sum is the accumulator, initialized to 0.
    //map returns new array where each element is the total of the corresponding nested array.
  );
};

//test the function
const scores = [[7, 7, 6], [2, 3, 2], [3]];
const totals = totalNestedScoresArr(scores);

console.log(totals); // Output: [20, 7, 3]





/* Expert Challenges */

/**
 * This is the same challenge as advanced JS4, can you implement it differently?
 * Can you complete this challenge using the REDUCE iterator?
 *
 * A function that takes a string and creates a simple encrypted message.
 *
 * The string will be broken into 3 lists.
 * The first three letters will go into their own list.
 * The next three letters will follow this pattern.
 * Joining the first three letters in each of their list.
 * The rest of the letters will follow this pattern.
 * Each list will be joined together and returned as an encrypted message.
 *
 * The word "encrypted" would be broken into:
 *
 * ["e", "r", "t"]
 * ["n", "y", "e"]
 * ["c", "p", "d"]
 *
 * and joined together as ert + nye + cpd to give a final string of "ertnyecpd"
 *
 * @param {string} toEncrypt "encrypted"
 * @return {string} "ertnyecpd"
 */

export const encryptString = (toEncrypt: string): string => {
  const groups: string[][] = toEncrypt.split("").reduce((acc, char, index) => {
    //Splits the input string into an array of individual characters.
    //reduce Iterates over each character of the array.
    const groupIndex = index % 3; // Determine which group this character belongs to (0,1,2)
    acc[groupIndex].push(char); // 'acc" - Adds the character to the correct group
    return acc;
  }, [[], [], []] as string[][]); // Initialize with 3 empty arrays


  return groups.map(group => group.join("")).join("");//Joins each group of characters into a single string.
  //.join("") Concatenates the strings from all groups to produce the final encrypted message.
};


//Use the function:
console.log(encryptString("hello")); // Output: "hleo"