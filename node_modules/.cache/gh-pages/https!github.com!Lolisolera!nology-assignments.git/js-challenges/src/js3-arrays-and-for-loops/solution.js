/* Foundation Challenges */

export const createRecipeString = (ingredientsArr) => {
  const recipeString = ingredientsArr.join("+");
  return recipeString;
};

export const getFirstAndLastItems = (itemsArr) => {
  const first = itemsArr[0];
  const last = itemsArr[itemsArr.length - 1];
  return [first, last];
};

export const totalScores = (scoreArr) => {
  let total = 0;
  for (let index = 0; index < scoreArr.length; index++) {
    total += scoreArr[index];
  }
  return total;
};

/* Intermediate Challenges */

export const totalRange = (rangeMax) => {
  let total = 0;
  for (let index = 0; index <= rangeMax; index++) {
    total += index;
  }
  return total;
};

export const moveFirstAndLastItems = (itemsArr) => {
  const result = [...itemsArr];
  const lastItem = result.pop();
  result.unshift(lastItem);
  return result;
};

export const removeEvenNumbers = (numberArr) => {
  const oddNumbers = [];
  for (let index = 0; index < numberArr.length; index++) {
    let current = numberArr[index];
    if (current % 2 !== 0) {
      oddNumbers.push(current);
    }
  }
  return oddNumbers;
};

/* Advanced Challenges*/

export const generateAverage = (numberArr) => {
  const total = totalScores(numberArr);
  const average = total / numberArr.length;
  return Math.round(average) || 0;
};

export const reverseOrder = (toReverseArr) => {
  const reversed = [];
  for (let index = toReverseArr.length - 1; index >= 0; index--) {
    reversed.push(toReverseArr[index]);
  }
  return reversed;
};

/* Expert Challenges */

export const generateHighscores = (playersArr, scoresArr) => {
  if (playersArr.length !== scoresArr.length || !playersArr.length)
    return "invalid inputs";
  const scores = [];
  while (scores.length !== playersArr.length) {
    const index = scores.length;
    const message = `P:${index + 1} ${playersArr[index]} scored ${
      scoresArr[index]
    }`;
    scores.push(message);
  }

  return scores;
};

export const encryptString = (toEncrypt) => {
  const encryptArray = [[], [], []];

  for (let index = 0; index < toEncrypt.length; index++) {
    const placementIndex = index % 3;
    const letter = toEncrypt[index];
    encryptArray[placementIndex].push(letter);
  }

  return encryptArray.flat().join("");
};
