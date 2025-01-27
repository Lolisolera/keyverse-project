/* JS3 builds on the previous challenges and adds the use of Arrays, For Loops, Conditionals (If, else, switch)
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
 * A function that creates a a Recipe string from a given array of Ingredients.
 * Each ingredient will be joined with a +.
 *
 * @param {string[]} ingredientsArr ["Bacon","Lettuce","Tomato"]
 * @return {string} "Bacon+Lettuce+Tomato"
 */

export const createRecipeString = (ingredientsArr) => {
  let recipeString = '';

  for (let i = 0; i < ingredientsArr.length; i++) {
    recipeString += ingredientsArr[i];
    if (i < ingredientsArr.length - 1) {
      recipeString += '+'; //+= appends "+" to the string.
    }
  }

  return recipeString;
};

/**
 * A function that takes Array of Items and returns a NEW ARRAY with the first and last item in it.
 *
 * @param {string[]} itemsArr ["Tony","John","Dave"]
 * @return {string[]} ["Tony","Dave"]
 */

export const getFirstAndLastItems = (itemsArr) => {
  return [itemsArr[0], itemsArr.slice(-1)[0]];
};

/**
 * A function that takes an array of scores and returns the sum of all scores by looping through the array.
 *
 * @param {number[]} scoreArr [1,2,3]
 * @return {number} 6
 */

export const totalScores = (scoreArr) => {
  let sum = 0;
  for (let i = 0; i < scoreArr.length; i++) {
    sum += scoreArr[i];
  }
  return sum;
};

/* Intermediate Challenges */

/**
 * A function that takes an number and returns the total of the range of numbers between 0 and the given number.
 * e.g. 10 => 0+1+2+3+4+5+6+7+8+9+10 = 55.
 *
 * @param {number} rangeMax 10
 * @return {number} 55
 */

export const totalRange = (rangeMax) => {
  return (rangeMax * (rangeMax + 1)) / 2;//The sum of numbers from 0 to n can be calculated using the formula
  //formula sum = n*(n+1)/2
};

/**
 * A function that takes an array and returns a NEW ARRAY where the last item has been moved to the front of the array and removed from the back.
 *
 * @param {string[]} itemsArr ["Tony","John","Dave"]
 * @return {string[]} ["Dave","Tony","John"]
 */

export const moveFirstAndLastItems = (itemsArr) => {
  if (itemsArr.length === 0) return []; // Handle empty array case
  const lastItem = itemsArr[itemsArr.length - 1]; // Get the last item
  const restOfItems = itemsArr.slice(0, -1); // Get the rest of the items
  return [lastItem, ...restOfItems]; // Combine last item at the front with the rest using the SPREAD OPERATOR ...
};

/**
 * Read this article on how to clone an array.
 * https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
 *
 * From here on you should not be mutating the input array. Clone it first and then mutate / manipulate.
 */

/**
 * A function that takes an array of numbers and returns a NEW ARRAY with only the odd numbers from the given array. It should not mutate the input array.
 *
 * @param {number[]} numberArr [1,1,8,1,1,8]
 * @return {number[]} [1,1,1,1]
 */

export const removeEvenNumbers = (numberArr) => {

  const clonedArray = [...numberArr];//cloned array to avoid mutating the input array. I've used the SPREAD OPERATOR to include all of the original numbers of the array.

  return clonedArray.filter((num) => num % 2 !== 0);// I've used the FILTER method to filter the cloned array to keep only odd numbers
};

/*
/* Advanced Challenges */

/**
 * A function that takes an array of numbers. It returns the average from the given array.
 * The result should be rounded to the nearest whole number.
 *
 * @param {number[]} numberArr [1,2,3]
 * @return {number} 2
 */

