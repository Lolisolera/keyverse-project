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
 * @return {number} 30  //this is The total of the scores
 */

export const totalScoresArr = (numberArr) => {//numberArr is the input parameter, which expects an array of numbers.
  return numberArr.reduce((total, score) => total + score, 0);//The reduce function iterates over the array and calculates a single cumulative value (in this case, the total).
  //total: The accumulated value (starts at 0 due to the initial value).
  //score: The current element of the array being processed.
  //total + score adds the current score to the total.
  //The 0 after the callback function initializes the accumulator total to 0.
};

console.log(totalScoresArr([7, 7, 6, 2, 3, 2, 3])); // Output: 30
//The array [7, 7, 6, 2, 3, 2, 3] is passed as an argument.



/**
 * A function that turns a string into an array and uses a ARRAY ITERATOR to reverse it.
 * It will need to keep spaces between words.
 * Once reversed it will need to turn the array back into a string.
 *
 * @param {string} toReverse "reverse"  //this is the string to be reversed
 * @return {string} "esrever"           //theis is the reversed string
 */

export const reverseString = (toReverse) => {

  const charArray = toReverse.split("");// Split the string into an array of characters
  //toReverse.split("") converts the string into an array of characters, so "reverse" becomes ["r", "e", "v", "e", "r", "s", "e"].

  const reversedArray = charArray.reverse(); // Use the `reverse` array iterator to reverse the array
  //charArray.reverse() reverses the array in place, resulting in ["e", "s", "r", "e", "v", "e", "r"].

  const reversedString = reversedArray.join(""); // Join the reversed array back into a string
  //reversedArray.join("") combines the characters into a single string: "esrever".

  return reversedString;
};


console.log(reverseString("reverse")); // Output: "esrever"
console.log(reverseString("hello world")); // Output: "dlrow olleh"



/**
 * A function that arranges an array of characters alphabetically.
 * Each character will need to be lowercase.
 * A to Z case insensitive.
 *
 * @param {string[]} characterArr ["X", "B", "B", "b", "g", "l", "n", "x"]
 * @return {string[]} ["b", "b", "b", "g", "l", "n", "x", "x"]    //output of a new array with characters sorted aplphabetically
 */

export const sortCharactersAlphabetically = (characterArr) => {
  // Convert all characters to lowercase and sort alphabetically
  return characterArr
    .map((char) => char.toLowerCase()) // Convert to lowercase. The map ()function creates a new array where all characters are converted to lowercase using the toLowerCase() method.
    .sort(); // the Sort method arrange the lowercase characters in alphabetical order.

};

console.log(sortCharactersAlphabetically(["X", "B", "B", "b", "g", "l", "n", "x"]));
// Output: ["b", "b", "b", "g", "l", "n", "x", "x"]



/* Intermediate Challenges */

/**
 * A function that takes an array of numbers and returns an array of numbers ordered numerically
 *
 * You should do this WITHOUT modifying the original array
 *
 * @param {number[]} numberArr [6, 9, 55, 2, 9190, .5]  //this is the original array of numbers
 * @return {number[]} [9190, 55, 9, 6, 2, 0.5]   //this will be a new array with numbers sorted from high to low.
 */

export const sortNumbersHighToLow = (numberArr) => {

  const copiedArr = [...numberArr];// the spread operator ...  creates a copy of the original array


  const sortedArr = copiedArr.sort((a, b) => b - a);// Sort the copied array in descending order

  return sortedArr;
};


console.log(sortNumbersHighToLow([6, 9, 55, 2, 9190, 0.5]));
// Output: [9190, 55, 9, 6, 2, 0.5]



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
 * @param {string} toCheck orange          //item to check
 * @return {string} "orange is in stock, it is on aisle 2."
 */

export const checkItemInStock = (toCheck) => {//toCheck is the item that we want to search for in the stockList.
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

  const index = stockList.indexOf(toCheck);//indexOf() is an array method that checks if toCheck exists in
  //stockList. If it finds the item, it returns the index (position) of the item in the array. If the item is not found, it returns -1.
  let message = `Sorry ${toCheck} is not in stock.`;//initially is not in stock

  if (index >= 0) { //if the item was found in the array
    message = `${toCheck} is in stock, it is on aisle ${index}.`;
  }//${toCheck} is the item that we want to search for in the stock list

  return message; //"orange is in stock, it is on aisle 2."
};