export const generateAverage = (numberArr) => {

  if (numberArr.length === 0) {
    return 0; // Handle empty array case
  }

  // Calculate the sum of all elements in the array
  const total = numberArr.reduce((sum, num) => sum + num, 0);//using the reduce method 
  //to accumulate a sum of all the elements in the numberArr array.
  //sum is the acumulator that stores the running total
  //num is the current element being processed in the array.

  // Calculate the average and round to the nearest whole number
  return Math.round(total / numberArr.length);
};

console.log(generateAverage([1, 2, 3])); // Output: 2
console.log(generateAverage([]));        // Output: 0




/*
 * A function that uses a loop to reverse the order of an Array. It should return a NEW ARRAY and not Mutate the original array.
 *
 * @param {number[]} toReverseArr [1,2,3]
 * @return {number} [3,2,1]
 */

export const reverseOrder = (toReverseArr) => {
  const clonedArray = [...toReverseArr];


  const reversedArray = [];//empty array to store the reversed values

  // Loop through the cloned array in reverse order and push elements into reversedArray
  for (let i = clonedArray.length - 1; i >= 0; i--) { // i is variable to serve as the loop counter
    //clonedArray.length - 1 Sets the starting value of i to be the index of the last element in the clonedArray.
    //This condition checks if i is greater than or equal to 0. The loop continues as long as i is non-negative. Once i reaches -1, the loop will stop.
    //--i reverse loop
    reversedArray.push(clonedArray[i]);
  }

  // Return the new reversed array
  return reversedArray;
};


/* Expert Challenges */

/**
 * Given two arrays, The first being an array of players and the second being their corresponding scores. Loop through them and generate a new array matching the format below.
 *
 * ["P:INDEX PLAYER scored HIGHSCORE","P:INDEX PLAYER scored HIGHSCORE","P:INDEX PLAYER scored HIGHSCORE"]
 *
 * P:INDEX will start from 1. e.g P:1 not P:0
 *
 * If the inputs are not the same size or empty return "invalid inputs"
 *
 * @param {string[]} playersArr ["Tony","John","Dave"]
 * @param {number[]} scoresArr [45,55,66]
 * @return {string[]} ["P:1 Tony scored 45","P:2 John scored 55","P:3 Dave scored 66"]
 */

export const generateHighscores = (playersArr, scoresArr) => {
  if (playersArr.length !== scoresArr.length || playersArr.length === 0 || scoresArr.length === 0) {
    //The 1st condition ensures that the two arrays have the same length.
    //the 2nd condition checks if either array is empty.
    return "invalid inputs";
  }

  return playersArr.map((player, index) => { // the MAP method creates a new array where each element is a string
    return `P:${index + 1} ${player} scored ${scoresArr[index]}`;
    //For each player in playersArr, we create a string in the format "P:INDEX PLAYER scored HIGHSCORE", where:
    //index + 1 is used for the player index, starting from 1 (not 0).
    //player refers to the player name from playersArr.
    //scoresArr[index] gets the corresponding score from the scoresArr.
  });
};

const players = ["Tony", "John", "Dave"];
const scores = [45, 55, 66];

console.log(generateHighscores(players, scores));
// Output: ["P:1 Tony scored 45", "P:2 John scored 55", "P:3 Dave scored 66"]




/**
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
  // I've created three arrays to hold the groups of letters
  const list1 = [];
  const list2 = [];
  const list3 = [];

  // Loop through the string, distributing letters into the three lists
  for (let i = 0; i < toEncrypt.length; i++) { //The loop iterates over each character of the input string (toEncript)
    if (i % 3 === 0) {//i%3 will determine which list the current letter belongs to:
      list1.push(toEncrypt[i]); // Add to the first list
    } else if (i % 3 === 1) {
      list2.push(toEncrypt[i]); // Add to the second list
    } else {
      list3.push(toEncrypt[i]); // Add to the third list
    }
  }

  return list1.join('') + list2.join('') + list3.join('');
  // Join each list into a string and concatenate them
};

console.log(encryptString("encrypted")); // Output: "ertnyecpd"