console.log(checkItemInStock("orange")); // "orange is in stock, it is on aisle 2."
console.log(checkItemInStock("banana")); //  "banana is in stock, it is on aisle 1."
console.log(checkItemInStock("pineapple")); // "Sorry pineapple is not in stock."





/**
 * A function that takes an array of colours and checks if EVERY colour is a primary colour.
 * The primary colours are ["red", "blue", "yellow"].
 * It will return true if they are ALL primary.
 * It will return false if they are NOT ALL primary.
 *
 * @param {string[]} coloursArr ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
 * @return {boolean} false
 */

export const checkPrimaryColours = (coloursArr) => {

  const primaryColours = ["red", "blue", "yellow"];

  return coloursArr.every(colour => primaryColours.includes(colour));
  //The every method checks if all elements in the array satisfy a condition.
  //The condition here is that the color exists in the primaryColours array (primaryColours.includes(colour)).
};

console.log(checkPrimaryColours(["red", "blue", "yellow"])); // true
console.log(checkPrimaryColours(["red", "orange", "yellow", "blue"])); // false

/* Advanced Challenges */

/**
 * A function that takes a strings and checks to see if it is a palindrome.
 * PALINDROME - a word, phrase, or sequence that reads the same backwards as forwards.
 * It will return true or false depending if it is a palindrome or not.
 *
 * @param {string} stringOne racecar
 * @return {boolean} true
 */

export const checkStringPalindrome = (stringOne) => {

  const cleanedString = stringOne.toLowerCase().replace(/[^a-z0-9]/g, ""); // Convert to lowercase and remove non-alphanumeric characters
  //convert the input to lowercase to ensure case insensitivity.
  //then, remove all non-alphanumerical chracters, spaces, punutation, etc.
  const reversedString = cleanedString.split("").reverse().join(""); // Reverse the cleaned string
  //.split("") converts the string into an array of characters.
  //then, reverse the array and the .join("")will convert the reversed array back into a string.
  return cleanedString === reversedString; // Check if the cleaned string equals its reverse
};

console.log(checkStringPalindrome("RaceCar")); // true (case-insensitive)
console.log(checkStringPalindrome("hello")); // false



/**FROM HERE
 * A function that totals a nested array of scores arrays.
 * It only needs to total each nested array.
 * e.g. [[1, 2], [2, 3]] = [3, 5]
 * The scores will be numbers.
 *
 * @param {number[]} numberArr [[7, 7, 6], [2, 3, 2], [3]]
 * @return {number[]} [20, 7, 3]
 */

export const totalNestedScoresArr = (numberArr) => {
  return numberArr.map((nestedArr) =>//.map(): Iterates over each element of the numberArr array.
    //Each element of numberArr (e.g., [7, 7, 6], [2, 3, 2], [3]) is passed to the callback function (nestedArr) => { ... }.
    //.map(): Create a new array by transforming each nestedArr into the total of its numbers.
    nestedArr.reduce((total, score) => total + score, 0)
    //.reduce(): processes all elements of an array and reduces it to a single value (e.g., a sum, product, etc.).
    //total: The accumulator that keeps track of the running total.
    //score: The current element being processed from the array.
    //Initial Value: 0 (passed as the second argument to .reduce()).
    //This sets the starting value for the accumulator total to 0.
  );
};
const result = totalNestedScoresArr([[7, 7, 6], [2, 3, 2], [3]]);
console.log(result); // Output: [20, 7, 3]


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

export const encryptString = (toEncrypt) => {
  // Break the string into an array of characters
  const charArray = toEncrypt.split('');

  // Use reduce to group characters into 3 lists
  const grouped = charArray.reduce((groups, char, index) => {
    const groupIndex = index % 3; // Determine which group this character belongs to
    groups[groupIndex] += char;  // Append the character to the appropriate group
    return groups;
  }, ['', '', '']); // Start with 3 empty groups

  // Join the groups into the final encrypted string
  return grouped.join('');
};

// Example usage
console.log(encryptString("encrypted")); // Output: "ertnyecpd"